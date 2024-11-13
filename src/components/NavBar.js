import React from 'react'
import { Link } from 'react-router-dom'

function NavBar () {
  return (
    <ul className="nav justify-content-end mt-2 me-5">
        <li className="nav-item me-3 fs-5">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item me-3 fs-5">
            <Link className="nav-link" to="./menu">Menu</Link>
        </li>
        <li className="nav-item me-5 fs-5">
            <Link className="nav-link" to="./cart">Cart</Link>
        </li>
        
    </ul>
  )
}

export default NavBar