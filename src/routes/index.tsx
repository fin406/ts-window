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
      {/* Light band — hero + services share the same gradient + grid */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[var(--brand-blue-light)] via-white to-white">

        {/* Soft grid — spans the whole light band */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(100,116,139,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.12) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          }}
        />

        {/* Hero */}
        <section>
          <div className="container-wide relative py-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">

              {/* Left — text content */}
              <div>
                <img
                  src="/images/logo-text.png"
                  alt="TS Window Cleaning Services"
                  className="mb-7 h-20 w-auto object-contain"
                />
                <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                  Crystal-clear windows.<br />Spotless exteriors.
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  Reliable, professional window cleaning and pressure washing for homes
                  and businesses across Glasgow's West End and Southside.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-blue-dark)]"
                  >
                    Book a clean
                  </Link>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--brand-blue)] bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue-dark)]"
                  >
                    <Phone size={16} /> {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* Right — image with overlay badges */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1482449609509-eae2a7ea42b7?auto=format&fit=crop&w=1000&q=80"
                    alt="Professional window cleaner at work"
                    className="h-72 w-full object-cover sm:h-[420px]"
                  />
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/30 bg-white/20 px-3.5 py-2.5 shadow-lg backdrop-blur-md">
                  <MapPin size={15} className="shrink-0 text-white" />
                  <span className="text-xs font-semibold text-white drop-shadow-sm">Glasgow West End &amp; Southside</span>
                </div>
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-xl border border-white/30 bg-white/20 px-3.5 py-2.5 shadow-lg backdrop-blur-md">
                  <Clock size={15} className="shrink-0 text-white" />
                  <span className="text-xs font-semibold text-white drop-shadow-sm">Mon – Sat, 8am – 6pm</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Services overview */}
        <section>
          <div className="container-wide relative pb-20 pt-4">
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
                image="https://images.unsplash.com/photo-1721620780493-e905708eba0b?auto=format&fit=crop&w=800&q=80"
              />
              <ServiceCard
                icon={<Building2 size={22} />}
                title="Commercial Window Cleaning"
                text="Storefronts, offices and retail premises kept presentable for staff and customers."
                image="https://images.unsplash.com/photo-1774271101213-51411a66cc07?auto=format&fit=crop&w=800&q=80"
              />
              <ServiceCard
                icon={<Droplets size={22} />}
                title="Commercial Pressure Washing"
                text="Pavements, signage, walls and forecourts blasted clean with high-pressure water."
                image="https://images.unsplash.com/photo-1718152521364-b9655b8a7926?auto=format&fit=crop&w=800&q=80"
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

      </div>

      {/* Dark band — why us + CTA */}
      <div className="bg-gradient-to-b from-[var(--brand-blue)] via-[var(--brand-blue-dark)] to-slate-900">

        {/* Why us */}
        <section>
          <div className="container-tight py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">Why choose TS</h2>
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
        <section>
          <div className="container-tight py-14 text-center">
            <h2 className="text-3xl font-bold text-white">Ready for a cleaner view?</h2>
            <p className="mt-3 text-blue-100">
              Get a free, no-obligation quote — usually within 24 hours.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-slate-100"
                style={{ color: '#1e60a8' }}
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
    </div>
  )
}

function ServiceCard({ icon, title, text, image }: { icon: React.ReactNode; title: string; text: string; image: string }) {
  return (
    <div
      className="overflow-hidden rounded-2xl backdrop-blur-md"
      style={{
        background: 'rgba(255,255,255,0.72)',
        border: '1px solid rgba(255,255,255,0.8)',
        boxShadow: [
          'inset 0 1px 0 rgba(255,255,255,0.55)',
          'inset 1px 0 0 rgba(255,255,255,0.35)',
          'inset -1px 0 0 rgba(0,0,0,0.08)',
          'inset 0 -3px 0 rgba(0,0,0,0.15)',
          '0 6px 0 rgba(0,0,0,0.25)',
          '0 14px 28px rgba(0,0,0,0.25)',
        ].join(', '),
      }}
    >
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--brand-blue-light)] text-[var(--brand-blue-dark)]">
          {icon}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
      </div>
    </div>
  )
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div>
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/15 text-white backdrop-blur-sm">
        {icon}
      </div>
      <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-blue-100">{text}</p>
    </div>
  )
}
