import React from 'react'
import './header.css'
import yt from '../../assets/youtube-1834016_640.png'
import twitch from '../../assets/twitch-6860918_640.png'
const Header = () => {
  return(
  <div className="qr__header section__padding" id = 'home'>
    <div className="qr__header-content">
    <h1 className='gradient__text'> Save and playback your favourite videos!</h1>
    <p>Not sure where to save and watch your fav videos?  With QueueRunner, you'll never run out of great entertainment options.</p>
    

    <div className="qr__header-content__input">
      <input type = 'email' placeholder='Your Email Address' maxLength="50"/>
      <button type='button'>Get Started </button>
      </div>
  </div>
      <div className="qr__header-image">
        <img src={yt} alt='youtube'/>
        <img src={twitch} alt='twitch' className="qr__header-second-image"/>
      </div>
  </div>
 
)}

export default Header

