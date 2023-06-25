import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/cherry-blossom-5439750.svg'

const Menu = () => (
  <>
    <p>
      <a href='/'>Home</a>
    </p>
    <p>
      <a href='/#whatqr'>What is QR?</a>
    </p>
    <p>
      <a href='/#possibility'>Browse</a>
    </p>
    <p>
      <a href='/#blog'>Blog</a>
    </p>
    <p>
      <a href='/queue'>queue</a>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='qr__navbar'>
      <div className='qr__navbar-links'>
        <div className='qr__navbar-links_logo'>
          <a href='/'>
            <img src={logo} alt='logo' />
          </a>
        </div>

        <div className='qr__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='qr__navbar-sign'>
        <a href='https://id.twitch.tv/oauth2/authorize?client_id=f0e3pg7ueeqjoqb37jigpxy2d6y4cp&redirect_uri=http://localhost:3000/queue/auth/twitch/callback&response_type=code&scope=user:read:follows'>
          <button type='button'>Sign in</button>
        </a>
      </div>
      <div className='qr__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='qr__navbar-menu_container scale-up-center'>
            <div className='qr__navbar-menu_container-links'>
              <Menu />
            </div>
            <div className='qr__navbar-menu_container-links-sign'>
              <button type='button'>Sign in </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
