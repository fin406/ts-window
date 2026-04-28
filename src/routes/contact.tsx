import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const PHONE_DISPLAY = '07989 210584'
const PHONE_TEL = '+447989210584'

function ContactPage() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_CONTACT_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fields),
        },
      )
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="bg-[var(--brand-blue-light)]">
        <div className="container-tight py-16 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Contact us</h1>
          <p className="mt-4 text-slate-600">
            Drop us a message or give us a call — we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-tight py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <ContactItem
                icon={<Phone size={18} />}
                title="Phone"
                value={
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="font-semibold text-[var(--brand-blue-dark)] hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                }
              />
              <ContactItem
                icon={<MapPin size={18} />}
                title="Areas covered"
                value="Glasgow West End & Southside"
              />
              <ContactItem
                icon={<Clock size={18} />}
                title="Opening hours"
                value="Monday – Saturday, 8am – 6pm"
              />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              {status === 'success' ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <CheckCircle2 size={42} className="text-[var(--brand-blue)]" />
                  <h2 className="mt-4 text-xl font-semibold text-slate-900">Message sent</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Thanks for getting in touch. We'll reply as soon as we can.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <Field
                    label="Your name"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Phone (optional)"
                    name="phone"
                    type="tel"
                    value={fields.phone}
                    onChange={handleChange}
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={fields.message}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full rounded-md bg-[var(--brand-blue)] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-blue-dark)] disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send message'}
                  </button>
                  {status === 'error' && (
                    <p className="text-sm text-red-600">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--brand-blue-light)] text-[var(--brand-blue-dark)]">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {title}
        </div>
        <div className="mt-1 text-base text-slate-800">{value}</div>
      </div>
    </div>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
      />
    </div>
  )
}
