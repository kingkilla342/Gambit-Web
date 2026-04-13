import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
})

const plans = {
  starter: {
    name:       'Small Business Starter Website — Deposit',
    description:'Deposit for a 1–5 page responsive website. Remaining balance due at launch.',
    fixedAmount: 15000,   // $150 in cents — fixed, no range
    minAmount:   15000,
    maxAmount:   15000,
  },
  standard: {
    name:       'Business Site — Standard Package',
    description:'Payment toward a 5–10 page website with booking system, SEO, and automations.',
    fixedAmount: null,
    minAmount:   50000,   // $500 in cents
    maxAmount:   150000,  // $1,500 in cents
  },
  growth: {
    name:       'Growth Site — Advanced Package',
    description:'Payment toward a 10+ page fully automated website with AI chatbot and CMS.',
    fixedAmount: null,
    minAmount:   150000,  // $1,500 in cents
    maxAmount:   300000,  // $3,000 in cents
  },
}

export async function POST(req: NextRequest) {
  try {
    const { plan, amount } = await req.json()
    const planData = plans[plan as keyof typeof plans]

    if (!planData) {
      return NextResponse.json({ error: 'Invalid plan.' }, { status: 400 })
    }

    let finalAmountCents: number

    if (planData.fixedAmount !== null) {
      // Starter — fixed deposit, ignore any custom amount
      finalAmountCents = planData.fixedAmount
    } else {
      // Standard / Growth — validate custom amount (sent in dollars)
      if (typeof amount !== 'number' || isNaN(amount)) {
        return NextResponse.json({ error: 'Please select an amount.' }, { status: 400 })
      }
      finalAmountCents = Math.round(amount * 100)
      if (finalAmountCents < planData.minAmount || finalAmountCents > planData.maxAmount) {
        const min = planData.minAmount / 100
        const max = planData.maxAmount / 100
        return NextResponse.json(
          { error: `Amount must be between $${min.toLocaleString()} and $${max.toLocaleString()}.` },
          { status: 400 }
        )
      }
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
          unit_amount: finalAmountCents,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${baseUrl}/pricing/success?plan=${plan}`,
      cancel_url:  `${baseUrl}/pricing/${plan}`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json({ error: 'Payment setup failed. Please try again.' }, { status: 500 })
  }
}
