import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Alarms from './pages/Alarms'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alarms" element={<Alarms />} />
    </Routes>

    
  )
}

export default App
