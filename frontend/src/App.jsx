import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer'; // Import the Footer

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}> {/* Wrap with ThemeProvider */}
      <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
    </ThemeProvider>
  );
}

export default App;