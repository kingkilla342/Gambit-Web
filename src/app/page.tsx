'use client'

import { Waves } from '@/components/ui/wave-background'
import { useEffect, useState } from 'react'
import Link from 'next/link'

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IcBrain = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>
const IcZap  = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
const IcHat  = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v3"/></svg>
const IcUsers= () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
const IcDB   = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>
const IcTrend= () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
const IcDollar=()=> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
const IcShield=()=><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
const IcLock = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
const IcCheck= () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
const IcMenu = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
const IcClose= () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  bg:      '#0a0618',
  card:    '#130825',
  cardB:   '#0e0622',
  p400:    '#a855f7',   // bright violet
  p500:    '#7c3aed',   // deep violet-purple
  p700:    '#5b21b6',   // very deep purple
  p900:    '#2e1065',   // near-black purple
  text:    '#ffffff',
  dim:     '#c4b8dc',
  muted:   '#6b5a8a',
  border:  'rgba(124,58,237,0.22)',
  borderHi:'rgba(168,85,247,0.5)',
  glow:    'rgba(124,58,237,0.45)',
  glowHi:  'rgba(168,85,247,0.7)',
}

// ─── Reusable atoms ───────────────────────────────────────────────────────────

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'5px 16px', borderRadius:100, marginBottom:18, border:`1px solid ${T.borderHi}`, background:'rgba(124,58,237,0.1)', boxShadow:`0 0 18px rgba(124,58,237,0.12)` }}>
      <span style={{ width:6, height:6, borderRadius:'50%', background:T.p400, display:'inline-block', boxShadow:`0 0 8px ${T.p400}` }} />
      <span style={{ color:T.p400, fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase' }}>{children}</span>
    </div>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize:'clamp(2rem,4vw,2.9rem)', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.12, color:T.text, marginBottom:14 }}>{children}</h2>
}

