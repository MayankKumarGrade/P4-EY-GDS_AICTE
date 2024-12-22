import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogout = () => {
    logout();
    navigate('/')
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Commerce
          </Typography>
          {!isLoggedIn ? (
            <div>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/register">Register</Button>
            </div>
          ) : (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;