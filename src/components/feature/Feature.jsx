import React from 'react'
import './feature.css'

const Feature = ({ title, text }) => (
  <div className="qr__features-container__feature">
    <div className="qr__features-container__feature-title">
      <div /> {/*gradient bar above title*/}
      <h1>{title}</h1>
    </div>
    <div className="qr__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
)

export default Feature
