'use client'
import * as React from 'react'
import { useEffect, useRef } from 'react'
import { createNoise2D } from 'simplex-noise'

interface Point {
    x: number
    y: number
    wave: { x: number; y: number }
    cursor: { x: number; y: number; vx: number; vy: number }
}

interface WavesProps {
    className?: string
    strokeColor?: string
    backgroundColor?: string
    pointerSize?: number
}

export function Waves({
    className = "",
    strokeColor = "#ffffff",
    backgroundColor = "transparent",
    pointerSize = 0,
}: WavesProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const svgRef       = useRef<SVGSVGElement>(null)
    const mouseRef     = useRef({ x: -10, y: 0, lx: 0, ly: 0, sx: 0, sy: 0, v: 0, vs: 0, a: 0, set: false })
    const pathsRef     = useRef<SVGPathElement[]>([])
    const linesRef     = useRef<Point[][]>([])
    const noiseRef     = useRef<((x: number, y: number) => number) | null>(null)
    const rafRef       = useRef<number | null>(null)
    const boundingRef  = useRef<DOMRect | null>(null)
    const frameRef     = useRef(0)

    useEffect(() => {
        if (!containerRef.current || !svgRef.current) return
        noiseRef.current = createNoise2D()
        setSize()
        setLines()
        window.addEventListener('resize', onResize)
        window.addEventListener('mousemove', onMouseMove)
        containerRef.current.addEventListener('touchmove', onTouchMove, { passive: false })
        rafRef.current = requestAnimationFrame(tick)
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            window.removeEventListener('resize', onResize)
            window.removeEventListener('mousemove', onMouseMove)
            containerRef.current?.removeEventListener('touchmove', onTouchMove)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setSize = () => {
        if (!containerRef.current || !svgRef.current) return
        boundingRef.current = containerRef.current.getBoundingClientRect()
        svgRef.current.style.width  = `${boundingRef.current.width}px`
        svgRef.current.style.height = `${boundingRef.current.height}px`
    }

    const setLines = () => {
        if (!svgRef.current || !boundingRef.current) return
        const { width, height } = boundingRef.current

        pathsRef.current.forEach(p => p.remove())
        pathsRef.current = []
        linesRef.current = []

        // ─── PERFORMANCE: wider gaps = far fewer nodes ───────────────────────
        // xGap=24 yGap=24 → ~96 lines × ~43 pts = ~4,100 nodes  (was 30,000+)
        const xGap = 24
        const yGap = 24

        const totalLines  = Math.ceil((width  + 200) / xGap)
        const totalPoints = Math.ceil((height +  30) / yGap)
        const xStart = (width  - xGap * totalLines)  / 2
        const yStart = (height - yGap * totalPoints) / 2

        for (let i = 0; i < totalLines; i++) {
            const points: Point[] = []
            for (let j = 0; j < totalPoints; j++) {
                points.push({
                    x: xStart + xGap * i,
                    y: yStart + yGap * j,
                    wave:   { x: 0, y: 0 },
                    cursor: { x: 0, y: 0, vx: 0, vy: 0 },
                })
            }
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
            path.setAttribute('fill', 'none')
            path.setAttribute('stroke', strokeColor)
            path.setAttribute('stroke-width', '1.2')
            path.setAttribute('stroke-opacity', '0.7')
            svgRef.current.appendChild(path)
            pathsRef.current.push(path)
            linesRef.current.push(points)
        }
    }

    const onResize    = () => { setSize(); setLines() }
    const onMouseMove = (e: MouseEvent) => updateMouse(e.pageX, e.pageY)
    const onTouchMove = (e: TouchEvent) => { e.preventDefault(); updateMouse(e.touches[0].clientX, e.touches[0].clientY) }

    const updateMouse = (x: number, y: number) => {
        if (!boundingRef.current) return
        const m = mouseRef.current
        m.x = x - boundingRef.current.left
        m.y = y - boundingRef.current.top + window.scrollY
        if (!m.set) { m.sx = m.x; m.sy = m.y; m.lx = m.x; m.ly = m.y; m.set = true }
    }

    const movePoints = (time: number) => {
        const noise = noiseRef.current
        const m     = mouseRef.current
        if (!noise) return

        linesRef.current.forEach(points => {
            points.forEach(p => {
                const move = noise(
                    (p.x + time * 0.006) * 0.0025,
                    (p.y + time * 0.002) * 0.0018,
                ) * 10

                p.wave.x = Math.cos(move) * 14
                p.wave.y = Math.sin(move) * 7

                const dx = p.x - m.sx
                const dy = p.y - m.sy
                const d  = Math.hypot(dx, dy)
                const l  = Math.max(160, m.vs)

                if (d < l) {
                    const s = 1 - d / l
                    const f = Math.cos(d * 0.001) * s
                    p.cursor.vx += Math.cos(m.a) * f * l * m.vs * 0.0003
                    p.cursor.vy += Math.sin(m.a) * f * l * m.vs * 0.0003
                }

                p.cursor.vx += (0 - p.cursor.x) * 0.012
                p.cursor.vy += (0 - p.cursor.y) * 0.012
                p.cursor.vx *= 0.94
                p.cursor.vy *= 0.94
                p.cursor.x  += p.cursor.vx
                p.cursor.y  += p.cursor.vy
                p.cursor.x   = Math.min(45, Math.max(-45, p.cursor.x))
                p.cursor.y   = Math.min(45, Math.max(-45, p.cursor.y))
            })
        })
    }

    const moved = (p: Point, useCursor = true) => ({
        x: p.x + p.wave.x + (useCursor ? p.cursor.x : 0),
        y: p.y + p.wave.y + (useCursor ? p.cursor.y : 0),
    })

    const drawLines = () => {
        linesRef.current.forEach((points, li) => {
            if (points.length < 2 || !pathsRef.current[li]) return
            const first = moved(points[0], false)
            let d = `M ${first.x.toFixed(1)} ${first.y.toFixed(1)}`
            for (let i = 1; i < points.length; i++) {
                const c = moved(points[i])
                d += ` L ${c.x.toFixed(1)} ${c.y.toFixed(1)}`
            }
            pathsRef.current[li].setAttribute('d', d)
        })
    }

    const tick = (time: number) => {
        frameRef.current++

        // ─── Run physics every frame but only redraw every 2nd ───────────────
        const m  = mouseRef.current
        m.sx    += (m.x - m.sx) * 0.1
        m.sy    += (m.y - m.sy) * 0.1
        const dx = m.x - m.lx
        const dy = m.y - m.ly
        const d  = Math.hypot(dx, dy)
        m.v      = d
        m.vs    += (d - m.vs) * 0.1
        m.vs     = Math.min(100, m.vs)
        m.lx     = m.x
        m.ly     = m.y
        m.a      = Math.atan2(dy, dx)

        if (containerRef.current) {
            containerRef.current.style.setProperty('--x', `${m.sx}px`)
            containerRef.current.style.setProperty('--y', `${m.sy}px`)
        }

        movePoints(time)
        if (frameRef.current % 2 === 0) drawLines()   // skip every other draw call

        rafRef.current = requestAnimationFrame(tick)
    }

    return (
        <div
            ref={containerRef}
            className={`waves-component ${className}`}
            style={{
                backgroundColor,
                position: 'absolute', top: 0, left: 0,
                width: '100%', height: '100%',
                overflow: 'hidden',
                '--x': '-0.5rem',
                '--y': '50%',
            } as React.CSSProperties}
        >
            <svg
                ref={svgRef}
                style={{ display: 'block', width: '100%', height: '100%' }}
                xmlns="http://www.w3.org/2000/svg"
            />
            {pointerSize > 0 && (
                <div style={{
                    position: 'absolute', top: 0, left: 0,
                    width: `${pointerSize}rem`, height: `${pointerSize}rem`,
                    background: strokeColor, borderRadius: '50%',
                    transform: 'translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)',
                    willChange: 'transform',
                }} />
            )}
        </div>
    )
}
