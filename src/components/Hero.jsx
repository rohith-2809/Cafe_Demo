import { useEffect, useState } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col md:flex-row bg-cream"
    >
      {/* Left Content */}
      <div className="flex w-full md:w-1/2 flex-col items-center justify-center px-6 py-32 text-center md:items-start md:text-left md:px-16 lg:px-24">
        <div
          className={`transition-all duration-700 ease-out ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Top rule */}
          <hr className="mb-8 w-24 border-t border-latte mx-auto md:mx-0" />

          <h1 className="font-playfair text-5xl leading-tight text-espresso sm:text-6xl md:text-7xl lg:text-8xl">
            Coffee, <br className="hidden md:block" /> Slowly.
          </h1>

          {/* Bottom rule */}
          <hr className="mt-8 mb-10 w-24 border-t border-latte mx-auto md:mx-0" />

          <p className="max-w-md text-lg font-light text-muted mx-auto md:mx-0 leading-relaxed">
            A small café for people who aren't in a hurry. We believe that good things take time, from the careful selection of our beans to the slow pour of our coffee.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#menu"
              className="bg-espresso px-8 py-3 text-sm text-cream transition-opacity duration-200 hover:opacity-80"
            >
              See Our Menu
            </a>
            <a
              href="#about"
              className="border border-espresso px-8 py-3 text-sm text-espresso transition-colors duration-200 hover:bg-espresso hover:text-cream"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full h-[60vh] md:h-screen md:w-1/2 relative">
        <img 
          src="/Hero_Image.jpg" 
          alt="Coffee shop interior" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:left-24 md:translate-x-0 hidden md:flex">
        <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-latte" />
        <span className="text-xs text-muted tracking-wide">scroll</span>
      </div>
    </section>
  )
}
