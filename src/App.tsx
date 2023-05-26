import React from 'react'
import './App.css'
import {
  Footer,
  Blog,
  Features,
  Possibility,
  WhatQR,
  Header,
} from './containers'
import { CTA, Brand, Navbar } from './components'

const App = () => {
  return (
  
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatQR />
      <Features />
      <Possibility />
      <CTA/>
      <Blog/>
      <div className="plain__bg">
        <Footer />
      </div>
    </div>
)
}

export default App
