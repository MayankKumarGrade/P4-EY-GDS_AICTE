import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import {
  Box, Typography, Avatar, Grid, Card, CardContent
} from '@mui/material';

const Dashboard = () => {
  const { isLoggedIn, logout, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]); // Initialize as an empty array
  const [wishlist, setWishlist] = useState([]); // Initialize as an empty array

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }

    // Fetch Profile Data
    const fetchProfile = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        const { data } = await axios.get('/api/auth/profile', config);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch Orders Data
    const fetchOrders = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        const { data } = await axios.get('/api/user/orders', config);
        if (Array.isArray(data)) {
          setOrders(data); // Ensure it's an array
        } else {
          setOrders([]); // Set to empty array if it's not an array
        }
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch Wishlist Data
    const fetchWishlist = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        const { data } = await axios.get('/api/user/wishlist', config);
        // Ensure it's an array
        if (Array.isArray(data)) {
          setWishlist(data);
        } else {
          setWishlist([]); // Set to empty array if it's not an array
        }
      } catch (error) {
        console.log(error);
        setWishlist([]); // Set to empty array in case of error
      }
    };

    fetchProfile();
    fetchOrders();
    fetchWishlist();
  }, [isLoggedIn, navigate, token]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
      <Avatar src={user.avatar} sx={{ width: 64, height: 64 }} />
      <Typography variant="h5" fontWeight="bold">Welcome, {user.fullName} 👋</Typography>

      {/* Orders */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" fontWeight="bold">Your Orders</Typography>
        <Grid container spacing={3}>
          {Array.isArray(orders) && orders.length > 0 ? (
            orders.map((order) => (
              <Grid item xs={12} md={4} key={order._id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Order #{order._id}</Typography>
                    <Typography>Status: {order.status}</Typography>
                    <Typography>Total: ${order.total}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No orders available</Typography>
          )}
        </Grid>
      </Box>

      {/* Wishlist */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" fontWeight="bold">Your Wishlist</Typography>
        <Grid container spacing={3}>
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <Grid item xs={12} md={4} key={item.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{item.productName}</Typography>
                    <Typography>Price: ${item.price}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No items in your wishlist</Typography>
          )}
        </Grid>
      </Box>

      <Box sx={{ mt: 4 }}>
        <button onClick={handleLogout}>Logout</button>
      </Box>
    </Box>
  );
};

export default Dashboard;
