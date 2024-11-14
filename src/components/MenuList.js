import React from 'react'
import MenuItem from './MenuItem'
import "./MenuList.css"

function MenuList({menu}) {

  const menuList= menu.map((item,index)=>(
    <MenuItem key={index} item={item} />

  ))
  return (
    <div className="menu-list">
        {menuList}
    </div>
  )
}

export default MenuList