function Sub({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return <p style={{ color:T.dim, fontSize:'clamp(.95rem,2vw,1.08rem)', lineHeight:1.75, maxWidth:580, margin: center ? '0 auto 52px' : '0 0 52px' }}>{children}</p>
}

function Section({ id, children, dark }: { id?: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section id={id} style={{ padding:'clamp(64px,10vw,120px) clamp(16px,4vw,24px)', background: dark ? 'linear-gradient(180deg,#220848 0%,#180538 100%)' : 'linear-gradient(180deg,#0e0828 0%,#0a0618 100%)', borderTop:`1px solid ${T.border}` }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>{children}</div>
    </section>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = [
    { label:'How It Works', href:'#how-it-works' },
    { label:'Services',     href:'#what-we-do'   },
    { label:'Pricing',      href:'#pricing'      },
    { label:'Security',     href:'#security'     },
  ]

  return (
    <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:100, transition:'all 0.35s ease', background: scrolled ? 'rgba(7,6,12,0.85)' : 'transparent', backdropFilter: scrolled ? 'blur(22px)' : 'none', borderBottom: scrolled ? `1px solid ${T.border}` : 'none' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 28px' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:70 }}>

          <a href="#" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:2 }}>
            <span style={{ fontSize:27, fontWeight:900, letterSpacing:'-0.03em' }}>
              <span className="shimmer">B2</span><span style={{ color:T.text }}>Labz</span>
            </span>
          </a>

          <ul style={{ display:'flex', gap:36, listStyle:'none', margin:0, padding:0 }} className="hidden md:flex">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{ color:T.dim, textDecoration:'none', fontSize:13, fontWeight:500, letterSpacing:'0.06em', textTransform:'uppercase', transition:'color .2s' }}
                  onMouseEnter={e=>(e.currentTarget.style.color=T.p400)}
                  onMouseLeave={e=>(e.currentTarget.style.color=T.dim)}>{l.label}</a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-glow hidden md:inline-flex" style={{ padding:'10px 26px', fontSize:13, textDecoration:'none' }}>
            Get Started
          </a>

          <button className="md:hidden" onClick={()=>setOpen(!open)} style={{ background:'none', border:'none', color:T.text, cursor:'pointer', padding:4 }}>
            {open ? <IcClose/> : <IcMenu/>}
          </button>
        </div>

        {open && (
          <div style={{ background:'rgba(7,6,12,0.97)', borderTop:`1px solid ${T.border}`, padding:'16px 0 28px' }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={()=>setOpen(false)}
                style={{ display:'block', padding:'13px 0', color:T.dim, textDecoration:'none', fontSize:15, fontWeight:500, borderBottom:`1px solid ${T.border}` }}>
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={()=>setOpen(false)} className="btn-glow"
              style={{ display:'inline-block', marginTop:22, padding:'12px 30px', fontSize:14, textDecoration:'none' }}>
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>

      {/* ── Layer 1: sky.jpg ── */}
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:'url(/sky.jpg)',
        backgroundSize:'cover',
        backgroundPosition:'center top',
        backgroundRepeat:'no-repeat',
      }} />

      {/* ── Layer 2: dark vignette so black zones stay matte-black ── */}
      <div style={{
        position:'absolute', inset:0,
        background:'linear-gradient(180deg, rgba(7,6,12,0.38) 0%, rgba(7,6,12,0.18) 45%, rgba(7,6,12,0.78) 100%)',
      }} />

      {/* ── Layer 3: wave animation (semi-transparent, floats over sky) ── */}
      <div style={{ position:'absolute', inset:0, opacity:0.45 }}>
        <Waves strokeColor="rgba(192,132,252,0.65)" backgroundColor="transparent" />
      </div>

      {/* ── Layer 4: light frosted overlay so waves don't kill readability ── */}
      <div style={{
        position:'absolute', inset:0,
        background:'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(91,33,182,0.08) 0%, transparent 70%)',
      }} />

      {/* ── Floating star sparks ── */}
      {[{t:'14%',l:'18%',s:3},{t:'9%',l:'52%',s:5},{t:'20%',l:'75%',s:3},{t:'30%',l:'88%',s:2},{t:'35%',l:'8%',s:3},{t:'16%',l:'38%',s:2}].map((sp,i)=>(
        <div key={i} style={{ position:'absolute', top:sp.t, left:sp.l, width:sp.s, height:sp.s, borderRadius:'50%', background:'#fff', animation:`starPulse ${1.6+i*0.45}s ease-in-out infinite`, zIndex:5 }} />
      ))}

      {/* ── Content ── */}
      <div style={{ position:'relative', zIndex:10, textAlign:'center', maxWidth:820, padding:'90px 28px 0' }} className="fade-up">

        <h1 style={{ fontSize:'clamp(1.75rem,3.8vw,3rem)', fontWeight:900, lineHeight:1.12, marginBottom:24, letterSpacing:'-0.03em', color:T.text, textShadow:'0 2px 40px rgba(0,0,0,0.6)' }}>
          We Don&apos;t Just Build Websites —<br className="hidden md:block"/>
          <span className="shimmer">We Build Systems</span><br className="hidden md:block"/>
          That Bring In Customers.
        </h1>

        <p style={{ fontSize:'clamp(1rem,2.5vw,1.2rem)', color:T.dim, lineHeight:1.75, maxWidth:600, margin:'0 auto 44px', textShadow:'0 1px 12px rgba(0,0,0,0.5)' }}>
          A website builder for businesses powered by AI tools and real strategy —
          so your site actively generates revenue, not just sits there looking pretty.
        </p>

        <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
          <a href="#pricing" className="btn-glow" style={{ padding:'15px 40px', fontSize:15, textDecoration:'none' }}>
            See Pricing
          </a>
          <a href="#how-it-works" className="btn-outline" style={{ padding:'15px 40px', fontSize:15, textDecoration:'none' }}>
            How It Works
          </a>
        </div>

        {/* scroll cue */}
        <div style={{ marginTop:68, display:'flex', justifyContent:'center' }}>
          <div style={{ width:1, height:56, background:`linear-gradient(to bottom,${T.p500},transparent)` }}/>
        </div>
      </div>
    </section>
  )
}

// ─── How It Works — The Architect ────────────────────────────────────────────
function HowItWorks() {
  const capabilities = [
    { n:'01', label:'Strategy & Planning',      desc:'Define your goals, map user journeys, and pick the right stack before a single line of code is written.' },
    { n:'02', label:'UX & Visual Design',        desc:'Typography, color, spacing — every detail engineered to reflect your brand and convert visitors into clients.' },
    { n:'03', label:'Build & AI Orchestration',  desc:'I direct AI tools and custom code to deliver production-quality results at a fraction of traditional timelines.' },
    { n:'04', label:'Launch & Communication',    desc:'Clear milestones, zero jargon, and post-launch support — you always know exactly where your project stands.' },
  ]

  const deliverables = [
    'Custom strategy roadmap before build starts',
    'Mobile-first — flawless on every screen size',
    'SEO foundations built into every page',
    'Performance-optimized for fast load times',
    'Secure data handling from day one',
    'AI-powered automations to save you 5–10 hrs/week',
    'Post-launch support & maintenance options',
  ]

  return (
    <Section id="how-it-works" dark>
      <div className="two-col-grid">

        {/* Left — description + deliverables */}
        <div>
          <Pill>How It Works</Pill>
          <H2>One Architect.<br/>Full Ownership.</H2>
          <p style={{ color:T.dim, lineHeight:1.78, marginBottom:36, fontSize:'clamp(.95rem,2vw,1.08rem)' }}>
            I am the single point of contact for every project. No handoffs, no miscommunication —
            I own strategy, design, development, and client management end-to-end so your website
            launches faster and performs better.
          </p>

          <ul style={{ listStyle:'none', padding:0, margin:'0 0 40px', display:'flex', flexDirection:'column', gap:12 }}>
            {deliverables.map((d,i) => (
              <li key={i} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                <span style={{ color:T.p400, flexShrink:0, marginTop:3 }}><IcCheck/></span>
                <span style={{ color:T.dim, fontSize:14, lineHeight:1.6 }}>{d}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-glow" style={{ display:'inline-block', padding:'13px 34px', fontSize:14, textDecoration:'none' }}>
            Work With Me
          </a>
        </div>

        {/* Right — 4 capability cards */}
        <div className="four-col-grid">
          {capabilities.map((c,i) => (
            <div key={i} className="glass"
              style={{ padding:'26px 22px', transition:'border-color .3s, transform .3s' }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.borderColor=T.borderHi; el.style.transform='translateY(-3px)' }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.borderColor='rgba(88,77,255,.22)'; el.style.transform='translateY(0)' }}>
              <div style={{ fontSize:11, color:T.p400, fontWeight:800, letterSpacing:'0.12em', marginBottom:12, fontVariantNumeric:'tabular-nums' }}>{c.n}</div>
              <h3 style={{ color:T.text, fontSize:13.5, fontWeight:700, marginBottom:9, lineHeight:1.3 }}>{c.label}</h3>
              <p style={{ color:T.muted, fontSize:13, lineHeight:1.65 }}>{c.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </Section>
  )
}

// ─── Selected Work ────────────────────────────────────────────────────────────
function SelectedWork() {
  const works = [
    { letter:'O', label:'Optic Specs',    type:'E-Commerce',      url:'https://optic-specs.vercel.app/',    delay:0   },
    { letter:'B', label:'B2Labz Studio',  type:'Creative Studio', url:'https://b2labzstudio.vercel.app/',  delay:0.4 },
    { letter:'A', label:'Access MKT',     type:'Marketing',       url:'https://access-mkt.vercel.app/',    delay:0.8 },
  ]

  return (
    <Section id="work">
      <div style={{ textAlign:'center', marginBottom:64 }}>
        <Pill>Selected Work</Pill>
        <H2>Live Sites We&apos;ve Built</H2>
        <Sub center>Click any dot to explore a live project built with this exact system.</Sub>
      </div>

      <div style={{ display:'flex', gap:'clamp(32px,6vw,72px)', justifyContent:'center', flexWrap:'wrap', alignItems:'flex-start' }}>
        {works.map((w,i) => (
          <a key={i} href={w.url} target="_blank" rel="noopener noreferrer"
            style={{ textDecoration:'none', display:'flex', flexDirection:'column', alignItems:'center', gap:20, cursor:'pointer' }}
            onMouseEnter={e=>{ const dot=e.currentTarget.querySelector('.work-dot') as HTMLDivElement; if(dot){ dot.style.transform='scale(1.1)'; dot.style.boxShadow=`0 0 80px rgba(168,85,247,0.9), 0 0 150px rgba(124,58,237,0.4)` }}}
            onMouseLeave={e=>{ const dot=e.currentTarget.querySelector('.work-dot') as HTMLDivElement; if(dot){ dot.style.transform='scale(1)'; dot.style.boxShadow=`0 0 40px rgba(124,58,237,0.55), 0 0 80px rgba(91,33,182,0.2)` }}}>

            {/* The glowing portal dot */}
            <div className="work-dot" style={{
              width:140, height:140, borderRadius:'50%',
              background:`radial-gradient(circle at 38% 32%, #c084fc, #7c3aed 50%, #2e1065)`,
              border:`1.5px solid rgba(168,85,247,0.5)`,
              boxShadow:`0 0 40px rgba(124,58,237,0.55), 0 0 80px rgba(91,33,182,0.2)`,
              display:'flex', alignItems:'center', justifyContent:'center',
              animation:`dotPulse ${2.2 + i * 0.5}s ease-in-out infinite`,
              transition:'transform .35s ease, box-shadow .35s ease',
            }}>
              <span style={{ color:'rgba(255,255,255,0.95)', fontSize:42, fontWeight:900, letterSpacing:'-0.03em', textShadow:'0 2px 16px rgba(0,0,0,0.4)' }}>{w.letter}</span>
            </div>

            {/* Label */}
            <div style={{ textAlign:'center' }}>
              <div style={{ color:T.text, fontWeight:700, fontSize:15, letterSpacing:'-0.01em', marginBottom:4 }}>{w.label}</div>
              <div style={{ color:T.muted, fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em' }}>{w.type}</div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}

// ─── What We Do ───────────────────────────────────────────────────────────────
function WhatWeDo() {
  const features = [
    { icon:<IcUsers/>,  title:'Attract More Customers',      desc:'Strategic design and SEO-ready structure that puts your business in front of the right people at the right time.' },
    { icon:<IcDB/>,     title:'Manage Customer Data Safely', desc:"Built-in data handling best practices so customers' info is always protected and compliant." },
    { icon:<IcTrend/>,  title:'Work Faster & Smarter',       desc:'Automations that reduce manual work — saving you 5–10 hours per week from the moment you launch.' },
    { icon:<IcDollar/>, title:'Generate Real Revenue',       desc:'Your website becomes a business tool that actively brings in clients, not just a digital brochure.' },
  ]

  return (
    <Section id="what-we-do">
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }} className="flex flex-col lg:grid">
        {/* Left */}
        <div>
          <Pill>What I Do</Pill>
          <H2>Powerful Websites That Work 24/7</H2>
          <p style={{ color:T.dim, fontSize:'clamp(.95rem,2vw,1.08rem)', lineHeight:1.78, marginBottom:36 }}>
            I build websites engineered to attract customers, streamline your operations,
            and turn visitors into paying clients — not just look good on a screen.
          </p>
          {/* stat callouts */}
          <div style={{ display:'flex', gap:28, marginBottom:40 }}>
            {[{n:'5–10h',l:'Saved per week'},{n:'80%',l:'Faster builds'},{n:'24/7',l:'AI chatbot'}].map((s,i)=>(
              <div key={i}>
                <div style={{ fontSize:28, fontWeight:900, letterSpacing:'-0.04em' }} className="shimmer">{s.n}</div>
                <div style={{ color:T.muted, fontSize:12, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.07em' }}>{s.l}</div>
              </div>
            ))}
          </div>
          <a href="#contact" className="btn-glow" style={{ display:'inline-block', padding:'13px 34px', fontSize:14, textDecoration:'none' }}>
            Book a Strategy Call
          </a>
        </div>

        {/* Right */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
          {features.map((f,i)=>(
            <div key={i} className="glass"
              style={{ padding:'26px 22px', transition:'border-color .3s, transform .3s' }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.borderColor=T.borderHi; el.style.transform='translateY(-3px)' }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.borderColor='rgba(124,58,237,.22)'; el.style.transform='translateY(0)' }}>
              <div style={{ width:40, height:40, borderRadius:10, background:'rgba(124,58,237,0.15)', border:`1px solid ${T.border}`, display:'flex', alignItems:'center', justifyContent:'center', color:T.p400, marginBottom:14 }}>{f.icon}</div>
              <h3 style={{ color:T.text, fontSize:14, fontWeight:700, marginBottom:8 }}>{f.title}</h3>
              <p style={{ color:T.muted, fontSize:13, lineHeight:1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
type PC = { badge:string; color:string; title:string; price:string; bestFor:string; goal:string; items:string[]; value?:string; hot?:boolean; slug:string }

function PCard({ badge,color,title,price,bestFor,goal,items,value,hot=false,slug }:PC) {
  return (
    <Link href={`/pricing/${slug}`} style={{ textDecoration:'none', display:'block' }}>
      <div
        className={hot ? 'grad-border' : ''}
        style={{
          padding:'38px 28px', borderRadius:18, cursor:'pointer',
          background: hot ? 'linear-gradient(145deg,#220848,#150535)' : 'rgba(24,10,56,0.55)',
          border: hot ? 'none' : `1px solid ${T.border}`,
          position:'relative', height:'100%',
          transition:'transform .3s, box-shadow .3s',
          boxShadow: hot ? `0 0 50px rgba(124,58,237,0.28)` : 'none',
        }}
        onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-7px)'; el.style.boxShadow=`0 24px 60px rgba(124,58,237,0.35)` }}
        onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(0)'; el.style.boxShadow= hot ? `0 0 50px rgba(124,58,237,0.28)` : 'none' }}>

        {hot && (
          <div style={{ position:'absolute', top:-14, left:'50%', transform:'translateX(-50%)', padding:'4px 22px', background:`linear-gradient(135deg,${T.p500},${T.p400})`, borderRadius:100, fontSize:11, fontWeight:700, color:'#fff', letterSpacing:'0.09em', textTransform:'uppercase', whiteSpace:'nowrap', boxShadow:`0 0 18px ${T.glow}` }}>
            Most Popular
          </div>
        )}

        <span style={{ display:'inline-block', padding:'4px 14px', background:`${color}18`, border:`1px solid ${color}44`, borderRadius:100, fontSize:11, color, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:20 }}>{badge}</span>

        <h3 style={{ color:T.text, fontSize:21, fontWeight:800, marginBottom:6, letterSpacing:'-0.02em' }}>{title}</h3>
        <div style={{ marginBottom:12 }}>
          <span style={{ color:T.p400, fontSize:32, fontWeight:900, letterSpacing:'-0.04em' }}>{price}</span>
        </div>
        <p style={{ color:T.muted, fontSize:13, marginBottom:22, lineHeight:1.6 }}>
          <span style={{ color:T.dim, fontWeight:600 }}>Best for:</span> {bestFor}
        </p>

        <div style={{ height:1, background:T.border, marginBottom:20 }}/>

        <ul style={{ listStyle:'none', padding:0, margin:'0 0 20px', display:'flex', flexDirection:'column', gap:11 }}>
          {items.map((item,i)=>(
            <li key={i} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
              <span style={{ color:T.p400, flexShrink:0, marginTop:2 }}><IcCheck/></span>
              <span style={{ color:T.dim, fontSize:13.5, lineHeight:1.5 }}>{item}</span>
            </li>
          ))}
        </ul>

        {(goal||value) && (
          <div style={{ padding:'12px 14px', background:'rgba(124,58,237,0.1)', border:`1px solid rgba(124,58,237,0.22)`, borderRadius:10, marginBottom:24 }}>
            <p style={{ color:'#c084fc', fontSize:13, lineHeight:1.65 }}>
              <span style={{ fontWeight:700 }}>Goal: </span>{goal}
              {value && <><br/><span style={{ fontWeight:700 }}>Value: </span>{value}</>}
            </p>
          </div>
        )}

        <div className={hot ? 'btn-glow' : 'btn-outline'}
          style={{ display:'block', textAlign:'center', padding:'13px 24px', fontSize:14 }}>
          View Full Details →
        </div>
      </div>
    </Link>
  )
}

function Pricing() {
  return (
    <Section id="pricing" dark>
      <div style={{ textAlign:'center', marginBottom:64 }}>
        <Pill>Pricing</Pill>
        <H2>Simple, Value-Based Pricing</H2>
        <Sub center>Based on complexity and value — not just page count. Starts with a free 1-hour strategy call to find the right plan.</Sub>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(268px,1fr))', gap:22, marginBottom:36 }}>
        <PCard badge="Starter" color="#818cf8" title="Small Business" price="$150 – $500"
          bestFor="New or local businesses that need an online presence."
          goal="Get your name out there and start building trust online."
          slug="starter"
          items={['1–5 pages (Home, About, Services, Contact)','Clean, responsive design','Google Maps integration','Basic online visibility setup']}/>
        <PCard badge="Standard" color={T.p400} title="Business Site" price="$500 – $1,500"
          bestFor="Businesses that want to save time and improve customer flow."
          goal="Modernize your presence and automate your intake."
          value="Saves 5–10 hrs/week on scheduling & emails."
          slug="standard"
          items={['5–10 pages','Contact forms + booking system','Basic SEO (Google visibility)','Custom branding & animations','Calendar integration']} hot/>
        <PCard badge="Growth" color="#c084fc" title="Growth Site" price="$1,500 – $3,000+"
          bestFor="Businesses ready to scale and fully automate."
          goal="Turn your website into a fully automated business tool."
          slug="growth"
          items={['10+ pages','Blog + CMS','Email, booking & payment integrations','Performance optimization','Auto email reply system','Bank-level secure intake','AI chatbot (answers clients 24/7)']}/>
      </div>

      {/* Add-ons */}
      <div className="glass" style={{ padding:'36px 40px' }}>
        <span style={{ display:'inline-block', padding:'4px 14px', background:'rgba(192,132,252,0.1)', border:'1px solid rgba(192,132,252,0.3)', borderRadius:100, fontSize:11, color:'#c084fc', fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:20 }}>Add-Ons</span>
        <h3 style={{ color:T.text, fontSize:18, fontWeight:700, marginBottom:24 }}>Additional Services</h3>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(175px,1fr))', gap:14 }}>
          {[{l:'Extra page',price:'$50 each'},{l:'SEO setup',price:'$100–$150'},{l:'Logo/design',price:'$45'},{l:'Monthly maintenance',price:'$20–$100/mo'},{l:'Domain setup',price:'$15'}].map((item,i)=>(
            <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 16px', background:'rgba(7,6,12,0.6)', borderRadius:10, border:`1px solid ${T.border}` }}>
              <span style={{ color:T.dim, fontSize:13.5 }}>{item.l}</span>
              <span style={{ color:T.p400, fontWeight:700, fontSize:13.5 }}>{item.price}</span>
            </div>
          ))}
        </div>
        <p style={{ color:T.muted, fontSize:12.5, marginTop:18 }}>* Monthly fees cover hosting, updates, and keeping everything running smoothly.</p>
      </div>
    </Section>
  )
}

// ─── Security ─────────────────────────────────────────────────────────────────
function Security() {
  const cats = [
    { icon:<IcShield/>, title:'Foundation & Account Access', items:['Strong, unique passwords for all accounts','2-Factor Authentication (2FA) on all platforms','Password managers like 1Password for secure storage','Role-based access — only the right people get in'] },
    { icon:<IcLock/>,   title:'Data Protection',             items:['All sensitive data (API keys, payments) stored securely','Vault systems like Supabase Vault for secrets','No sensitive info ever exposed in frontend code','Bank-level secure client intake for all forms'] },
  ]

  return (
    <Section id="security">
      <div style={{ textAlign:'center', marginBottom:60 }}>
        <Pill>Security</Pill>
        <H2>Built Secure From Day One</H2>
        <Sub center>Security isn&apos;t an afterthought — it&apos;s woven into every project to protect you and your customers from the ground up.</Sub>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(310px,1fr))', gap:24 }}>
        {cats.map((cat,i)=>(
          <div key={i} className="grad-border"
            style={{ padding:'40px 32px', transition:'transform .3s, box-shadow .3s' }}
            onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-5px)'; el.style.boxShadow=`0 20px 55px rgba(124,58,237,0.2)` }}
            onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(0)'; el.style.boxShadow='none' }}>
            <div style={{ width:54, height:54, borderRadius:14, background:'linear-gradient(135deg,rgba(124,58,237,0.2),rgba(91,33,182,0.08))', border:`1px solid rgba(124,58,237,0.3)`, display:'flex', alignItems:'center', justifyContent:'center', color:T.p400, marginBottom:22, boxShadow:`0 0 20px rgba(124,58,237,0.15)` }}>{cat.icon}</div>
            <h3 style={{ color:T.text, fontSize:18, fontWeight:700, marginBottom:20 }}>{cat.title}</h3>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:13 }}>
              {cat.items.map((item,j)=>(
                <li key={j} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                  <span style={{ color:T.p400, flexShrink:0, marginTop:2 }}><IcCheck/></span>
                  <span style={{ color:T.dim, fontSize:14, lineHeight:1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section id="contact" style={{ padding:'clamp(72px,10vw,120px) 24px', background:`radial-gradient(ellipse 70% 60% at 50% 0%,${T.p900} 0%,${T.card} 45%,${T.bg} 100%)`, borderTop:`1px solid ${T.border}`, position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'30%', left:'50%', transform:'translate(-50%,-50%)', width:600, height:350, background:`radial-gradient(ellipse,rgba(124,58,237,0.18) 0%,transparent 70%)`, pointerEvents:'none' }}/>
      <div style={{ maxWidth:720, margin:'0 auto', textAlign:'center', position:'relative', zIndex:1 }}>
        <Pill>Let&apos;s Work Together</Pill>
        <h2 style={{ fontSize:'clamp(2rem,5vw,3.1rem)', fontWeight:900, letterSpacing:'-0.04em', lineHeight:1.1, color:T.text, marginBottom:20 }}>
          Ready to Build a Website That <span className="shimmer">Actually Works?</span>
        </h2>
        <p style={{ color:T.dim, fontSize:'clamp(.95rem,2vw,1.1rem)', lineHeight:1.75, maxWidth:500, margin:'0 auto 44px' }}>
          Start with a free 1-hour strategy call — no pressure, no pitch deck. Just a real conversation about what your business needs to grow.
        </p>
        <a href="mailto:hello@b2labz.com" className="btn-glow" style={{ display:'inline-block', padding:'16px 48px', fontSize:16, textDecoration:'none' }}>
          Book Free Strategy Call
        </a>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ padding:'28px 28px', background:T.bg, borderTop:`1px solid ${T.border}` }}>
      <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:14 }}>
        <span style={{ fontSize:21, fontWeight:900, letterSpacing:'-0.03em' }}>
          <span className="shimmer">B2</span><span style={{ color:T.text }}>Labz</span>
        </span>
        <p style={{ color:T.muted, fontSize:13 }}>© {new Date().getFullYear()} B2Labz. All rights reserved.</p>
        <div style={{ display:'flex', gap:24 }}>
          {['Privacy','Terms','Contact'].map(l=>(
            <a key={l} href="#" style={{ color:T.muted, textDecoration:'none', fontSize:13, transition:'color .2s' }}
              onMouseEnter={e=>(e.currentTarget.style.color=T.p400)}
              onMouseLeave={e=>(e.currentTarget.style.color=T.muted)}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <WhatWeDo/>
      <SelectedWork/>
      <Pricing/>
      <Security/>
      <CTA/>
      <Footer/>
    </>
  )
}
