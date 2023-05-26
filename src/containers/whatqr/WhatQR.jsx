import React from 'react'
import './whatQR.css'
import { Feature } from '../../components'

const WhatQR = () => {
  return( <div className='qr__whatqr section__margin' id='whatqr'>
    <div className="qr__whatqr-feature">
      <Feature title='What is Queue Runner'/>
    </div>
    <div className="qr__whatqr-heading">
      <h1 className='gradient__text'> POSSIBILITES ARE BEYOND </h1>
      <p>Explore the QueueRunner</p>
    </div>
    <div className="qr__features-container">
      <Feature title='Everything in one place' text='Save and find all your favourites clips at one place'/>
      <Feature title='Seamless Playback' text='Smooth playback even with low bandwidth network'/>
      <Feature title='Share With Your Community' text='Watch it together and share your best moments with your community '/> 
    </div>
  </div>
)}

export default WhatQR
