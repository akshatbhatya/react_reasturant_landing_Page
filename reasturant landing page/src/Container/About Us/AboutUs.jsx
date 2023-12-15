import React from 'react'
import "./AboutUs.css"

import { spoon, knife, G } from "./../../assets/index"
import SubHeading from '../../Components/SubHeading/SubHeading'

const AboutUs = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column-reverse',
    /* Other flex properties can be added here */
  };
  return (
    <div className='app__aboutUs app__bg flex__center section__padding'>

      <div className="app__aboutUs-overlay flex__center">
        <img src={G} alt="G" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1>About Us</h1>
          <SubHeading image={spoon} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et."} />
          <br />
          <div className="app__aboutUs-content-button">
            <button>Know More</button>
          </div>
        </div>

        <div className="app__aboutus-content-center-image">
          <img src={knife} alt="knife" />
        </div>

        <div className="app__aboutus-content-history">
          <h1>Our History</h1>

          <SubHeading title={"Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet."} image={spoon} style={containerStyle} />
          <div className="app__aboutUs-content-button">
            <br />
            <button>Know More</button>
          </div>
        </div>


      </div>
      about us
    </div>
  )
}

export default AboutUs
