import { useEffect, useRef, useState } from 'react'

const SPECS = [
  { label: 'Origin', value: 'Yirgacheffe, Ethiopia' },
  { label: 'Roast', value: 'Light — preserves origin character' },
  { label: 'Brew Method', value: 'V60 Hand Pour, 3:30 min' },
]

export default function Craft() {
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
    <section id="craft" ref={ref} className="px-6 py-28 bg-card-bg">
      <div className="mx-auto max-w-6xl">
        
        {/* Top Hero Image */}
        <div 
          className={`mb-20 w-full h-64 md:h-[400px] overflow-hidden rounded-lg shadow-sm transition-all duration-700 ease-out ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img 
            src="/Craft_hero_image.jpg" 
            alt="Coffee Crafting Process" 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Left — copy */}
          <div
            className={`transition-all duration-700 ease-out delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-xs tracking-widest text-muted uppercase block mb-4">
              Our Process
            </span>
            <h2 className="font-playfair text-4xl leading-snug text-espresso md:text-5xl">
              We know where our coffee comes from.
            </h2>

            <p className="mt-8 text-muted font-light leading-relaxed">
              Every bag we brew is traceable to a single farm. We visit our
              producers, cup their harvests, and roast in small batches to
              preserve the character of each origin.
            </p>
            <p className="mt-4 text-muted font-light leading-relaxed">
              Our philosophy is simple: buy less, buy better, and brew it with
              care. We'd rather serve three exceptional coffees than thirty
              mediocre ones.
            </p>
            <p className="mt-4 text-muted font-light leading-relaxed">
              From adjusting the grind size based on daily humidity to measuring the exact water temperature, our baristas treat every cup as an experiment in perfection. We believe that true craft cannot be rushed.
            </p>

            <a
              href="#about"
              className="group mt-8 inline-flex items-center gap-1 text-sm text-espresso transition-opacity duration-200 hover:opacity-70"
            >
              Learn More
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Right — specs */}
          <div className="flex flex-col justify-center gap-10">
            {SPECS.map((spec, i) => (
              <div
                key={spec.label}
                className={`border-l-2 border-latte pl-6 transition-all duration-700 ease-out ${
                  visible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: visible ? `${(i + 1) * 150}ms` : '0ms' }}
              >
                <span className="text-xs tracking-widest text-muted uppercase">
                  {spec.label}
                </span>
                <p className="mt-2 font-playfair text-2xl text-espresso">
                  {spec.value}
                </p>
                <hr className="mt-5 border-t border-divider" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
