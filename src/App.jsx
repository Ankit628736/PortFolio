import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import PortFolio from './components/PortFolio'
import Experiance from './components/Experiance'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'

export default function () {
  return (
    <>
    <div>
    <Navbar />
    <Home />
    <About />
    <PortFolio />
    <Experiance />
    <Contact />
    <Footer />
    </div>
    <Toaster />
    </>
  )
}
