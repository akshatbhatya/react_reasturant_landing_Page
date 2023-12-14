import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa6";

import { gericht } from './../../assets/index'

import "./NavBar.css"

function NavBar() {

  const [hide, setHide] = useState(false)
  return (
    <nav className='app__navbar'>

      <div className="app__navbar-logo">
        <img src={gericht} alt="gericht" />
      </div>
      <ul className='app__navbar-links'>
        <li><a href="" className='p__opensans'>Home</a></li>
        <li><a href="" className='p__opensans'>Pages</a></li>
        <li><a href="" className='p__opensans'>Contact Us</a></li>
        <li><a href="" className='p__opensans'>Blog</a></li>
        <li><a href="" className='p__opensans'>Landing</a></li>
      </ul>

      <div className="app__navbar-login">
        <a href="login" className='p__opensans'>Log In / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book a Table</a>
      </div>
      <div className="app__navbar__homescreen">
        {/* <FaBars onClick={setHide(!hide)} /> */}
        {/* <button onClick={()=>setHide(!hide)}></button> */}

        <div className="smallscreen__overlay">
          {/* <FaBarcode onClick={setHide(!hide)} /> */}
          <button onClick={() => setHide(!hide)}>{hide ? <FaBarcode /> : <FaBars />}</button>


          {hide ? <>
            <ul className='app__navbar__smallscreen-links scale-up-center'>
              <li><a href="" className='p__opensans'>Home</a></li>
              <li><a href="" className='p__opensans'>Pages</a></li>
              <li><a href="" className='p__opensans'>Contact Us</a></li>
              <li><a href="" className='p__opensans'>Blog</a></li>
              <li><a href="" className='p__opensans'>Landing</a></li>
            </ul>
          </> : null}



        </div>


      </div>



    </nav>
  )
}

export default NavBar;
