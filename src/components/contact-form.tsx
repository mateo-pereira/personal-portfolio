'use client'

import {useState, type FormEvent} from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, message}),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  function handleReset() {
    setName('')
    setEmail('')
    setMessage('')
    setStatus('idle')
    setErrorMessage('')
  }

  const fieldClass =
    'mt-2 w-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-white/40'
  const labelClass = 'text-xs font-semibold tracking-[0.2em] text-foreground/70 uppercase'

  if (status === 'success') {
    return (
      <p className="text-sm text-foreground/70">
        Thanks for reaching out — your message has been sent.
      </p>
    )
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={fieldClass}
        />
      </div>
      {status === 'error' && <p className="text-sm text-red-400">{errorMessage}</p>}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-white px-8 py-3 text-xs font-semibold tracking-[0.2em] text-background uppercase transition hover:bg-white/90 disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        <button
          type="reset"
          className="border border-white/30 px-8 py-3 text-xs font-semibold tracking-[0.2em] uppercase transition hover:border-white"
        >
          Clear
        </button>
      </div>
    </form>
  )
}
