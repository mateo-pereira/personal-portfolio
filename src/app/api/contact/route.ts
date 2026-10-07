import {NextResponse} from 'next/server'
import {Resend} from 'resend'

import {getSiteSettings} from '@/lib/get-content'

export async function POST(request: Request) {
  const {name, email, message} = await request.json()

  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return NextResponse.json({error: 'Invalid submission.'}, {status: 400})
  }

  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message.trim()

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!trimmedName || !emailPattern.test(trimmedEmail) || !trimmedMessage) {
    return NextResponse.json({error: 'Please fill in a valid name, email, and message.'}, {status: 400})
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({error: 'Contact form is not configured yet.'}, {status: 503})
  }

  const settings = await getSiteSettings()
  if (!settings.email) {
    return NextResponse.json({error: 'Contact form is not configured yet.'}, {status: 503})
  }

  const resend = new Resend(apiKey)

  const {error} = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: settings.email,
    replyTo: trimmedEmail,
    subject: `New message from ${trimmedName}`,
    text: `From: ${trimmedName} <${trimmedEmail}>\n\n${trimmedMessage}`,
  })

  if (error) {
    return NextResponse.json({error: 'Could not send your message. Please try again later.'}, {status: 502})
  }

  return NextResponse.json({ok: true})
}
