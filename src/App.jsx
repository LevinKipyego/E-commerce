/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from  'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'


function App() {
  

  return (
    <div>
    
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
          <Route path="/"  element = {<Shop/>}></Route>
          <Route path="/Men"  element = {<ShopCategory category = "Men"/>}></Route>
          <Route path="/"  element = {<ShopCategory category = "Women"/>}></Route>
          <Route path="/"  element = {<ShopCategory category = "Kids"/>}></Route>
          <Route path="/"  element = {<Shop/>}></Route>
          <Route path="/"  element = {<Shop/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App
