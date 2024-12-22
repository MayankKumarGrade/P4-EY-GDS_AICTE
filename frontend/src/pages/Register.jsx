import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import AuthForm from '../components/AuthForm';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { fullName, email, password }); 
      navigate('/login');
    } catch (error) {
      console.error("Registration error:", error.response ? error.response.data : error.message);
      alert("Something went wrong during registration!");
    }
  };

  return (
    <AuthForm
      title="Register"
      onSubmit={handleSubmit}
      inputs={[
        { label: 'Full Name', type: 'text', value: fullName, onChange: setFullName },
        { label: 'Email', type: 'email', value: email, onChange: setEmail },
        { label: 'Password', type: 'password', value: password, onChange: setPassword },
      ]}
      submitButtonText="Register"
      footerText={
        <>
          Already have an account? <Link to="/login">Login</Link>
        </>
      }
    />
  );
};

export default Register;
