const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const FOOTER_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Craft', href: '#craft' },
  { label: 'Visit', href: '#visit' },
]

export default function Footer() {
  return (
    <footer className="border-t border-divider px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
        {/* Left — logo + tagline */}
        <div className="text-center md:text-left">
          <span className="font-playfair text-xl text-espresso">Dwell</span>
          <p className="mt-1 text-xs text-muted">Coffee, Slowly.</p>
        </div>

        {/* Center — links */}
        <ul className="flex items-center gap-8">
          {FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-espresso"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right — made in + social */}
        <div className="flex items-center gap-3 text-sm text-muted">
          <span>Made with care in Hyderabad.</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-60"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <p className="mt-8 text-center text-xs text-muted">
        © 2025 Dwell. All rights reserved.
      </p>
    </footer>
  )
}
