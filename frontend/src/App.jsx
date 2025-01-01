import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Order from './pages/Order'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import './App.css'
import NavBar from './components/NavBar'
import './styles/tailwind.css';
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path= '/' element = { <Home /> }/>
        <Route path= '/about' element = { <About /> }/>
        <Route path= '/cart' element = { <Cart /> }/>
        <Route path= '/collection' element = { <Collection /> }/>
        <Route path= '/contact' element = { <Contact /> }/>
        <Route path= '/login' element = { <Login /> }/>
        <Route path= '/order' element = { <Order /> }/>
        <Route path= '/placeorder' element = { <PlaceOrder /> }/>
        <Route path= '/order' element = { <Order /> }/>
        <Route path= '/product' element = { <Product /> }/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
