import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import TibsovoPage from './pages/TibsovoPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/tibsovo" element={<TibsovoPage />} />
    </Routes>
  )
}

export default App

