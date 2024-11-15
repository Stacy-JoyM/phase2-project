import React , {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import OrderConfirm from "./pages/OrderConfirm";


function App() {
  const [menu, setMenu] = useState([]) //state that holds list items in menu
  const [cartCount, setCartCount] = useState(0); //state that holds cartcount for notification
  const [isLoading , setIsLoading ] = useState(true) //state that holds isloading for menu items

  
  
  
/*Get the menu from the db*/
  useEffect(()=>{
    fetch('https://json-server-template-676m.onrender.com/menu')
    .then((response) => response.json())
    .then((data) => {
      setMenu(data)
      setIsLoading(false); 
    })}, [])

/*function that changes the inCart in db */
function toggleCart(updatedItem) {
  //handles the update change 
  setMenu(prevMenu =>
    prevMenu.map(item =>
      item.id === updatedItem.id ? { ...item, inCart: updatedItem.inCart } : item
    )
  );

}

/*function that changes the count number in cart icon */
  
function handleToggleCart(inCart){
  // Increase or decrease the count based on item being added/removed
  setCartCount(prevCount => inCart ? prevCount + 1 : Math.max(prevCount - 1, 0));
};

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout cartCount={cartCount}/>} >
              <Route index element={<Home menu={menu} isLoading={isLoading}/>} />
              <Route path="menu" element={<Menu menu={menu} toggleCart={toggleCart} handleToggleCart={handleToggleCart} />} />
              <Route path="cart" element={<Cart />}/>
              <Route path="payment" element={<Payment />} />
              <Route path="confirmation" element={<OrderConfirm/>}/>
              {/* <Route path="*" element={<NoPage/>}/> */}
              
              

          </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
