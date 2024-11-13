import React from 'react'
import {useNavigate} from "react-router-dom"

function CategoryItem({category}) {

    const navigate= useNavigate();

    function handleCategoryClick(){
        navigate("/menu")
    }
  return (
    <li className="card" style={{width: "8rem",minHeight: '8rem',cursor:"pointer" }} onClick={handleCategoryClick}>
        <img src={category.image} className="card-img-top" alt={category.name} style={{height: '6rem' }}></img>
        <div className="card-body" >
           <p className="card-text">{category.name}</p>
       </div>
    </li>
  )
}

export default CategoryItem