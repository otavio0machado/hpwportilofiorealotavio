import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Hero />
      <ProblemSolution />
      <Portfolio />
      <About />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
