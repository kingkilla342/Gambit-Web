'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const T = {
  bg:      '#0a0618',
  p400:    '#a855f7',
  p500:    '#7c3aed',
  text:    '#ffffff',
  dim:     '#c4b8dc',
  muted:   '#6b5a8a',
  border:  'rgba(124,58,237,0.22)',
  borderHi:'rgba(168,85,247,0.5)',
}

const planLabels: Record<string, string> = {
  starter:  'Small Business Starter',
  standard: 'Business Site',
  growth:   'Growth Site',
}

function SuccessContent() {
  const params = useSearchParams()
  const plan = params.get('plan') || ''

  return (
    <div style={{
      minHeight: '100vh',
      background: `radial-gradient(ellipse 80% 60% at 50% 20%, rgba(124,58,237,0.25) 0%, transparent 65%), linear-gradient(180deg, #0a0618, #180538)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
      color: T.text,
    }}>
      <div style={{ maxWidth: 560, textAlign: 'center', width: '100%' }}>

        {/* Check circle */}
        <div style={{
          width: 88, height: 88, borderRadius: '50%',
          background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
          margin: '0 auto 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 60px rgba(124,58,237,0.65), 0 0 120px rgba(124,58,237,0.2)',
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>

        <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 16, lineHeight: 1.1 }}>
          You&apos;re officially in.
        </h1>

        {plan && planLabels[plan] && (
          <div style={{ display: 'inline-block', padding: '5px 20px', background: 'rgba(124,58,237,0.15)', border: `1px solid rgba(124,58,237,0.4)`, borderRadius: 100, color: T.p400, fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            {planLabels[plan]}
          </div>
        )}

        <p style={{ color: T.dim, fontSize: 'clamp(.95rem,2vw,1.1rem)', lineHeight: 1.75, marginBottom: 40 }}>
          Deposit received. I&apos;ll reach out within 24 hours to schedule your strategy call and kick off the build.
        </p>

        {/* Next steps */}
        <div style={{ padding: '28px 32px', background: 'rgba(24,10,56,0.7)', border: `1px solid ${T.border}`, borderRadius: 16, marginBottom: 36, textAlign: 'left', backdropFilter: 'blur(20px)' }}>
          <h3 style={{ color: T.text, fontSize: 15, fontWeight: 700, marginBottom: 20 }}>What happens next</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { n: '01', t: 'Check your email', d: 'A payment receipt is on its way from Stripe.' },
              { n: '02', t: 'Strategy call scheduled', d: "I'll email within 24hrs to book your 1-hour kickoff call." },
              { n: '03', t: 'Build begins', d: 'Once we align on goals and content, development starts immediately.' },
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ color: T.p400, fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', flexShrink: 0, marginTop: 3 }}>{step.n}</span>
                <div>
                  <div style={{ color: T.text, fontSize: 14, fontWeight: 700, marginBottom: 3 }}>{step.t}</div>
                  <div style={{ color: T.muted, fontSize: 13, lineHeight: 1.55 }}>{step.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link href="/" style={{ display: 'inline-block', padding: '14px 40px', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', textDecoration: 'none', borderRadius: 10, fontWeight: 700, fontSize: 15, letterSpacing: '.04em', boxShadow: '0 0 24px rgba(124,58,237,0.55)' }}>
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#0a0618' }} />}>
      <SuccessContent />
    </Suspense>
  )
}
