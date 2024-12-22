import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

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

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.fullName}!</h1>
      <p>This is your dashboard.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
