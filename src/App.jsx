import { BrowserRouter, Route,Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { useState } from "react";
function App() {
  const [cart,setcart]= useState([]);
  return (
    <>
    <BrowserRouter>
      <Header cart={cart}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home cart={cart} setcart={setcart}/>}/>
          <Route path="/Cart" element={<Cart 
          cart={cart}/>}/>
        </Routes>

      </div>
      </BrowserRouter>
          </>
  )
}

export default App
