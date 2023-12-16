import React from 'react'
import "./AwardCard.css"

const AwardCard = ({ image, title, para }) => {
  return (
    <div className='app__container'>
      <div className="app__Award__container-img">
        <img src={image} alt="" />
      </div>
      <div className="app__award-content">
        <h1>{title}</h1>
        <br />
        <p className='app__paragraph'>{para}</p>
      </div>
    </div>
  )
}

export default AwardCard;
