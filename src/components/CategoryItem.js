import React from 'react'
import {useNavigate} from "react-router-dom"
import "./CategoryItem.css"

function CategoryItem({category}) {

    const navigate= useNavigate();

    function handleCategoryClick(){
        navigate("/menu")
    }
  return (
    <div className="category">
      <p>{category.name}</p>
      <div className="category-card" style={{backgroundImage: `url(${category.image})` }} onClick={handleCategoryClick}>
      </div>
    </div>
  )
}

export default CategoryItem