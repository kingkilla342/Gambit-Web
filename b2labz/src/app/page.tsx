'use client'

import { Waves } from '@/components/ui/wave-background'
import { useEffect, useState } from 'react'

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────

const IconBrain = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
    <path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/>
  </svg>
)
const IconZap = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
  </svg>
)
const IconHardHat = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/>
    <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/>
    <path d="M4 15v-3a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v3"/>
  </svg>
)
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)
const IconDatabase = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19a9 3 0 0 0 18 0V5"/>
    <path d="M3 12a9 3 0 0 0 18 0"/>
  </svg>
)
const IconTrendingUp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
)
const IconDollarSign = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="2" y2="22"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
)
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
  </svg>
)
const IconLock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)
const IconCheck = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
)
const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
)

// ─── Colour tokens (from sky.jpg) ─────────────────────────────────────────────
const C = {
  bg:        '#050008',
  card:      '#0d0020',
  cardAlt:   '#120028',
  purple:    '#9933ff',
  purpleHi:  '#cc66ff',
  purpleDim: '#6600cc',
  purpleDark:'#3d0066',
  text:      '#f0e8ff',
  textDim:   '#b088dd',
  textMuted: '#7755aa',
  border:    'rgba(153,51,255,0.18)',
  borderHi:  'rgba(153,51,255,0.45)',
  glow:      'rgba(153,51,255,0.25)',
}

// ─── Reusable layout pieces ───────────────────────────────────────────────────

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '5px 16px',
      border: `1px solid ${C.borderHi}`,
      borderRadius: 100,
      marginBottom: 18,
      background: 'rgba(153,51,255,0.08)',
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.purple, display: 'inline-block', boxShadow: `0 0 6px ${C.purple}` }} />
      <span style={{ color: C.purple, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        {children}
      </span>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontSize: 'clamp(1.9rem,4vw,2.75rem)',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
      color: C.text,
      marginBottom: 14,
    }}>
      {children}
    </h2>
  )
}

function Sub({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p style={{
      color: C.textDim,
      fontSize: 'clamp(0.95rem,2vw,1.05rem)',
      lineHeight: 1.75,
      maxWidth: 580,
      marginBottom: 52,
      margin: center ? '0 auto 52px' : '0 0 52px',
    }}>
      {children}
    </p>
  )
}

