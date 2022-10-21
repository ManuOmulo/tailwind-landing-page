import Nav from "./controllers/Nav"
import Hero from "./components/hero"
import Features from "./components/features"
import Testimonials from "./components/testimonials"
import CTA from './components/cta'
import Footer from "./components/footer"

function App() {

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
