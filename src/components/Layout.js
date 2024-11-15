import React from 'react'
import NavBar from "./NavBar"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'

//Ensure all pages are contained within NavBar and Footer
function Layout({cartCount}) {
  return (
    <div>
        <NavBar cartCount={cartCount}/>
        <Outlet />      
        <Footer />
    </div>
  )
}

export default Layout