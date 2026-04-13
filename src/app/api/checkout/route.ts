import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
})

const plans = {
  starter: {
    name: 'Small Business Starter Website — Deposit',
    amount: 15000, // $150
    description: 'Deposit for a 1–5 page responsive website. Remaining balance due at launch.',
  },
  standard: {
    name: 'Business Site — Standard Package Deposit',
    amount: 50000, // $500
    description: 'Deposit for a 5–10 page website with booking system, SEO, and automations.',
  },
  growth: {
    name: 'Growth Site — Advanced Package Deposit',
    amount: 75000, // $750
    description: 'Deposit for a 10+ page fully automated website with AI chatbot and CMS.',
  },
}

export async function POST(req: NextRequest) {
  try {
    const { plan } = await req.json()
    const planData = plans[plan as keyof typeof plans]

    if (!planData) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: planData.name,
            description: planData.description,
          },
          unit_amount: planData.amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${baseUrl}/pricing/success?plan=${plan}`,
      cancel_url: `${baseUrl}/pricing/${plan}`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json({ error: 'Payment setup failed. Please try again.' }, { status: 500 })
  }
}
