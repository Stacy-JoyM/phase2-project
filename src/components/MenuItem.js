import React from 'react'
import "./MenuList.css"

function MenuItem({item}) {
  return (
      <li className="card" >
        <img src={item.image} className="card-img-top" alt={item.name}></img>
        <div className="card-body">
           <h5 className="card-title">{item.name}</h5>
           <p className="card-text">{item.description}</p>
           <p className="card-text">{item.price}</p>  
           <button className="btn btn-primary">Add to Cart</button>
        </div>
     </li>
  )
}

export default MenuItem