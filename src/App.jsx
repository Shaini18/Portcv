import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <div className='m-8 overflow-x-hidden text-neutral-300  selection:bg-cyan-900 '>
    <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    <div className='fixed top-0 z-[2] h-screen wscreen'></div>
      <div className='container mx-auto px-8'>
    <Navbar></Navbar>
    <Hero></Hero>
    
    </div>
    </div>
     </>
  )
}

export default App
