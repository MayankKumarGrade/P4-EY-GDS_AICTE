import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLogoClick = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={handleLogoClick}>
        <h2>E-Commerce</h2>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        {isLoggedIn ? (
          <button className="nav-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
