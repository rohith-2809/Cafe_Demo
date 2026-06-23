import { useEffect, useRef, useState } from 'react'

const CoffeeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-latte">
    <path d="M10 2v2" />
    <path d="M14 2v2" />
    <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
    <path d="M6 2v2" />
  </svg>
)

const SunIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-latte">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
)

const BookOpenIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-latte">
    <path d="M12 7v14" />
    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
  </svg>
)

const GALLERY_ITEMS = [
  { img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop', Icon: CoffeeIcon, label: 'The bar at 7am' },
  { img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop', Icon: SunIcon, label: 'Window seat, 9am light' },
  { img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop', Icon: BookOpenIcon, label: 'Thursday afternoon' },
]

export default function Gallery() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="gallery"
      ref={ref}
      className={`px-6 py-28 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="font-playfair text-4xl text-espresso md:text-5xl">
            Inside Dwell
          </h2>
          <p className="mt-4 text-muted font-light">
            Taken on slow mornings, just like the coffee.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.label} className="group cursor-pointer">
              <div
                className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg shadow-sm bg-divider"
              >
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay that darkens slightly on hover to make icon pop */}
                <div className="absolute inset-0 bg-ink/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Icon wrapper to keep it above the image */}
                <div className="relative z-10 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="bg-cream/90 p-3 rounded-full shadow-md">
                    <item.Icon />
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-sm text-muted italic transition-transform duration-300 group-hover:-translate-y-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
