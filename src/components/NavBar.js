import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
import foodIcon from "../assets/food-icon.svg"
import Avatar from '@mui/material/Avatar';

function NavBar () {
  return (
    <nav class="navbar">
      <div class="navbar-icon">
        <img src={foodIcon} alt="Logo" class="logo"></img><span className="icon-text">Foodie</span>
    </div>
    <ul class="navbar-links">
      <li>
         <Link to="/" className="nav-link">Home</Link>
      </li>
      <li>
         <Link to="/menu" className="nav-link">Menu</Link>
      </li>
      <li>
         <Link to="/cart" className="nav-link"> Cart</Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </li>
    </ul>
    <div>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuNndqVhQDQQGRuBhQzzTvnXlQ38cxvU9sw&s"   sx={{ width: 45, height: 45}} />
    </div>
  </nav>
  )
}

export default NavBar