import { Link, createFileRoute } from '@tanstack/react-router'
import { Home, Building2, Droplets, Check, Phone } from 'lucide-react'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

const PHONE_DISPLAY = '07989 210584'
const PHONE_TEL = '+447989210584'

function ServicesPage() {
  return (
    <div>
      <section className="bg-[var(--brand-blue-light)]">
        <div className="container-tight py-16 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Our services</h1>
          <p className="mt-4 text-slate-600">
            Window cleaning and exterior pressure washing for Glasgow homes and businesses.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-tight space-y-12 py-16">
          <ServiceBlock
            icon={<Home size={22} />}
            title="Domestic Window Cleaning"
            description="Keep your home's windows looking their best with regular or one-off cleans across Glasgow's West End and Southside."
            includes={[
              'Exterior window cleaning, frames and sills',
              'Interior cleaning available on request',
              'Tenement flats, terraced houses and detached homes',
              'Regular schedules — monthly, six-weekly, or one-off',
              'Pure-water reach-and-wash for upstairs windows',
            ]}
          />

          <ServiceBlock
            icon={<Building2 size={22} />}
            title="Commercial Window Cleaning"
            description="Reliable, scheduled window cleaning for shops, offices, restaurants and retail premises. Presentable storefronts, every visit."
            includes={[
              'Storefronts, offices, cafés and restaurants',
              'Internal and external glass',
              'Flexible early-morning or out-of-hours visits',
              'Fully insured with risk assessments on request',
              'Invoice-based billing for businesses',
            ]}
          />

          <ServiceBlock
            icon={<Droplets size={22} />}
            title="Commercial Pressure Washing"
            description="High-pressure cleaning for outdoor surfaces — restoring pavements, walls, signage and forecourts to look their best."
            includes={[
              'Pavements, paths and forecourts',
              'External walls, render and brickwork',
              'Signage, shutters and shopfront frames',
              'Bin stores, car parks and yards',
              'Removes algae, moss, dirt and grime',
            ]}
          />
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-tight py-14 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Not sure which service you need?
          </h2>
          <p className="mt-3 text-slate-600">
            Get in touch — we're happy to advise and provide a free quote.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[var(--brand-blue-dark)]"
            >
              Request a quote
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--brand-blue)] bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-blue-dark)] hover:bg-[var(--brand-blue-light)]"
            >
              <Phone size={16} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceBlock({
  icon,
  title,
  description,
  includes,
}: {
  icon: React.ReactNode
  title: string
  description: string
  includes: Array<string>
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--brand-blue-light)] text-[var(--brand-blue-dark)]">
        {icon}
      </div>
      <h2 className="mt-4 text-2xl font-bold text-slate-900">{title}</h2>
      <p className="mt-3 text-slate-600">{description}</p>
      <ul className="mt-5 space-y-2">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
            <Check size={16} className="mt-1 shrink-0 text-[var(--brand-blue)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
