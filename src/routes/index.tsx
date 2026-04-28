import { Link, createFileRoute } from '@tanstack/react-router'
import { Phone, Sparkles, Building2, Home, Droplets, ShieldCheck, MapPin, Clock } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const PHONE_DISPLAY = '07989 210584'
const PHONE_TEL = '+447989210584'

function HomePage() {
  return (
    <div>
      {/* Hero — solid blue, no photo background */}
      <section className="bg-gradient-to-b from-[var(--brand-blue-light)] to-white">
        <div className="container-tight py-20 text-center">
          <img
            src="/images/logo-text.png"
            alt="TS Window Cleaning Services"
            className="mx-auto mb-8 h-28 w-auto object-contain"
          />
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[var(--brand-blue-dark)] ring-1 ring-[var(--brand-blue)]/20">
            <MapPin size={14} /> Glasgow West End & Southside
          </p>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Crystal-clear windows. Spotless exteriors.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Reliable, professional window cleaning and pressure washing for homes
            and businesses across Glasgow's West End and Southside.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-blue-dark)]"
            >
              Book a clean
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--brand-blue)] bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-blue-dark)] transition hover:bg-[var(--brand-blue-light)]"
            >
              <Phone size={16} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Hero photo — verified window cleaning stock image */}
      <section className="bg-white">
        <div className="container-tight py-12">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=80"
              alt="Professional window cleaner at work"
              className="h-72 w-full object-cover sm:h-96"
            />
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-slate-50">
        <div className="container-tight py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">What we do</h2>
            <p className="mt-3 text-slate-600">
              From sparkling shop fronts to weekly home cleans, we keep Glasgow looking its best.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <ServiceCard
              icon={<Home size={22} />}
              title="Domestic Window Cleaning"
              text="Regular and one-off window cleaning for homes and tenement flats. Inside and out."
            />
            <ServiceCard
              icon={<Building2 size={22} />}
              title="Commercial Window Cleaning"
              text="Storefronts, offices and retail premises kept presentable for staff and customers."
            />
            <ServiceCard
              icon={<Droplets size={22} />}
              title="Commercial Pressure Washing"
              text="Pavements, signage, walls and forecourts blasted clean with high-pressure water."
            />
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue-dark)] hover:underline"
            >
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white">
        <div className="container-tight py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Why choose TS</h2>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <Feature
              icon={<MapPin size={20} />}
              title="Local to Glasgow"
              text="Based in Glasgow and serving the West End and Southside. We know the buildings and the streets."
            />
            <Feature
              icon={<ShieldCheck size={20} />}
              title="Insured & reliable"
              text="Fully insured for your peace of mind, with consistent quality on every visit."
            />
            <Feature
              icon={<Sparkles size={20} />}
              title="Streak-free finish"
              text="Modern equipment and proven techniques deliver a clear, streak-free result every time."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-blue)]">
        <div className="container-tight py-14 text-center text-white">
          <h2 className="text-3xl font-bold">Ready for a cleaner view?</h2>
          <p className="mt-3 text-blue-100">
            Get a free, no-obligation quote — usually within 24 hours.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/book"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-blue-dark)] shadow-sm transition hover:bg-slate-100"
            >
              Book online
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone size={16} /> {PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-blue-100">
            <Clock size={14} /> Mon – Sat, 8am – 6pm
          </p>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--brand-blue-light)] text-[var(--brand-blue-dark)]">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
    </div>
  )
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div>
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[var(--brand-blue-light)] text-[var(--brand-blue-dark)]">
        {icon}
      </div>
      <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
    </div>
  )
}
