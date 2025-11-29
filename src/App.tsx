import './App.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import Efficiency from './components/Efficiency'
import ProductInfo from './components/ProductInfo'
import MechanismOfAction from './components/MechanismOfAction'
import Safety from './components/Safety'
import PrecautionsAndContraindications from './components/PrecautionsAndContraindications'
import References from './components/References'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gray-100 dark:bg-gray-900">
      <Header />
      <Hero />
      <Efficiency />
      <ProductInfo />
      <MechanismOfAction />
      <Safety />
      <PrecautionsAndContraindications />
      <References />
      <Footer />
    </div>
  )
}

export default App

