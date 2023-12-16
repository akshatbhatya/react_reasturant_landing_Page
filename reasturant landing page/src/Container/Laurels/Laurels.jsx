import React from 'react'

import "./Laurels.css"
import { spoon, Laurel, award02,award01,award03,award05 } from "./../../assets/index"

import SubHeading from "./../../Components/SubHeading/SubHeading"
import AwardCard from '../AwardCard/AwardCard'


const Laurels = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className="app__wrapper-info">
        <SubHeading title="Awards & recognition" image={spoon} />
        <h1>Our Laurels</h1>
        <br />

        <div className="app__laurels__award__card">
          <AwardCard title={"Bib Gourmond"} para={"Lorem ipsum dolor sit amet, consectetur."} image={award02} />
          
          <AwardCard title={"Bib Gourmond"} para={"Lorem ipsum dolor sit amet, consectetur."} image={award01} />
          
          <AwardCard title={"Bib Gourmond"} para={"Lorem ipsum dolor sit amet, consectetur."} image={award05} />
          
          <AwardCard title={"Bib Gourmond"} para={"Lorem ipsum dolor sit amet, consectetur."} image={award03} />

        </div>



      </div>
      <div className="app__wrapper-img">
        <img src={Laurel} alt="" srcset="" />
      </div>




    </div>
  )
}

export default Laurels
