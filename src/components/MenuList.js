import React from 'react'
import MenuItem from './MenuItem'
import "./MenuList.css"

function MenuList({menu, toggleCart, handleToggleCart}) {

  const menuList= menu.map((item,index)=>(
    <MenuItem key={index} item={item} handleToggleCart={handleToggleCart} toggleCart={toggleCart}/>
  ))
  return (
    <div className="menu-list">
        {menuList}
    </div>
  )
}

export default MenuList