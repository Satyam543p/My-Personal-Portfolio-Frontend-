import { useState } from 'react'
import Intro from './sections/Intro'
import Header from './sections/Header'
import Home from './pages/Home'
import Footer from './sections/Footer'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Outlet/>
        <Footer/>    
    </>
  )
}

export default App
