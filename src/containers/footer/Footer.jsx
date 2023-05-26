import React from 'react'
import './footer.css'
import logo from '../../assets/cherry-blossom-5439750.svg'

const Footer = () => (
  <div className="qr__footer section__padding">
    <div className="qr__footer-links">
      <div className="qr__footer-links_logo">
         <img src={logo} alt='logo'/>
         </div>
         <div className="qr__footer-links_div">
          <h4>SUPPORT</h4>
          <p>Contact</p>
          <p>Social</p>
         </div>
         <div className="qr__footer-links_div">
          <h4>FAQ</h4>
          <p>ask</p>
         </div>
         <div className="qr__footer-links_div">
          <h4> Get in touch</h4>
          <p> queuerunner@gmail.com</p>
          <p> 2334-214-224</p>
         </div>
         <div className="qr__footer-copyright">
          <p> &#169; 2023 Queue Runner. All rights reserved.</p>
         </div>
    </div>
  </div>




)

export default Footer
