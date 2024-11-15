import React, {useState, useEffect} from 'react'
import CategoryItem from './CategoryItem'
import "./CategorySlider.css"

function CategorySlider() {
    const [categories, setCategories] = useState([])
    
    useEffect(()=>{
        fetch('https://json-server-template-676m.onrender.com/categories')
        .then((response) => response.json())
        .then((data) => {
          setCategories(data)
        })}, [])
    
    const categoriesDisplay= categories.map((category, index)=> (
        <CategoryItem key={index} category={category} />
    ))

  return (
    
      <div className="category-slider">
          {categoriesDisplay}
      
      </div>
  )
}

export default CategorySlider