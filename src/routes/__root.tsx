import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'TS Window Cleaning Services | Glasgow West End & Southside' },
      {
        name: 'description',
        content:
          'Professional window cleaning and pressure washing services in Glasgow\'s West End and Southside. Domestic and commercial. Call 07989 210584.',
      },
    ],
    links: [{ rel: 'icon', href: '/favicon.ico' }],
  }),
  component: RootComponent,
  shellComponent: RootDocument,
})

const PHONE_DISPLAY = '07989 210584'
const PHONE_TEL = '+447989210584'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/book', label: 'Book' },
] as const

function RootComponent() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-wide flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <img
              src="/images/logo.png"
              alt="TS Window Cleaning Services"
              className="h-12 w-12 object-contain"
            />
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-base font-semibold text-[var(--brand-blue-dark)]">
                TS Window Cleaning
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-500">
                Glasgow Services
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-[var(--brand-blue-light)] hover:text-[var(--brand-blue-dark)]"
                activeProps={{
                  className:
                    'rounded-md px-3 py-2 text-sm font-medium bg-[var(--brand-blue-light)] text-[var(--brand-blue-dark)]',
                }}
                activeOptions={{ exact: link.to === '/' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-blue)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-blue-dark)]"
            >
              <Phone size={16} />
              {PHONE_DISPLAY}
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <nav className="container-wide flex flex-col py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-[var(--brand-blue-light)] hover:text-[var(--brand-blue-dark)]"
                  activeProps={{
                    className:
                      'rounded-md px-3 py-3 text-base font-medium bg-[var(--brand-blue-light)] text-[var(--brand-blue-dark)]',
                  }}
                  activeOptions={{ exact: link.to === '/' }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--brand-blue)] px-4 py-3 text-sm font-semibold text-white"
              >
                <Phone size={16} />
                {PHONE_DISPLAY}
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="container-wide py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt="TS Window Cleaning Services"
                  className="h-10 w-10 object-contain"
                />
                <span className="font-semibold text-[var(--brand-blue-dark)]">
                  TS Window Cleaning Services
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Professional window cleaning and exterior pressure washing across
                Glasgow's West End and Southside.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="hover:text-[var(--brand-blue-dark)]"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>Glasgow, United Kingdom</li>
                <li>Mon – Sat, 8am – 6pm</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Services</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Domestic Window Cleaning</li>
                <li>Commercial Window Cleaning</li>
                <li>Commercial Pressure Washing</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} TS Window Cleaning Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
