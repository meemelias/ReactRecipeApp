import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/weather'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Favorties from './pages/favourites'
import Details from './pages/detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-grey-600 text-lg'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorties/>}/>
          <Route path='/recipe-item/:id' element={<Details/>}/>
        </Routes>

      </div>
      

    </div>
  )
}

export default App
