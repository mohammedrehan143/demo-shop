import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Statistics from './components/sections/Statistics'
import Portfolio from './components/sections/Portfolio'
import Testimonials from './components/sections/Testimonials'
import Process from './components/sections/Process'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Statistics />
        <Portfolio />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
