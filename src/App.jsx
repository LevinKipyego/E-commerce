/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from  'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Products from './pages/Products'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'

//Banners
import women_banner from './components/assets/banners/Artboard 1.png'
function App() {
  

  return (
    <div>
    
    <BrowserRouter>
      <Navbar/>
      
      
      <Routes>
          <Route path="/"  element = {<Shop/>}></Route>
          <Route path="/Men"  element = {<ShopCategory banner = { women_banner } category = "Men"/>}></Route>
          <Route path="/Women"  element = {<ShopCategory category = "women"/>}></Route>
          <Route path="/Kids"  element = {<ShopCategory category = "Kids"/>}></Route>
          <Route path="/products"  element = {<Products/>}>
              <Route path=':productId' element={<Products/>}></Route>
          
          </Route>
          <Route path="/cart"  element = {<Cart/>}></Route>
          <Route path="/login"  element = {<LoginSignup/>}></Route>
          
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App
