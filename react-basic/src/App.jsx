// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Header/Navbar'
import Main from './components/Main/Main'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
