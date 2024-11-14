import React from 'react'
import "./MenuList.css"

function MenuItem({item}) {
  return (
      <div className="card card-item" >
        <img src={item.image} className="card-img-top" alt={item.name}></img>
        <div className="card-body">
           <h5 className="card-heading">{item.name}</h5>
           <p className="card-description">{item.description}</p>
           <div className="card-action">
             <p className="card-price">${item.price}</p>  
             <button className="btn btn-success button-size">Add to Cart</button>   
           </div>
        </div>
     </div>
  )
}

export default MenuItem