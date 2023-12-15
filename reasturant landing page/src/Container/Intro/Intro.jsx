import React from 'react'

import "./Intro.css"
import { Meal } from '../../assets/index'

const Intro = () => {
  return (
    <div className='app__into-container'>
      <video src={Meal} autoPlay="true" controls allowFullScreen width={"100%"}/>
    </div>
  )
}

export default Intro