function Wrap({ id, children, alt }: { id?: string; children: React.ReactNode; alt?: boolean }) {
  return (
    <section id={id} style={{
      padding: 'clamp(64px,10vw,112px) 24px',
      background: alt
        ? `linear-gradient(180deg,${C.card} 0%,${C.cardAlt} 100%)`
        : C.bg,
      borderTop: `1px solid ${C.border}`,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</div>
    </section>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Services',     href: '#what-we-do'  },
    { label: 'Pricing',      href: '#pricing'     },
    { label: 'Security',     href: '#security'    },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(5,0,8,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      borderBottom: scrolled ? `1px solid ${C.border}` : 'none',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em' }}>
              <span className="purple-shimmer">B2</span>
              <span style={{ color: C.text }}>Labz</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0 }} className="hidden md:flex">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{ color: C.textDim, textDecoration: 'none', fontSize: 13, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.purpleHi)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.textDim)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contact" className="hidden md:inline-flex"
            style={{ padding: '10px 24px', background: `linear-gradient(135deg,${C.purple},${C.purpleHi})`, color: '#fff', borderRadius: 6, fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', transition: 'opacity 0.2s, box-shadow 0.2s', boxShadow: `0 0 18px ${C.glow}` }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.boxShadow = `0 0 32px ${C.purple}` }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1';   e.currentTarget.style.boxShadow = `0 0 18px ${C.glow}` }}>
            Get Started
          </a>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', color: C.text, cursor: 'pointer', padding: 4 }}>
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        {open && (
          <div style={{ background: 'rgba(5,0,8,0.97)', borderTop: `1px solid ${C.border}`, padding: '16px 0 24px' }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ display: 'block', padding: '12px 0', color: C.textDim, textDecoration: 'none', fontSize: 15, fontWeight: 500, borderBottom: `1px solid ${C.border}` }}>
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}
              style={{ display: 'inline-block', marginTop: 20, padding: '12px 28px', background: `linear-gradient(135deg,${C.purple},${C.purpleHi})`, color: '#fff', borderRadius: 6, fontWeight: 700, fontSize: 13, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
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
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

      {/* sky.jpg background — CSS gradient fallback matches the purple palette */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/sky.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        /* Fallback if sky.jpg not yet placed in /public */
        background: 'url(/sky.jpg) center top / cover no-repeat, radial-gradient(ellipse at 50% 30%, #3d0066 0%, #1a0035 35%, #0d0020 60%, #050008 100%)',
      }} />

      {/* Wave animation — purple tint, semi-transparent */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
        <Waves
          strokeColor={`rgba(204,102,255,0.55)`}
          backgroundColor="transparent"
          pointerSize={0.5}
        />
      </div>

      {/* Overlay: softens sky + lets wave + text read cleanly */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg,rgba(5,0,8,0.45) 0%,rgba(5,0,8,0.3) 40%,rgba(5,0,8,0.72) 100%)',
      }} />

      {/* Star sparkles (decorative) */}
      {[
        { top: '12%', left: '22%', size: 3 }, { top: '18%', left: '68%', size: 4 },
        { top: '8%',  left: '50%', size: 5 }, { top: '25%', left: '82%', size: 3 },
        { top: '32%', left: '10%', size: 3 }, { top: '15%', left: '38%', size: 2 },
      ].map((s, i) => (
        <div key={i} style={{
          position: 'absolute', top: s.top, left: s.left,
          width: s.size, height: s.size,
          borderRadius: '50%',
          background: '#ffffff',
          boxShadow: `0 0 ${s.size * 3}px ${s.size}px rgba(204,102,255,0.8)`,
          animation: `starPulse ${1.8 + i * 0.4}s ease-in-out infinite`,
          zIndex: 2,
        }} />
      ))}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: 860, padding: '0 24px' }} className="fade-in-up">
        {/* Eyebrow pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 18px', borderRadius: 100, marginBottom: 28,
          border: `1px solid ${C.borderHi}`,
          background: 'rgba(153,51,255,0.1)',
          boxShadow: `0 0 20px rgba(153,51,255,0.15)`,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.purple, display: 'inline-block', boxShadow: `0 0 8px ${C.purple}` }} />
          <span style={{ color: C.purpleHi, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Websites That Work For You
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.4rem,6vw,4.2rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.03em', color: C.text }}>
          We Don&apos;t Just Build Websites —{' '}
          <br className="hidden md:block" />
          <span className="purple-shimmer">We Build Systems</span>{' '}
          <br className="hidden md:block" />
          That Bring In Customers.
        </h1>

        <p style={{ fontSize: 'clamp(1rem,2.5vw,1.2rem)', color: C.textDim, lineHeight: 1.7, maxWidth: 600, margin: '0 auto 40px' }}>
          A website builder for businesses powered by AI tools and real strategy —
          so your site actively generates revenue, not just looks good.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#pricing"
            style={{ padding: '14px 36px', background: `linear-gradient(135deg,${C.purple},${C.purpleHi})`, color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: `0 4px 28px ${C.glow}`, transition: 'transform 0.2s,box-shadow 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 40px rgba(153,51,255,0.55)` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';   e.currentTarget.style.boxShadow = `0 4px 28px ${C.glow}` }}>
            See Pricing
          </a>
          <a href="#how-it-works"
            style={{ padding: '14px 36px', background: 'transparent', color: C.text, borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: `1px solid rgba(240,232,255,0.25)`, transition: 'border-color 0.2s,background 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.purpleHi; e.currentTarget.style.background = 'rgba(153,51,255,0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,232,255,0.25)'; e.currentTarget.style.background = 'transparent' }}>
            How It Works
          </a>
        </div>

        {/* Scroll line */}
        <div style={{ marginTop: 64, display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 1, height: 52, background: `linear-gradient(to bottom,${C.purple},transparent)` }} />
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      icon: <IconBrain />, color: '#cc66ff',
      label: 'Claude AI', role: 'The Intern',
      desc: 'Handles coding, debugging, and content writing. Fixes broken layouts, writes copy, and keeps development moving fast — so nothing slows down your launch.',
    },
    {
      icon: <IconZap />, color: C.purple,
      label: 'Lovable', role: 'The Assembly Line',
      desc: 'Instantly scaffolds 80% of the website — layout, responsiveness, sections. Speeds up development dramatically and keeps your costs lower without cutting corners.',
    },
    {
      icon: <IconHardHat />, color: '#9966ff',
      label: 'My Role', role: 'The Architect & Client Manager',
      desc: 'I design the strategy behind everything: colors, layout, features — and guide you through the entire process. You focus on your business; I handle the technical side.',
    },
  ]

  return (
    <Wrap id="how-it-works" alt>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Pill>The System</Pill>
        <SectionTitle>How My System Works</SectionTitle>
        <Sub center>Three layers working together to deliver a site that performs — built faster, smarter, and more strategically than any traditional agency.</Sub>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
        {steps.map((s, i) => (
          <div key={i}
            style={{ padding: '36px 30px', background: `rgba(5,0,8,0.55)`, border: `1px solid ${C.border}`, borderRadius: 18, transition: 'border-color 0.3s,transform 0.3s,box-shadow 0.3s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = C.borderHi; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = `0 12px 40px rgba(153,51,255,0.15)` }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = C.border; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none' }}>
            <div style={{ width: 54, height: 54, borderRadius: 14, background: `rgba(153,51,255,0.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22, color: s.color, boxShadow: `0 0 16px rgba(153,51,255,0.15)` }}>
              {s.icon}
            </div>
            <div style={{ fontSize: 11, color: s.color, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
              {s.label} — {s.role}
            </div>
            <p style={{ color: C.textDim, fontSize: 14.5, lineHeight: 1.72 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </Wrap>
  )
}

// ─── What We Do ───────────────────────────────────────────────────────────────

function WhatWeDo() {
  const features = [
    { icon: <IconUsers />,      title: 'Attract More Customers',        desc: 'Strategic design and SEO-ready structure that puts your business in front of the right people at the right time.' },
    { icon: <IconDatabase />,   title: 'Manage Customer Data Safely',   desc: "Built-in data handling best practices so your customers' information is always protected and compliant." },
    { icon: <IconTrendingUp />, title: 'Work Faster & Smarter',         desc: 'Automations and integrations that reduce manual work — saving you 5–10 hours per week from day one.' },
    { icon: <IconDollarSign />, title: 'Generate Real Revenue',         desc: 'Your website becomes a tool that actively works for your business, not just a digital business card.' },
  ]

  return (
    <Wrap id="what-we-do">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="flex flex-col lg:grid">
        <div>
          <Pill>What I Do</Pill>
          <SectionTitle>Powerful Websites That Work 24/7</SectionTitle>
          <p style={{ color: C.textDim, fontSize: 'clamp(0.95rem,2vw,1.05rem)', lineHeight: 1.75, marginBottom: 36 }}>
            I build websites engineered to attract customers, streamline your operations,
            and turn visitors into paying clients — not just look good on a screen.
          </p>
          <a href="#contact"
            style={{ display: 'inline-block', padding: '13px 32px', background: `linear-gradient(135deg,${C.purple},${C.purpleHi})`, color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', boxShadow: `0 4px 22px ${C.glow}`, transition: 'transform 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            Book a Strategy Call
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          {features.map((f, i) => (
            <div key={i}
              style={{ padding: '24px 20px', background: `linear-gradient(135deg,${C.card},${C.cardAlt})`, border: `1px solid ${C.border}`, borderRadius: 14, transition: 'border-color 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = C.borderHi)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}>
              <div style={{ color: C.purple, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ color: C.text, fontSize: 13.5, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.01em' }}>{f.title}</h3>
              <p style={{ color: C.textMuted, fontSize: 13, lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

type PricingProps = {
  badge: string; badgeColor: string; title: string; price: string
  bestFor: string; goal: string; includes: string[]; value?: string; highlight?: boolean
}

function PricingCard({ badge, badgeColor, title, price, bestFor, goal, includes, value, highlight = false }: PricingProps) {
  return (
    <div
      style={{ padding: '36px 28px', background: highlight ? `linear-gradient(135deg,${C.cardAlt},${C.card})` : `rgba(13,0,32,0.5)`, border: `1px solid ${highlight ? C.borderHi : C.border}`, borderRadius: 18, position: 'relative', transition: 'transform 0.3s,box-shadow 0.3s', boxShadow: highlight ? `0 0 40px rgba(153,51,255,0.18)` : 'none' }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = `0 16px 48px rgba(153,51,255,0.22)` }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = highlight ? `0 0 40px rgba(153,51,255,0.18)` : 'none' }}>
      {highlight && (
        <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', padding: '4px 20px', background: `linear-gradient(135deg,${C.purple},${C.purpleHi})`, borderRadius: 100, fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: `0 0 14px ${C.glow}` }}>
          Most Popular
        </div>
      )}

      <div style={{ display: 'inline-block', padding: '4px 14px', background: `${badgeColor}20`, border: `1px solid ${badgeColor}55`, borderRadius: 100, fontSize: 11, color: badgeColor, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 18 }}>
        {badge}
      </div>

      <h3 style={{ color: C.text, fontSize: 20, fontWeight: 800, marginBottom: 4, letterSpacing: '-0.02em' }}>{title}</h3>
      <div style={{ marginBottom: 14 }}>
        <span style={{ color: C.purpleHi, fontSize: 30, fontWeight: 800, letterSpacing: '-0.03em' }}>{price}</span>
      </div>
      <p style={{ color: C.textMuted, fontSize: 13, marginBottom: 22, lineHeight: 1.6 }}>
        <span style={{ color: C.textDim, fontWeight: 600 }}>Best for:</span> {bestFor}
      </p>

      <div style={{ height: 1, background: C.border, marginBottom: 18 }} />

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {includes.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span style={{ color: C.purple, flexShrink: 0, marginTop: 2 }}><IconCheck /></span>
            <span style={{ color: C.textDim, fontSize: 13.5, lineHeight: 1.5 }}>{item}</span>
          </li>
        ))}
      </ul>

      {(goal || value) && (
        <div style={{ padding: '12px 14px', background: 'rgba(153,51,255,0.07)', border: `1px solid ${C.border}`, borderRadius: 8, marginBottom: 22 }}>
          <p style={{ color: C.purpleHi, fontSize: 13, lineHeight: 1.6 }}>
            <span style={{ fontWeight: 700 }}>Goal: </span>{goal}
            {value && <><br /><span style={{ fontWeight: 700 }}>Value: </span>{value}</>}
          </p>
        </div>
      )}

      <a href="#contact"
        style={{ display: 'block', textAlign: 'center', padding: '13px 24px', background: highlight ? `linear-gradient(135deg,${C.purple},${C.purpleHi})` : 'transparent', color: highlight ? '#fff' : C.purple, border: highlight ? 'none' : `1px solid ${C.borderHi}`, borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', transition: 'opacity 0.2s' }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
        Book Strategy Call
      </a>
    </div>
  )
}

function Pricing() {
  return (
    <Wrap id="pricing" alt>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <Pill>Pricing</Pill>
        <SectionTitle>Simple, Value-Based Pricing</SectionTitle>
        <Sub center>Based on complexity and value — not just page count. Starts with a free 1-hour strategy call to find the right plan for your business.</Sub>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginBottom: 36 }}>
        <PricingCard badge="Starter" badgeColor="#7755cc" title="Small Business" price="$150 – $500"
          bestFor="New or local businesses that need an online presence."
          goal="Get your name out there and start building trust online."
          includes={['1–5 pages (Home, About, Services, Contact)','Clean, simple mobile-responsive design','Google Maps integration','Basic setup to get visible online']} />

        <PricingCard badge="Standard" badgeColor={C.purple} title="Business Site" price="$500 – $1,500"
          bestFor="Businesses that want to save time and improve customer flow."
          goal="Modernize your presence and automate your intake."
          value="Saves 5–10 hrs/week on manual scheduling & emails."
          includes={['5–10 pages','Contact forms + booking system','Basic SEO (Google visibility)','Animations and modern design','Custom colors and branding','Calendar integration']}
          highlight />

        <PricingCard badge="Advanced" badgeColor="#aa44ff" title="Growth Site" price="$1,500 – $3,000+"
          bestFor="Businesses ready to scale and fully automate."
          goal="Turn your website into a fully automated business tool."
          includes={['10+ pages','Blog + CMS (update content easily)','Email, booking & payment integrations','Performance optimization','Auto email reply system','Secure client intake (bank-level)','AI chatbot (answers customers 24/7)']} />
      </div>

      {/* Add-ons */}
      <div style={{ padding: '32px 36px', background: `rgba(5,0,8,0.55)`, border: `1px solid ${C.border}`, borderRadius: 16 }}>
        <div style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(180,60,255,0.12)', border: '1px solid rgba(180,60,255,0.3)', borderRadius: 100, fontSize: 11, color: C.purpleHi, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 18 }}>Add-Ons</div>
        <h3 style={{ color: C.text, fontSize: 17, fontWeight: 700, marginBottom: 20 }}>Additional Services</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(175px,1fr))', gap: 14 }}>
          {[
            { label: 'Extra page',          price: '$50 each'     },
            { label: 'SEO setup',           price: '$100–$150'    },
            { label: 'Logo/design',         price: '$45'          },
            { label: 'Monthly maintenance', price: '$20–$100/mo'  },
            { label: 'Domain setup',        price: '$15'          },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 14px', background: `rgba(26,0,53,0.45)`, borderRadius: 8, border: `1px solid ${C.border}` }}>
              <span style={{ color: C.textDim, fontSize: 13.5 }}>{item.label}</span>
              <span style={{ color: C.purpleHi, fontWeight: 700, fontSize: 13.5 }}>{item.price}</span>
            </div>
          ))}
        </div>
        <p style={{ color: C.textMuted, fontSize: 12.5, marginTop: 18 }}>* Monthly fees cover hosting, updates, and keeping everything running smoothly.</p>
      </div>
    </Wrap>
  )
}

// ─── Security ─────────────────────────────────────────────────────────────────

function Security() {
  const cats = [
    {
      icon: <IconShield />,
      title: 'Foundation & Account Access',
      items: [
        'Strong, unique passwords for all accounts',
        '2-Factor Authentication (2FA) on all platforms',
        'Password managers like 1Password for secure storage',
        'Role-based access — only the right people get in',
      ],
    },
    {
      icon: <IconLock />,
      title: 'Data Protection',
      items: [
        'All sensitive data (API keys, payments) stored securely',
        'Vault systems like Supabase Vault for secrets management',
        'No sensitive information ever in frontend code',
        'Bank-level secure client intake for sensitive forms',
      ],
    },
  ]

  return (
    <Wrap id="security">
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Pill>Security</Pill>
        <SectionTitle>Built Secure From Day One</SectionTitle>
        <Sub center>Security isn&apos;t an afterthought — it&apos;s woven into every project to protect you and your customers from the ground up.</Sub>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
        {cats.map((cat, i) => (
          <div key={i}
            style={{ padding: '36px 30px', background: `linear-gradient(135deg,${C.card},${C.cardAlt})`, border: `1px solid ${C.border}`, borderRadius: 18, transition: 'border-color 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = C.borderHi)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}>
            <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(153,51,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.purple, marginBottom: 20, boxShadow: `0 0 16px rgba(153,51,255,0.12)` }}>{cat.icon}</div>
            <h3 style={{ color: C.text, fontSize: 17, fontWeight: 700, marginBottom: 20 }}>{cat.title}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {cat.items.map((item, j) => (
                <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: C.purple, flexShrink: 0, marginTop: 2 }}><IconCheck /></span>
                  <span style={{ color: C.textDim, fontSize: 14, lineHeight: 1.55 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Wrap>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section id="contact" style={{ padding: 'clamp(64px,10vw,112px) 24px', background: `radial-gradient(ellipse at 50% 0%,${C.purpleDark} 0%,${C.card} 40%,${C.bg} 100%)`, borderTop: `1px solid ${C.border}`, position: 'relative', overflow: 'hidden' }}>
      {/* glow orb */}
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 300, background: `radial-gradient(ellipse,rgba(153,51,255,0.18) 0%,transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <Pill>Let&apos;s Work Together</Pill>
        <h2 style={{ fontSize: 'clamp(1.9rem,5vw,3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, color: C.text, marginBottom: 18 }}>
          Ready to Build a Website That{' '}
          <span className="purple-shimmer">Actually Works?</span>
        </h2>
        <p style={{ color: C.textDim, fontSize: 'clamp(0.95rem,2vw,1.1rem)', lineHeight: 1.7, maxWidth: 500, margin: '0 auto 40px' }}>
          Start with a free 1-hour strategy call. A real conversation about your business and exactly what it needs to grow online.
        </p>
        <a href="mailto:hello@b2labz.com"
          style={{ display: 'inline-block', padding: '15px 44px', background: `linear-gradient(135deg,${C.purple},${C.purpleHi})`, color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: `0 4px 28px ${C.glow}`, transition: 'transform 0.2s,box-shadow 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 44px rgba(153,51,255,0.55)` }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';   e.currentTarget.style.boxShadow = `0 4px 28px ${C.glow}` }}>
          Book Free Strategy Call
        </a>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ padding: '28px 24px', background: C.bg, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
        <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em' }}>
          <span className="purple-shimmer">B2</span>
          <span style={{ color: C.text }}>Labz</span>
        </span>
        <p style={{ color: C.textMuted, fontSize: 13 }}>© {new Date().getFullYear()} B2Labz. All rights reserved.</p>
        <div style={{ display: 'flex', gap: 22 }}>
          {['Privacy', 'Terms', 'Contact'].map(l => (
            <a key={l} href="#" style={{ color: C.textMuted, textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.purpleHi)}
              onMouseLeave={e => (e.currentTarget.style.color = C.textMuted)}>
              {l}
            </a>
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
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhatWeDo />
      <Pricing />
      <Security />
      <CTA />
      <Footer />
    </>
  )
}
