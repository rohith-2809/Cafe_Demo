import { useState, useEffect } from 'react'

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)

const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

const NAV_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Craft', href: '#craft' },
  { label: 'Visit', href: '#visit' },
  { label: 'Story', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-divider bg-cream/95 backdrop-blur-md'
          : 'bg-cream'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="font-playfair text-2xl text-espresso tracking-wide"
        >
          Dwell
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group relative text-sm text-ink/70 transition-colors duration-200 hover:text-espresso"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-espresso transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#visit"
            className="hidden md:inline-block border border-espresso px-5 py-2 text-sm text-espresso transition-colors duration-200 hover:bg-espresso hover:text-cream"
          >
            Visit Us
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-espresso"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 pb-8 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-ink/70 transition-colors duration-200 hover:text-espresso"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#visit"
              onClick={() => setMobileOpen(false)}
              className="border border-espresso px-5 py-2 text-sm text-espresso transition-colors duration-200 hover:bg-espresso hover:text-cream"
            >
              Visit Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
