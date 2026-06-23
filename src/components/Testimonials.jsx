import { useEffect, useRef, useState } from 'react'

const QUOTES = [
  {
    text: `The cortado here fixed something in me I didn't know was broken.`,
    author: `Meera, regular since 2021`,
  },
  {
    text: `I've tried working from home. I've tried co-working spaces. I keep coming back here.`,
    author: `Rahul, every weekday morning`,
  },
  {
    text: `They remembered my order on my third visit. That's all it took.`,
    author: `Sana, Banjara Hills`,
  },
]

function QuoteBlock({ quote, index }) {
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
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out mb-16 last:mb-0 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: visible ? `${index * 150}ms` : '0ms' }}
    >
      <div className="max-w-xl text-left">
        <span className="font-playfair text-5xl leading-none text-latte select-none block mb-4">
          "
        </span>
        <p className="font-playfair text-xl leading-relaxed text-ink italic">
          {quote.text}
        </p>
        <p className="mt-4 font-dm text-sm text-muted">
          — {quote.author}
        </p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-28 bg-cream">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side Image */}
        <div className="hidden lg:block w-full h-full">
           <img 
             src="/Hero_image_testmenioals.jpeg" 
             alt="Cafe atmosphere" 
             className="w-full h-full object-cover rounded-lg min-h-[600px] shadow-sm" 
           />
        </div>

        {/* Right Side Quotes */}
        <div className="py-8">
          <p className="mb-12 text-left text-xs tracking-widest text-muted uppercase">
            Regulars Say
          </p>
          
          <div className="flex flex-col">
            {QUOTES.map((quote, i) => (
              <QuoteBlock key={i} quote={quote} index={i} />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}
