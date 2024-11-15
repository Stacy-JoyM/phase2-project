import React from 'react'
import MenuList from '../components/MenuList'

function Menu({menu, toggleCart, handleToggleCart}) {
  return (
    <>
      <MenuList menu={menu} toggleCart={toggleCart} handleToggleCart={handleToggleCart}/>
    </>
  )
}

export default Menu