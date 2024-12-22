import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      
      login(data.token);
      
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
