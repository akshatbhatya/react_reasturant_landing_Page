import React from 'react'

import "./SpecialMenu.css"
import SubHeading from './../../Components/SubHeading/SubHeading'

import { spoon } from "./../../assets/index"
import MenuItems from '../MenuItems/MenuItems'
import { Menu } from "./../../assets/index"

const SpecialMenu = () => {
  return (

    <div className='app__specialMenu'>
      <div className='app__specialMenu flex__center section__padding'>
        <div className="app__specialmenu-title">

          <SubHeading title={"Menu that fits you palatte"} image={spoon} />
          <h1 className='headtext__cormorant'>Today’s Special</h1>

        </div>

      </div>

      <div className="app__specialmenu-container-menu flex__center section__padding">
        <div className="app_specialmenu-menu1">
          <h1>Wine & Beer</h1>
          <br />
          <MenuItems title={"Chapel Hill Shiraz"} para={"AU | Bottle"} price={"$56"} />
          <br />
          <MenuItems title={"Catena Malbec"} para={"AR | Bottle"} price={"$59"} />
          <br />
          <MenuItems title={"La Vieille Rosé"} para={"FR | 750 ml"} price={"$44"} />
          <br />
          <MenuItems title={"Rhino Pale Ale"} para={"CA | 750 ml"} price={"$31"} />
          <br />
          <MenuItems title={"Irish Guinness"} para={"IE | 750 ml"} price={"$26"} />
          <br />
        </div>


        <div className="app__specialmenu-image">
          <img src={Menu} alt="Menu" />
        </div>




        <div className="app_specialmenu-menu1">
          <h1>Wine & Beer</h1>
          <br />
          <MenuItems title={"Aperol Spritz"} para={"Aperol | Villa Marchesi prosecco | soda | 30ml"} price={"$56"} />
          <br />
          <MenuItems title={"Dark 'N' Stormy"} para={"Dark rum | Ginger beer | Slice of lime."} price={"$59"} />
          <br />
          <MenuItems title={"Daiquiri"} para={"Rum | Citrus juice | Sugar"} price={"$44"} />
          <br />
          <MenuItems title={"Old Fashioned"} para={"Bourbon | Brown sugar | Angostura Bitters"} price={"$31"} />
          <br />
          <MenuItems title={"Negroni"} para={"Gin | Sweet Vermouth | Campari | Orange garnish"} price={"$26"} />
        </div>

       

      </div>
      <div className="app__specialmenu-btn">
          <button>View More</button>
        </div>



    </div>




  )
}

export default SpecialMenu
