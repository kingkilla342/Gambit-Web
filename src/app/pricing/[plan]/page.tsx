'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  bg:      '#060210',
  card:    '#1e0a44',
  p400:    '#a855f7',
  p500:    '#7c3aed',
  p700:    '#5b21b6',
  text:    '#ffffff',
  dim:     '#c4b8dc',
  muted:   '#6b5a8a',
  border:  'rgba(124,58,237,0.22)',
  borderHi:'rgba(168,85,247,0.5)',
  glow:    'rgba(124,58,237,0.45)',
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const IcCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const IcArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7"/>
  </svg>
)

// ─── Plan data ────────────────────────────────────────────────────────────────
const PLANS = {
  starter: {
    badge: 'Starter', color: '#818cf8',
    title: 'Small Business',
    price: '$150 – $500', deposit: '$150', depositCents: 15000, isVariable: false as const, minAmount: 150, maxAmount: 150,
    timeline: '1–2 weeks', pages: '1–5 pages',
    subtitle: 'Get your business online with a clean, professional presence that builds instant trust with customers.',
    bestFor: [
      'New or local businesses launching their first website',
      'Businesses with a simple service or product offering',
      'Anyone who needs a clean online presence fast and affordably',
    ],
    sections: [
      {
        heading: 'Pages Included',
        items: [
          { name: 'Homepage', desc: 'Your digital storefront — hero section, about preview, services summary, and a clear CTA.' },
          { name: 'About Page', desc: 'Your story, team, and mission. Builds trust before a visitor ever contacts you.' },
          { name: 'Services Page', desc: 'Detailed breakdown of what you offer with clear pricing or inquiry CTAs.' },
          { name: 'Contact Page', desc: 'Contact form, phone, email, Google Maps embed, and business hours.' },
          { name: 'Optional 5th Page', desc: 'Gallery, FAQ, or Testimonials — whatever matters most for your business.' },
        ],
      },
      {
        heading: "What's Built In",
        items: [
          { name: 'Mobile-first responsive design', desc: 'Looks flawless on phones, tablets, and desktops — tested across all screen sizes.' },
          { name: 'Google Maps integration', desc: 'Customers can find your location and get directions without leaving your site.' },
          { name: 'Contact form with email delivery', desc: 'Every inquiry lands directly in your inbox with no third-party tools required.' },
          { name: 'Basic SEO setup', desc: 'Meta tags, Open Graph, sitemap, and Google Search Console submission.' },
          { name: 'SSL & domain connection', desc: 'HTTPS enabled and connected to your custom domain.' },
          { name: 'Fast load times', desc: 'Optimized code and images targeting under 2s load time.' },
        ],
      },
      {
        heading: 'Delivery & Support',
        items: [
          { name: '1 revision round included', desc: 'One round of feedback incorporated before launch.' },
          { name: '30-day post-launch support', desc: 'Bug fixes and minor tweaks for 30 days after your site goes live.' },
          { name: '30-min training session', desc: 'A walkthrough of how to manage and update your site.' },
        ],
      },
    ],
    faq: [
      { q: 'What happens after I pay the deposit?', a: "I'll schedule a 1-hour strategy call to go over your goals, brand, and content. The build starts immediately after." },
      { q: 'Do I need to provide content?', a: 'You provide basic info (business name, services, contact details). I handle layout, design, and copywriting.' },
      { q: 'Can I upgrade to a larger package?', a: 'Yes. The full deposit amount is credited toward any upgrade.' },
      { q: 'What if I need more than 5 pages?', a: 'Additional pages are available as an add-on at $50 each.' },
    ],
  },
  standard: {
    badge: 'Standard', color: '#a855f7',
    title: 'Business Site',
    price: '$500 – $1,500', deposit: '$500', depositCents: 50000, isVariable: true as const, minAmount: 500, maxAmount: 1500,
    timeline: '2–4 weeks', pages: '5–10 pages',
    subtitle: 'A fully equipped business website that automates client intake and saves you 5–10 hours every single week.',
    bestFor: [
      'Established businesses ready to modernize their online presence',
      'Service providers who waste time on manual scheduling and email back-and-forth',
      'Businesses that want to rank higher on Google and convert more visitors',
    ],
    sections: [
      {
        heading: 'Pages Included',
        items: [
          { name: 'Homepage', desc: 'Premium hero, social proof, service highlights, testimonials, and multiple conversion points.' },
          { name: 'About Page', desc: 'Full story, team bios, your values, and a clear reason why clients choose you.' },
          { name: 'Services Page', desc: 'Detailed individual service sections with pricing tiers and direct inquiry CTAs.' },
          { name: 'Booking / Scheduling Page', desc: 'Clients book directly into your calendar — zero back-and-forth emails.' },
          { name: 'Testimonials / Reviews Page', desc: 'Social proof that converts new visitors into paying customers.' },
          { name: 'FAQ Page', desc: 'Answers the top questions your clients ask, cutting your email load significantly.' },
          { name: '2–3 Custom Pages', desc: 'Portfolio, Gallery, Pricing Table — whatever your business needs most.' },
        ],
      },
      {
        heading: 'Automations & Integrations',
        items: [
          { name: 'Online booking system', desc: 'Calendly or Cal.com — clients see your availability and book themselves.' },
          { name: 'Auto-reply contact forms', desc: 'Every inquiry automatically receives a confirmation email from you.' },
          { name: 'Google / Outlook calendar sync', desc: 'New bookings appear instantly in your existing calendar.' },
          { name: 'CRM-ready lead capture', desc: 'All inquiries stored and exportable for follow-up and reporting.' },
          { name: 'Basic SEO (Google visibility)', desc: 'On-page SEO, schema markup, Search Console setup, and sitemap submission.' },
        ],
      },
      {
        heading: 'Design & Performance',
        items: [
          { name: 'Custom branding & animations', desc: 'Micro-interactions, scroll animations, and transitions that feel premium.' },
          { name: 'Mobile-first, all-device tested', desc: 'Manually tested on iPhone, Android, tablet, and desktop browsers.' },
          { name: 'Performance optimized', desc: 'Targeting 90+ Google PageSpeed score out of the box.' },
          { name: '2 revision rounds', desc: 'Two rounds of changes incorporated before your site launches.' },
          { name: '60 days post-launch support', desc: 'Full support for bugs, tweaks, and questions for 60 days after launch.' },
        ],
      },
    ],
    faq: [
      { q: 'How does the booking system work?', a: "I set up Calendly or Cal.com connected to your Google Calendar. Clients see your real-time availability and book a slot — you just show up." },
      { q: 'Do you write the copy?', a: 'Yes. I handle all copywriting from a short intake form you fill out about your business, goals, and voice.' },
      { q: 'How much time will this save me?', a: 'Most clients save 5–10 hours per week by eliminating manual scheduling and inbox sorting.' },
      { q: 'Is monthly maintenance included?', a: 'The first 60 days of support are included. After that, optional maintenance plans start at $20/mo.' },
    ],
  },
  growth: {
    badge: 'Growth', color: '#c084fc',
    title: 'Growth Site',
    price: '$1,500 – $3,000+', deposit: '$750', depositCents: 75000, isVariable: true as const, minAmount: 1500, maxAmount: 3000,
    timeline: '4–8 weeks', pages: '10+ pages',
    subtitle: 'A fully automated business system — your website works 24/7 to attract, qualify, and close clients while you focus on the work.',
    bestFor: [
      'Businesses ready to scale beyond manual processes and repetitive tasks',
      'Companies with complex services that need a full digital infrastructure',
      'Founders who want a website that generates revenue, not just looks good',
    ],
    sections: [
      {
        heading: 'Pages & Content Structure',
        items: [
          { name: '10+ custom pages', desc: 'Everything in Standard plus: case studies, service landing pages, pricing pages, and more.' },
          { name: 'Blog & CMS', desc: 'Full content management — publish posts and update pages without touching code.' },
          { name: 'SEO service landing pages', desc: 'Individual, keyword-optimized pages for each service you offer.' },
          { name: 'Custom 404 & legal pages', desc: 'Privacy policy, terms of service, and a branded 404 page.' },
        ],
      },
      {
        heading: 'Advanced Automations',
        items: [
          { name: 'AI chatbot (24/7)', desc: 'Trained on your services, pricing, and FAQs — answers questions, qualifies leads, books appointments around the clock.' },
          { name: 'Automated email sequences', desc: 'Smart follow-up flows that nurture leads from first contact to booked client — no manual effort.' },
          { name: 'Payment integrations', desc: 'Accept deposits, retainers, or full payments directly on your site via Stripe.' },
          { name: 'Email marketing integration', desc: 'Connected to Mailchimp or ConvertKit — every lead captured and nurtured automatically.' },
          { name: 'Bank-level secure intake forms', desc: 'Encrypted forms for sensitive client data — ideal for healthcare, legal, and financial services.' },
        ],
      },
      {
        heading: 'SEO & Analytics',
        items: [
          { name: 'Advanced SEO strategy', desc: 'Keyword research, competitor analysis, and optimized content for every page.' },
          { name: 'Performance optimization', desc: 'Targeting 95+ PageSpeed. Image compression, code splitting, aggressive caching.' },
          { name: 'Analytics & conversion tracking', desc: 'Google Analytics 4 with goal tracking — know exactly which pages drive revenue.' },
          { name: 'Schema markup & rich snippets', desc: 'Structured data that helps Google display your business more prominently in search.' },
        ],
      },
      {
        heading: 'Delivery & Support',
        items: [
          { name: 'Unlimited revisions (within scope)', desc: 'We iterate until the result is exactly what you envisioned.' },
          { name: '90 days post-launch support', desc: 'Full coverage including bug fixes, content updates, and performance monitoring.' },
          { name: 'Launch strategy session', desc: 'Plan your go-live — social announcements, SEO indexing, and first-month goals.' },
          { name: 'Recorded training library', desc: 'Video tutorials for managing your CMS, updating content, and reading analytics.' },
        ],
      },
    ],
    faq: [
      { q: "What can the AI chatbot actually do?", a: "It's trained on your specific business — services, pricing, FAQs. It answers questions 24/7, collects contact info, qualifies leads, and books appointments." },
      { q: 'Do I own everything when done?', a: 'Yes, completely. You own all code, content, domains, and accounts. Full access handed over at launch.' },
      { q: 'What tech stack do you use?', a: 'Next.js for performance and SEO, with a headless CMS (Sanity or Contentful). Hosted on Vercel with global CDN.' },
      { q: 'What if my scope changes during the project?', a: 'We document scope clearly upfront. Any additions are quoted separately and only added with your approval.' },
    ],
  },
}

