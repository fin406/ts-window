import { Link, createFileRoute } from '@tanstack/react-router'
import { MapPin, ShieldCheck, Sparkles, Users, Phone } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const PHONE_DISPLAY = '07989 210584'
const PHONE_TEL = '+447989210584'

function AboutPage() {
  return (
    <div>
      <section className="bg-[var(--brand-blue-light)]">
        <div className="container-tight py-16 text-center">
          <h1 className="text-4xl font-bold text-slate-900">About TS Window Cleaning</h1>
          <p className="mt-4 text-slate-600">
            A trusted local cleaning service for Glasgow's West End and Southside.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-tight space-y-6 py-14 text-slate-700">
          <p className="text-lg leading-relaxed">
            TS Window Cleaning Services is a Glasgow-based window cleaning and exterior
            pressure washing business serving the West End and Southside. We work with
            homeowners, landlords and local businesses to keep their properties looking
            their best — clean, presentable and well-cared-for.
          </p>
          <p className="leading-relaxed">
            We pride ourselves on being reliable, friendly and consistent. Whether
            it's a regular schedule for your tenement flat, a weekly visit to your
            shopfront, or a one-off pressure wash to refresh a forecourt, we treat
            every job the same way: turn up on time, do the work properly, and leave
            the place looking better than when we arrived.
          </p>
          <p className="leading-relaxed">
            We use modern equipment including pure-water reach-and-wash poles for safe
            cleaning of upper-storey windows without ladders, and high-pressure washing
            kit for tougher exterior jobs. We're fully insured and happy to provide
            paperwork on request.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-tight py-14">
          <h2 className="text-center text-2xl font-bold text-slate-900">Our values</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <Value
              icon={<MapPin size={20} />}
              title="Local"
              text="Glasgow-based and proud of it. We know the West End closes and the Southside terraces."
            />
            <Value
              icon={<ShieldCheck size={20} />}
              title="Reliable"
              text="We turn up when we say we will — rain or shine — and stick to your schedule."
            />
            <Value
              icon={<Sparkles size={20} />}
              title="Quality"
              text="A clean is only finished when it looks finished. Streak-free, every time."
            />
            <Value
              icon={<Users size={20} />}
              title="Friendly"
              text="Honest pricing, clear communication, and a polite face at the door."
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-blue)]">
        <div className="container-tight py-12 text-center text-white">
          <h2 className="text-2xl font-bold">Get in touch today</h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-blue-dark)] shadow-sm hover:bg-slate-100"
            >
              Contact us
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Phone size={16} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function Value({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-4">
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--brand-blue-light)] text-[var(--brand-blue-dark)]">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
      </div>
    </div>
  )
}
