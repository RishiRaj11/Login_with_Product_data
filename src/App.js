import React from 'react'
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

const App = () => {
  return (
   <ShopContextProvider>
     <Router>
     
      <Routes>
       <Route path="/"  element={<Login />}  exact/>
       <Route path="/signup"  element={<Signup/>}  exact/>
       <Route path="/welcome"  element={<Shop />}  exact/>

       </Routes>
    </Router>
   </ShopContextProvider>
  )
}

export default App;