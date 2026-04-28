import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { CheckCircle2, Phone } from 'lucide-react'

export const Route = createFileRoute('/book')({
  component: BookPage,
})

const PHONE_DISPLAY = '07989 210584'
const PHONE_TEL = '+447989210584'

const services = [
  'Domestic Window Cleaning',
  'Commercial Window Cleaning',
  'Commercial Pressure Washing',
  'Not sure / Other',
]

const frequencies = ['One-off', 'Monthly', 'Six-weekly', 'Other']

function BookPage() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    area: 'West End',
    service: services[0],
    frequency: frequencies[0],
    preferredDate: '',
    notes: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_BOOKING_ID}`,
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
          <h1 className="text-4xl font-bold text-slate-900">Book a clean</h1>
          <p className="mt-4 text-slate-600">
            Tell us about the job and we'll get back to you with a quote and a slot.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-tight py-14">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center py-8 text-center">
                <CheckCircle2 size={42} className="text-[var(--brand-blue)]" />
                <h2 className="mt-4 text-xl font-semibold text-slate-900">Booking received</h2>
                <p className="mt-2 max-w-md text-sm text-slate-600">
                  Thanks for booking. We've got your details and will be in touch within
                  24 hours to confirm a date and price.
                </p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue-dark)] hover:underline"
                >
                  <Phone size={16} /> Need it sooner? {PHONE_DISPLAY}
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Your name"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={fields.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={fields.email}
                  onChange={handleChange}
                  required
                />

                <Field
                  label="Address / postcode"
                  name="address"
                  value={fields.address}
                  onChange={handleChange}
                  required
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <SelectField
                    label="Area"
                    name="area"
                    value={fields.area}
                    onChange={handleChange}
                    options={['West End', 'Southside', 'Other Glasgow area']}
                  />
                  <SelectField
                    label="Service"
                    name="service"
                    value={fields.service}
                    onChange={handleChange}
                    options={services}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <SelectField
                    label="Frequency"
                    name="frequency"
                    value={fields.frequency}
                    onChange={handleChange}
                    options={frequencies}
                  />
                  <Field
                    label="Preferred date"
                    name="preferredDate"
                    type="date"
                    value={fields.preferredDate}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-slate-700">
                    Additional notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={fields.notes}
                    onChange={handleChange}
                    placeholder="Tell us about the property, number of windows, access, etc."
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full rounded-md bg-[var(--brand-blue)] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-blue-dark)] disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending…' : 'Request booking'}
                </button>

                {status === 'error' && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again or call us on{' '}
                    <a href={`tel:${PHONE_TEL}`} className="font-semibold underline">
                      {PHONE_DISPLAY}
                    </a>
                    .
                  </p>
                )}

                <p className="text-center text-xs text-slate-500">
                  Prefer to talk? Call us on{' '}
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="font-semibold text-[var(--brand-blue-dark)] hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
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

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: Array<string>
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-[var(--brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)]/20"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
