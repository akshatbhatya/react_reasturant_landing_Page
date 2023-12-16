import React from 'react'

import "./Footer.css"

function Footer (){
  return (
    <>
    <div className="app__footer-container">
      
      <div className="app__footer-Contactus">
        <h3>Contact Us</h3>
        <br />

        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>+1 212-344-1230</p>
        <p>+1 212-555-1230</p>
      </div>

      <div className="app__footer-logo">
        <h1>Gerícht</h1>
        <br />
        <p>The best way to find yourself is to lose yourself in the service of others.</p>
      </div>
      <div className="app__footer-working">
        <h3>Working Hours</h3>
        <br />
        <p>Monday-Friday:</p>
        <p>08:00 am -12:00 am</p>
        <br />
        <p>Saturday-Sunday:</p>
        <p>07:00am -11:00 pm</p>
      </div>
      
    </div>
    </>
  )
}

export default Footer;