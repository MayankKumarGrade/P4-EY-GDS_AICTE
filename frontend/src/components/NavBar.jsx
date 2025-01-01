import React, {useState, useContext} from 'react';
import { assets } from '../assets/assets';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { Search, User, ShoppingCart, AlignRight, Cross } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';

const NavBar = () => {

    const[visible, setVisible] = useState(false);
    const {setShowSearch} = useContext(ShopContext);

  return (
    <div className="navbar">
      <Link to="/"><img src={assets.logo} alt="logo" className="logo" /></Link>
      <ul className="nav">
          <NavLink to="/" className="navlink">
            <p>HOME</p>
            <hr className="hr" />
          </NavLink>
          <NavLink to="/collection" className="navlink">
            <p>COLLECTION</p>
            <hr className="hr" />
          </NavLink>
          <NavLink to="/about" className="navlink">
            <p>ABOUT</p>
            <hr className="hr" />
          </NavLink>
          <NavLink to="/contact" className="navlink">
            <p>CONTACT</p>
            <hr className="hr" />
          </NavLink>
          <NavLink to="/login" className="navlink">
            <p>LOGIN</p>
            <hr className="hr" />
          </NavLink>
          <NavLink to="/register" className="navlink">
            <p>REGISTER</p>
            <hr className="hr" />
          </NavLink>
      </ul>
      <div className="search">
            <Link to="/collection"><Search onClick={()=>setShowSearch(true)} className="sicon" /></Link>
            <div className="user">
                <User className="uicon" />
                <div className="dropdown-menu">
                    <p className='dmp'>My Profile</p>
                    <p className='dmp'>Orders</p>
                    <p className='dmp'>Logout</p>
                </div>
            </div>
            <Link to="/cart" className="carticon">
            <ShoppingCart />
            <p className="cartdot">10</p>
            </Link>
            <AlignRight onClick={()=>setVisible(true)} className="menuicon"/>
      </div>

      <div className={`absolute top-5 right-0 bottom-0 overflow-hidden h-screen bg-white transition-all duration-300 ${visible ? 'w-full shadow-lg' : 'w-0 hover:w-16 hover:shadow-md hover:scale-105'}`}>
        <div className="flex flex-col p-4 text-gray-600 border rounded-xl h-full">
          <div 
            onClick={() => setVisible(false)} 
            className="flex items-center justify-end gap-4 p-3"
          >
            <Cross 
              onClick={() => setVisible(false)} 
              className="h-8 w-8 cursor-pointer text-gray-800 transition-transform duration-300 rotate-90 hover:rotate-45 hover:opacity-80"
            />
          </div>
          
          <NavLink 
            onClick={() => setVisible(false)} 
            to="/" 
            className="py-2 pl-6 border-b transition-all duration-300 hover:text-gray-900 hover:bg-gray-100 hover:scale-105 rounded-md"
          >
            HOME
          </NavLink>
          <NavLink 
            onClick={() => setVisible(false)} 
            to="/collection" 
            className='py-2 pl-6 border-b transition-all duration-300 hover:text-gray-900 hover:bg-gray-100 hover:scale-105 rounded-md'
          >
            COLLECTION
            </NavLink>
          <NavLink 
            onClick={() => setVisible(false)} 
            to="/about" 
            className='py-2 pl-6 border-b transition-all duration-300 hover:text-gray-900 hover:bg-gray-100 hover:scale-105 rounded-md'
          >
            ABOUT
          </NavLink>
          <NavLink 
            onClick={() => setVisible(false)} 
            to="/contact" 
            className='py-2 pl-6 border-b transition-all duration-300 hover:text-gray-900 hover:bg-gray-100 hover:scale-105 rounded-md'
          >
            CONTACT
          </NavLink>
          <NavLink 
            onClick={() => setVisible(false)} 
            to="/login" 
            className='py-2 pl-6 border-b transition-all duration-300 hover:text-gray-900 hover:bg-gray-100 hover:scale-105 rounded-md'
          >
            LOGIN
          </NavLink>
          <NavLink 
            onClick={() => setVisible(false)} 
            to="/register" 
            className='py-2 pl-6 border-b transition-all duration-300 hover:text-gray-900 hover:bg-gray-100 hover:scale-105 rounded-md'
          >
            REGISTER
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
