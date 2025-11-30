import '../App.scss'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Efficiency from '../components/Efficiency'
import ProductInfo from '../components/ProductInfo'
import MechanismOfAction from '../components/MechanismOfAction'
import Safety from '../components/Safety'
import PrecautionsAndContraindications from '../components/PrecautionsAndContraindications'
import References from '../components/References'
import Footer from '../components/Footer' 
import DrugInteractions from '../components/DrugInteractions'


function TibsovoPage() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden ">
      <Header />
      <Hero />
      <Efficiency />
      <ProductInfo />
      <MechanismOfAction />
      <Safety />
      <PrecautionsAndContraindications />
      <DrugInteractions />
      <References />
      <Footer />
    </div>
  )
}

export default TibsovoPage