type PlanKey = keyof typeof PLANS

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PricingDetail() {
  const params = useParams()
  const plan = params.plan as string
  const data = PLANS[plan as PlanKey]
  const [loading,      setLoading]      = useState(false)
  const [error,        setError]        = useState('')
  const [customAmount, setCustomAmount] = useState<number>(() => data?.minAmount ?? 0)

  if (!data) {
    return (
      <div style={{ minHeight: '100vh', background: T.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: T.dim }}>
          <p style={{ fontSize: 18, marginBottom: 24 }}>Plan not found.</p>
          <Link href="/#pricing" style={{ color: T.p400, textDecoration: 'underline' }}>← Back to pricing</Link>
        </div>
      </div>
    )
  }

  async function handleCheckout() {
    setLoading(true)
    setError('')
    try {
      const res  = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, amount: data.isVariable ? customAmount : null }),
      })
      const json = await res.json()
      if (json.url) {
        window.location.href = json.url
      } else {
        setError(json.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Payment service unavailable. Contact us directly at hello@b2labz.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ background: `linear-gradient(180deg, #190848 0%, #060210 100%)`, minHeight: '100vh', color: T.text }}>

      {/* ── Top nav ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(6,2,16,0.94)', backdropFilter: 'blur(22px)', borderBottom: `1px solid ${T.border}`, padding: '0 clamp(16px,4vw,40px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.03em' }}>
              <span style={{ background: 'linear-gradient(90deg,#7c3aed,#a855f7,#e0d0ff,#a855f7,#7c3aed)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>B2</span>
              <span style={{ color: T.text }}>Labz</span>
            </span>
          </Link>
          <Link href="/#pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: T.dim, textDecoration: 'none', fontSize: 14, fontWeight: 500 }}
            onMouseEnter={e => (e.currentTarget.style.color = T.p400)}
            onMouseLeave={e => (e.currentTarget.style.color = T.dim)}>
            <IcArrow /> All Plans
          </Link>
        </div>
      </nav>

      {/* ── Plan hero ── */}
      <header style={{ padding: 'clamp(52px,8vw,96px) clamp(16px,4vw,40px) clamp(36px,5vw,64px)', background: `radial-gradient(ellipse 75% 55% at 50% 0%, rgba(124,58,237,0.25) 0%, transparent 70%)`, borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', padding: '4px 16px', background: `${data.color}18`, border: `1px solid ${data.color}44`, borderRadius: 100, fontSize: 11, color: data.color, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 22 }}>{data.badge}</span>
          <h1 style={{ fontSize: 'clamp(1.9rem,4.5vw,3.2rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 18 }}>{data.title}</h1>
          <p style={{ color: T.dim, fontSize: 'clamp(.95rem,2vw,1.12rem)', lineHeight: 1.75, maxWidth: 620, margin: '0 auto 36px' }}>{data.subtitle}</p>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { label: 'Project range', value: data.price, big: true, color: data.color },
              { label: 'Delivery',      value: data.timeline, big: false, color: T.text },
              { label: 'Scope',         value: data.pages,    big: false, color: T.text },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '14px 24px', background: 'rgba(24,10,56,0.6)', border: `1px solid ${T.border}`, borderRadius: 12 }}>
                <div style={{ color: stat.color, fontSize: stat.big ? 26 : 20, fontWeight: 900, letterSpacing: '-0.03em' }}>{stat.value}</div>
                <div style={{ color: T.muted, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.09em', marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Main content ── */}
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px,6vw,72px) clamp(16px,4vw,40px)' }}>
        <div className="pricing-layout">

          {/* Left — details */}
          <div>

            {/* Who it's for */}
            <div style={{ marginBottom: 52 }}>
              <h2 style={{ fontSize: 'clamp(1.15rem,2.5vw,1.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 20 }}>Who This Is For</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {data.bestFor.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '13px 18px', background: 'rgba(124,58,237,0.07)', border: `1px solid ${T.border}`, borderRadius: 12 }}>
                    <span style={{ color: T.p400, flexShrink: 0, marginTop: 3 }}><IcCheck /></span>
                    <span style={{ color: T.dim, fontSize: 14.5, lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature sections */}
            {data.sections.map((section, si) => (
              <div key={si} style={{ marginBottom: 52 }}>
                <h2 style={{ fontSize: 'clamp(1.15rem,2.5vw,1.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 20 }}>{section.heading}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {section.items.map((item, ii) => (
                    <div key={ii}
                      style={{ padding: '18px 22px', background: 'rgba(30,8,62,0.7)', border: `1px solid ${T.border}`, borderRadius: 14, backdropFilter: 'blur(12px)', transition: 'border-color .25s, background .25s' }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.borderHi; el.style.background = 'rgba(46,12,90,0.85)' }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = T.border; el.style.background = 'rgba(30,8,62,0.7)' }}>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span style={{ color: T.p400, flexShrink: 0, marginTop: 4 }}><IcCheck /></span>
                        <div>
                          <div style={{ color: T.text, fontSize: 14.5, fontWeight: 700, marginBottom: 5 }}>{item.name}</div>
                          <div style={{ color: T.muted, fontSize: 13.5, lineHeight: 1.65 }}>{item.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* FAQ */}
            <div>
              <h2 style={{ fontSize: 'clamp(1.15rem,2.5vw,1.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 20 }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {data.faq.map((item, i) => (
                  <div key={i} style={{ padding: '22px 24px', background: 'rgba(30,8,62,0.6)', border: `1px solid ${T.border}`, borderRadius: 14 }}>
                    <div style={{ color: T.text, fontSize: 15, fontWeight: 700, marginBottom: 10 }}>{item.q}</div>
                    <div style={{ color: T.dim, fontSize: 14, lineHeight: 1.7 }}>{item.a}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right — sticky payment card */}
          <div style={{ position: 'sticky', top: 80 }}>
            <div style={{ padding: '32px 28px', background: 'linear-gradient(145deg, #320d6e, #1e0950)', border: `1px solid ${T.borderHi}`, borderRadius: 20, boxShadow: `0 0 60px rgba(124,58,237,0.22)` }}>

              <span style={{ display: 'inline-block', padding: '4px 14px', background: `${data.color}18`, border: `1px solid ${data.color}44`, borderRadius: 100, fontSize: 11, color: data.color, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 18 }}>{data.badge}</span>

              <div style={{ marginBottom: 8 }}>
                <span style={{ color: data.color, fontSize: 34, fontWeight: 900, letterSpacing: '-0.04em' }}>{data.price}</span>
              </div>
              <p style={{ color: T.muted, fontSize: 13, marginBottom: 24, lineHeight: 1.55 }}>Full project range. Exact price confirmed after free strategy call.</p>

              <div style={{ height: 1, background: T.border, marginBottom: 24 }} />

              {data.isVariable ? (
                <div style={{ marginBottom: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <div style={{ color: T.dim, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.09em' }}>Your payment</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <span style={{ color: T.p400, fontSize: 18, fontWeight: 700 }}>$</span>
                      <input
                        type="number"
                        min={data.minAmount}
                        max={data.maxAmount}
                        value={customAmount}
                        onChange={e => {
                          const v = parseInt(e.target.value, 10)
                          if (!isNaN(v)) setCustomAmount(Math.min(data.maxAmount, Math.max(data.minAmount, v)))
                        }}
                        style={{ width: 90, padding: '5px 8px', background: 'rgba(255,255,255,0.07)', border: `1px solid ${T.border}`, borderRadius: 8, color: T.text, fontSize: 20, fontWeight: 900, textAlign: 'right', outline: 'none' }}
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={data.minAmount}
                    max={data.maxAmount}
                    step={50}
                    value={customAmount}
                    onChange={e => setCustomAmount(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#7c3aed', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                    <span style={{ color: T.muted, fontSize: 12 }}>Min ${data.minAmount.toLocaleString()}</span>
                    <span style={{ color: T.muted, fontSize: 12 }}>Max ${data.maxAmount.toLocaleString()}</span>
                  </div>
                  <p style={{ color: T.muted, fontSize: 12.5, marginTop: 10, lineHeight: 1.55 }}>Applied toward your total project cost. Remaining balance due at launch.</p>
                </div>
              ) : (
                <div style={{ marginBottom: 24 }}>
                  <div style={{ color: T.dim, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 6 }}>To get started today</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span style={{ color: T.text, fontSize: 30, fontWeight: 900 }}>{data.deposit}</span>
                    <span style={{ color: T.muted, fontSize: 13 }}>flat deposit</span>
                  </div>
                  <p style={{ color: T.muted, fontSize: 12.5, marginTop: 6, lineHeight: 1.55 }}>Credited toward your total. Remaining balance due at launch.</p>
                </div>
              )}

              {error && (
                <div style={{ padding: '10px 14px', background: 'rgba(255,96,96,0.1)', border: '1px solid rgba(255,96,96,0.3)', borderRadius: 8, marginBottom: 16 }}>
                  <p style={{ color: '#ff9090', fontSize: 13, margin: 0 }}>{error}</p>
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={loading}
                style={{
                  display: 'block', width: '100%', padding: '14px 24px',
                  background: loading ? 'rgba(124,58,237,0.35)' : 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  color: '#fff', border: 'none', borderRadius: 10,
                  fontSize: 15, fontWeight: 700, letterSpacing: '.04em',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'transform .2s, box-shadow .2s',
                  boxShadow: loading ? 'none' : '0 0 22px rgba(124,58,237,0.55)',
                  marginBottom: 12,
                }}
                onMouseEnter={e => { if (!loading) { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)' } }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)' }}>
                {loading ? 'Setting up secure checkout…' : `Pay $${(data.isVariable ? customAmount : data.minAmount).toLocaleString()}`}
              </button>

              <a href="mailto:hello@b2labz.com"
                style={{ display: 'block', textAlign: 'center', padding: '13px 24px', background: 'transparent', color: T.dim, border: '1px solid rgba(255,255,255,.15)', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'border-color .2s, color .2s', letterSpacing: '.04em' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = T.borderHi; e.currentTarget.style.color = T.text }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.15)'; e.currentTarget.style.color = T.dim }}>
                Book Free Strategy Call First
              </a>

              <p style={{ color: T.muted, fontSize: 12, textAlign: 'center', marginTop: 16, lineHeight: 1.6 }}>
                Secure checkout via Stripe. Deposit refundable within 7 days.
              </p>

            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
