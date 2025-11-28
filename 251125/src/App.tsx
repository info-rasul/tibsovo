import './App.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import Efficiency from './components/Efficiency'

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900">
      <Header />
      <Hero />
      <Efficiency />
    </div>
  )
}

export default App

