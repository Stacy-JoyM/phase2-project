import React from 'react'

function CategoryItem({category}) {
  return (
    <li className="card" style={{width: "8rem",minHeight: '8rem' }}>
        <img src={category.image} className="card-img-top" alt={category.name} style={{height: '6rem' }}></img>
        <div className="card-body" >
           <p className="card-text">{category.name}</p>
       </div>
    </li>
  )
}

export default CategoryItem