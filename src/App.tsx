
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'



function App() {
  
  return (
    <div className='bg-[#000814] h-screen w-screen overflow-y-auto'>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
    </div>
  )
}

export default App
