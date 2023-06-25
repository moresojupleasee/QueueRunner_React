import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  Footer,
  Blog,
  Features,
  Possibility,
  WhatQR,
  Header,
  QueuePage,
} from './containers'
import { CTA, Brand, Navbar } from './components'

const Home = () => (
  <>
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatQR />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <div className='plain__bg'>
      <Footer />
    </div>
  </>
)

const Queue = () => <QueuePage />

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/queue'
          element={
            <>
              {' '}
              <Navbar />{' '}
            </>
          }
        />
        <Route path='/queue/auth/twitch/callback' element={<Queue />} />
        <Route path='/*' element={<h1> Staus 404 : Page Not Found </h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
