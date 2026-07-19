import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import ServicesOverview from './components/ServicesOverview'
import ServicesGrid from './components/ServicesGrid'
import TechStack from './components/TechStack'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <ServicesOverview />
      <ServicesGrid />
      <TechStack />
      <Footer />
    </>
  )
}

export default App