import React from 'react'
import MenuItem from './MenuItem'
import "./MenuList.css"

function MenuList({menu}) {

  const menuList= menu.map((item,index)=>(
    <MenuItem key={index} item={item} />

  ))
  return (
    <ul className="menu-list">
        {menuList}
    </ul>
  )
}

export default MenuList