import React, {useState, useEffect} from 'react'
import "../components/Cart.css"

function Cart() {
  const [total, setTotal] =useState(0)
  const [cartItems, setCartItems] =useState([])
  //fetch items from db with inCart set as true
  useEffect(() => {
    fetch('https://json-server-template-676m.onrender.com/menu?inCart=true')
      .then(response => response.json())
      .then(items => setCartItems(items))
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  // Update total whenever cartItems changes
  useEffect(() => {
    const calculatedTotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotal(calculatedTotal);
  }, [cartItems]);

   //function that removes items from cartItem
  //  function removeCart(itemId){
  //   // Update the inCart value in the DB
  //   fetch(`https://json-server-template-676m.onrender.com/menu/${itemId}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ inCart: false }),  // Set inCart to false
  //   })
  //     .then((response) => {response.json()})
  //     .then((prevCartItems) => {
  //       setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== itemId));

  //     })
  // }
      

  return (
    <div className="cart-divs">
    {cartItems.length > 0 ? (
      <div className="list-group">
        {cartItems.map(item => (
           <li className="list-group-item list-group-item-action cart-card" key={item.id}>
              <img src={item.image} alt="Item Name" className=""  />
              <div className="cart-text">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <div >
                  <div className="action">
                     <p>${item.price}</p>
                     {/* <button className="btn btn-danger button-size" onClick={()=>removeCart(item.id)}>Remove from Cart</button> */}
                  </div>
                </div>
              </div>
          </li>
        ))}
        <div className="cart-order-div">
           <p className="pt-3"> Total: ${total.toFixed(2)}</p>
          {/* <button className="btn btn-success">Place Order</button> */}
        </div>
      </div>
    ) : (
      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
        <p className="fs-5">No item in cart</p>
        <img src='https://media.istockphoto.com/id/1219014036/video/shopping-grocery-products-stock-animation-alpha-matte.jpg?s=640x640&k=20&c=tlDAQzl1lr4ynJfD4wjVw9WgcQT9gcTry5AQ0JMgcK8=' alt="Cart"></img>
      </div>
    )}
  </div>
  )
}

export default Cart