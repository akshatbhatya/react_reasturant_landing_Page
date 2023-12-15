import React from 'react'

import "./MenuItems.css";

const MenuItems = ({ title, para, price }) => {
    return (

        <>
        <div className='app__menuitems-parent'>
            <h1>{title}</h1>
            <div className='app__menuitem-price'>
            <div/>
            <p>{price}</p>

            </div>  
        </div >
        <br />
        <p className='app__menuiten-para'>{para}</p>
        </>
    )
}

export default MenuItems
