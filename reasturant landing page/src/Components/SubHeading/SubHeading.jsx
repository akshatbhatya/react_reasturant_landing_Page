import React from 'react'
import "./SubHeadding.css"

const SubHeading = ({image,title}) => {
  return (
    <div>
        <div style={{padding:'0px 0px 0px 1rem'}}>
            <p className='p__cormorant'>{title}</p>
            <img src={image} alt="" />
        </div>
      
    </div>
  )
}

export default SubHeading
