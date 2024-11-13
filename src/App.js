import React , {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import OrderConfirm from "./pages/OrderConfirm";
import NoPage from './pages/NoPage';


function App() {
  const [menu, setMenu] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    fetch('http://localhost:5000/menu')
    .then((response) => response.json())
    .then((data) => {
      setMenu(data) 
      setIsLoading(false);
    })}, [])

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>} >
              <Route index element={<Home menu={menu}   isLoading={isLoading}/>} />
              <Route path="menu" element={<Menu menu={menu}/>}/>
              <Route path="cart" element={<Cart/>}/>
              <Route path="payment" element={<Payment />} />
              <Route path="confirmation" element={<OrderConfirm/>}/>
              <Route path="*" element={<NoPage/>}/>
              
              

          </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
