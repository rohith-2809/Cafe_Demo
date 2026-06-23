import { useEffect, useRef, useState } from 'react'

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-latte shrink-0">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const HOURS = [
  { day: 'Mon – Fri', time: '7 am – 7 pm' },
  { day: 'Saturday', time: '8 am – 6 pm' },
  { day: 'Sunday', time: '8 am – 4 pm' },
  { day: 'Public Holidays', time: 'Sometimes — check Instagram' },
]

export default function Location() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="visit"
      ref={ref}
      className="bg-divider px-6 py-24"
    >
      <div
        className={`mx-auto max-w-lg text-center transition-all duration-500 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Label */}
        <span className="text-xs tracking-widest text-muted uppercase">
          Find Us
        </span>

        <h2 className="mt-4 font-playfair text-4xl text-espresso">
          We're open most days.
        </h2>

        {/* Hours table */}
        <div className="mt-10">
          {HOURS.map((row) => (
            <div
              key={row.day}
              className="flex items-center justify-between border-b border-divider py-3 text-sm transition-colors duration-200 hover:bg-cream/50"
            >
              <span className="text-ink">{row.day}</span>
              <span className="text-muted">{row.time}</span>
            </div>
          ))}
        </div>

        {/* Address */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-ink">
          <MapPinIcon />
          <span>12, Banjara Hills Road No. 1, Hyderabad — 500034</span>
        </div>

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3 inline-flex items-center gap-1 text-sm text-espresso transition-opacity duration-200 hover:opacity-70"
        >
          Get Directions
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>

        <p className="mt-6 text-sm text-muted italic">
          Street parking available. We're next to the old bookshop.
        </p>
      </div>
    </section>
  )
}
