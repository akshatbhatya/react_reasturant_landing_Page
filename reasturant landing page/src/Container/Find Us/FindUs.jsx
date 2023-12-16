import React from 'react'
import "./FindUs.css"
import SubHeading from '../../Components/SubHeading/SubHeading'
import { spoon,Find } from "./../../assets/index"

const FindUs = () => {
  return (
    <div className='app__findus-container section__padding'>

      <div className="app__findus-content-1">

        <SubHeading title={"Contact"} image={spoon} />
        <br />

        <h1>Find Us</h1>
        <br />
        <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <br />
        <br />

        <h3>Opening Hours</h3>
        <br />
        <br />

        <div className="app__findus-time-table">
          <p className='time1'>Mon - Fri: 10:00 am - 02:00 am</p>

          <p className='time2'>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
      </div>

      <div className="app__findus-content-2">
        <img src={Find} alt="" />
      </div>





    </div>
  )
}

export default FindUs
