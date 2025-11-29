import './App.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import Efficiency from './components/Efficiency'
import ProductInfo from './components/ProductInfo'
import MechanismOfAction from './components/MechanismOfAction'

function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gray-100 dark:bg-gray-900">
      <Header />
      <Hero />
      <Efficiency />
      <ProductInfo />
      <MechanismOfAction />

    </div>
  )
}

export default App

