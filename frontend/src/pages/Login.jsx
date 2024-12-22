import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Make sure AuthContext is correctly imported

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use full URL in the POST request (adjust based on your backend URL)
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      
      // Call the login function from AuthContext
      login(data.token);
      
      // Redirect to dashboard upon successful login
      navigate('/dashboard');
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      alert("Invalid Credentials or Server Error");
    }
  };

  return (
    <AuthForm
      title="Login"
      onSubmit={handleSubmit}
      inputs={[
        { label: 'Email', type: 'email', value: email, onChange: setEmail },
        { label: 'Password', type: 'password', value: password, onChange: setPassword },
      ]}
      submitButtonText="Login"
      footerText={
        <>
          {`Don't have an account?`} <Link to="/register">Register</Link>
        </>
      }
    />
  );
};

export default Login;
