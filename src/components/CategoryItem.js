import React from 'react'
import {useNavigate} from "react-router-dom"
import "./CategoryItem.css"

function CategoryItem({category}) {

    const navigate= useNavigate();

    function handleCategoryClick(){
        navigate("/menu")
    }
  return (
      <div className="category-card" style={{backgroundImage: `url(${category.image})` }} onClick={handleCategoryClick}>
          <p>{category.name}</p>
      </div>
  )
}

export default CategoryItem