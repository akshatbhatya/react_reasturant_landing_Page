import React from 'react'
import SubHeading from '../SubHeading/SubHeading';
import "./Header.css"

import {spoon,welcome} from "./../../assets/index"

export const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding  app__parent'>
      <div className="app__wrapper_info">
        <SubHeading image={spoon} title={"Chase the new Flavour"}/>
       <div className="app__header-content">

        <h1 className='app__header-h1'>The key to Fine dining</h1>
        <br />
        <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <br />

        <button>Explore Menu</button>
       </div>
      </div>
      <div className="app__header__content-section">
        <img src={welcome} alt="" />
       </div>
    </div>
  )
}

export default Header;