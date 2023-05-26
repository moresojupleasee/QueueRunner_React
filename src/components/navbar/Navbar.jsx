import React,{useState} from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/cherry-blossom-5439750.svg'

const Menu = () =>(
  <>
  <p><a href='/#home'>Home</a></p>
  <p><a href='/#whatqr'>What is QR?</a></p>
  <p><a href='/#possibility'>Browse</a></p>
  <p><a href='/#blog'>Blog</a></p>
  <p><a href='/queue'>queue</a></p>
  </>)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return(
  <div className='qr__navbar'>
    <div className="qr__navbar-links">
      <div className="qr__navbar-links_logo">
        <a href='/'>
           <img src={logo} alt ='logo'/>
           </a>
    </div>

    <div className="qr__navbar-links_container">
      <Menu/>
    </div>
   </div>
   <div className="qr__navbar-sign">
    <button type='button'>Sign in</button>
   </div>
   <div className="qr__navbar-menu">
    {toggleMenu
    ? <RiCloseLine color ='#fff' size={27} onClick={() => setToggleMenu(false)}/>
    : <RiMenu3Line color ='#fff' size={27} onClick={() => setToggleMenu(true)}/>}
    {toggleMenu && (
        <div className="qr__navbar-menu_container scale-up-center">
          <div className="qr__navbar-menu_container-links">
            <Menu/>
            </div>
            <div className="qr__navbar-menu_container-links-sign">
              <button type='button'>Sign in</button>
            </div>
            </div>
      )}
      </div> 
      </div>
  );
  };

export default Navbar
