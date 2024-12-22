import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Card,
  CardContent,
  Grid,
  Avatar,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  BarChart as BarChartIcon,
  ExitToApp as ExitToAppIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

const Dashboard = () => {
  const { isLoggedIn, logout, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }

    const fetchProfile = async () => {
      try {
        const config = {
          headers: { 
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get('/api/auth/profile', config);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, [isLoggedIn, navigate, token]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafc' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#2c3e50',
            color: '#fff',
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Dashboard
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon sx={{ color: '#fff' }}><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: '#fff' }}><PersonIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: '#fff' }}><BarChartIcon /></ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItem>
          <ListItem button>
            <ListItemIcon sx={{ color: '#fff' }}><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon sx={{ color: '#fff' }}><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        <Toolbar />
        {/* User Greeting */}
        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src={user.avatar || '/default-avatar.png'}
            sx={{ width: 64, height: 64 }}
          />
          <div>
            <Typography variant="h5" fontWeight="bold">
              Welcome, {user.fullName} 👋
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {user.email}
            </Typography>
          </div>
        </Box>

        {/* Dashboard Stats */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: '15px', boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary">
                  Total Sales
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  $10,500
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: '15px', boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary">
                  Active Users
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  1,205
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: '15px', boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary">
                  Pending Tasks
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  24
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Additional Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Recent Activities
          </Typography>
          <Card sx={{ borderRadius: '15px', boxShadow: 2 }}>
            <CardContent>
              <Typography variant="body1">
                - User A completed a task.  
                <br />
                - User B purchased an item.  
                <br />
                - System update was successful.  
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
