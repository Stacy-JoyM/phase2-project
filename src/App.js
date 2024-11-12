
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import OrderConfirm from "./pages/OrderConfirm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>} >
              <Route index element={<Home/>} />
              <Route path="menu" element={<Menu/>}/>
              <Route path="cart" element={<Cart/>}/>
              <Route path="payment" element={<Payment />} />
              <Route path="confirmation" element={<OrderConfirm/>}/>
          </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
