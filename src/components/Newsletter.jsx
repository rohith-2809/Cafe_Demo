import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section id="newsletter" className="px-6 py-24">
      <div className="mx-auto max-w-md text-center">
        {/* Label */}
        <span className="text-xs tracking-widest text-muted uppercase">
          Stay in the loop
        </span>

        <h2 className="mt-4 font-playfair text-3xl text-espresso md:text-4xl">
          Good things, infrequently.
        </h2>

        <p className="mt-4 text-muted font-light">
          No spam. Just new beans, seasonal menus, and the occasional poem.
        </p>

        {submitted ? (
          <p className="mt-10 font-playfair text-lg text-espresso italic">
            You're in. See you soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 border-b border-espresso bg-transparent px-0 py-2 text-sm text-ink placeholder:text-muted focus:outline-none"
            />
            <button
              type="submit"
              className="bg-espresso px-6 py-2 text-sm text-cream transition-opacity duration-200 hover:opacity-80"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-6 text-xs text-muted italic">
          We send maybe 4 emails a year.
        </p>
      </div>
    </section>
  )
}
