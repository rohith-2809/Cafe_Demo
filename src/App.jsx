import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Craft from './components/Craft'
import Location from './components/Location'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Craft />
        <Location />
        <Gallery />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
