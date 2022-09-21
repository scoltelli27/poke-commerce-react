import { useState } from 'react'
import './assets/css/style.css'
import Navbar from "../src/components/Navbar"
import Products from "../src/components/Products"
import Footer from "../src/components/Footer"
function App() {

  

  return (
    <div className="App">
      <Navbar /> 
      <Products />
      <Footer />
    </div>
  )
}

export default App
