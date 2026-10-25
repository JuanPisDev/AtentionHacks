import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import Alarms from './pages/Alarms.jsx'
import Kanban from './pages/Kanban.jsx'
import Meditation from './pages/Meditation.jsx'
import Pomodoro from './pages/Pomodoro.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {

  return (
    <Routes>

      <Route path="/auth" element={<Auth />}/>

      <Route element={<ProtectedRoute/>}>
        <Route path="/" element={<Home />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/alarms" element={<Alarms />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path='/meditation' element={<Meditation />}/>
      </Route>
    </Routes>

    
  )
}

export default App
