import React from 'react'
import "./../../assets/index"
import "./Chef.css"

import SubHeading from './../../Components/SubHeading/SubHeading'
import { ChefPic, spoon, Quote } from "./../../assets/index"

const Chef = () => {
  return (
    <div className='app__chef-container  section__padding'>
      <div className="image-section">
        <img src={ChefPic} alt="ChefPic" />

      </div>


      <div className="app__chef-content">

        <SubHeading image={spoon} title={'What we believe in'} />

        <h1>What we believe in</h1>

        <br />
        <br />
        <br />
        <div className="app__chef-contentofimgandpara">
          <span>
            <img src={Quote} width={37} alt="dgf" />

          </span>

          <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        </div>
        <br />
        <br />
        <br />
        <div className="app__chef-name">
          <h1>Kevin Luo</h1>
          <p>Chef & Founder</p>

        </div>
        <br />
        <br />
        <br />
        <div className="signature">
          <p>Kevin Luo</p>
        </div>

      </div>

    </div>
  )
}

export default Chef
