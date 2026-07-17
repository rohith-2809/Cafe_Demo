import { useEffect, useRef, useState } from 'react'




const PILLS = [
  'Est. 2019',
  'Single Origin Only',
  'Roasted Weekly',
]

export default function About() {
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
      id="about"
      ref={ref}
      className={`px-6 py-28 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="w-full">
          <img 
            src="/About_image.avif" 
            alt="About Dwell" 
            className="w-full h-auto rounded-lg object-cover shadow-sm aspect-[4/5]" 
          />
        </div>

        {/* Right Content */}
        <div>
          <span className="text-xs tracking-widest text-muted uppercase block mb-4">
            Our Story
          </span>
          <h2 className="font-playfair text-4xl text-espresso mb-8">
            A sanctuary in the city.
          </h2>

          <blockquote className="border-l-4 border-latte pl-6 font-playfair text-xl leading-relaxed text-ink/80 italic md:text-2xl mb-10">
            "We opened Dwell because we wanted a place that didn't rush you.
            Good coffee takes time. So does a good conversation."
          </blockquote>

          <p className="text-muted font-light leading-relaxed mb-6">
            Since our doors opened, we have been dedicated to creating a space where the noise fades, the Wi-Fi isn't the main attraction, and the coffee speaks for itself.
          </p>
          <p className="text-muted font-light leading-relaxed mb-12">
            Every detail, from the playlist to the ceramics, is chosen to encourage lingering. We partner with local bakeries and source our beans directly from sustainable farms, ensuring that every cup supports our community and our values.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-4">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="cursor-default border border-latte rounded-full px-5 py-1.5 text-sm text-muted transition-all duration-300 hover:bg-latte hover:text-espresso"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
