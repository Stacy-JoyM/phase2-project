import React, {useState, useEffect} from 'react'
import CategoryItem from './CategoryItem'

function CategorySlider() {
    const [categories, setCategories] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then((response) => response.json())
        .then((data) => {
          setCategories(data)
        })}, [])
    
    const categoriesDisplay= categories.map((category, index)=> (
        <CategoryItem key={index} category={category} />
    ))

  return (
    <ul className="d-flex justify-content-around align-items-center">
        {categoriesDisplay}
    
    </ul>
  )
}

export default CategorySlider