import React ,{useState} from 'react'
import "./MenuList.css"
import CircularProgress from '@mui/material/CircularProgress';


function MenuItem({item, toggleCart, handleToggleCart}) {
  const [loading, setLoading] = useState(false); //State to hold addingCart loading

   //Make Update request for inCart
   const handleCart = () => {

    setLoading(true); // Start loading when cart button is pressed

    fetch(`https://json-server-template-676m.onrender.com/menu/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...item,
        inCart:!item.inCart
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((updatedItem) => {
        toggleCart(updatedItem)
        setLoading(false)  //set loading false once data is changed
        handleToggleCart(updatedItem.inCart)
      });
    
  }



  return (
      <div className="card card-item" >
        <img src={item.image} className="card-img-top" alt={item.name}></img>
        <div className="card-body">
           <h5 className="card-heading">{item.name}</h5>
           <p className="card-description">{item.description}</p>
           <div className="card-action">
             <p className="card-price">${item.price}</p>  
             <button  className= {item.inCart ? "btn btn-danger button-size-menu": "btn btn-success button-size-menu"} 
                     onClick={handleCart} >
            {/* Button content changes accoring to loading state*/}
            {loading ? (
              <CircularProgress size="20px" color="inherit" width="inherit" />
            ) : (
              item.inCart ? 'Remove from Cart' : 'Add to Cart'
            )}
             </button>   
           </div>
        </div>
     </div>
  )
}

export default MenuItem