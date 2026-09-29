import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Alarms from './pages/Alarms.jsx'
import Kanban from './pages/Kanban.jsx'
import Meditation from './pages/Meditation.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alarms" element={<Alarms />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path='/Meditation' element={<Meditation />}/>
    </Routes>

    
  )
}

export default App
