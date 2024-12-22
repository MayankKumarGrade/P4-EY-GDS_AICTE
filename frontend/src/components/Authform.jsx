import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const AuthForm = ({ title, onSubmit, inputs, submitButtonText, footerText }) => {
  return (
    <Container component="main" maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: '20px',
          background: 'linear-gradient(135deg,rgba(55, 176, 246, 0.67),rgb(0, 247, 255))',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: 400,
          width: '100%',
          color: 'black',
        }}
      >
        <Typography component="h1" variant="h4" fontWeight="bold"  gutterBottom>
          {title}
        </Typography>
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 2 }}>
          {inputs.map((input) => (
            <TextField
              key={input.label}
              margin="normal"
              required
              fullWidth
              id={input.label}
              label={input.label}
              name={input.label}
              autoComplete={input.label}
              autoFocus={input.label === 'Email'}
              type={input.type}
              value={input.value}
              onChange={(e) => input.onChange(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                },
                '& .MuiInputLabel-root': {
                  color: '#888',
                },
                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ff6f61',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ff6f61',
                },
              }}
            />
          ))}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#ff6f61',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '50px',
              py: 1.2,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: '#e45a50',
                transform: 'scale(1.05)',
              },
            }}
          >
            {submitButtonText}
          </Button>
          {footerText && (
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              {footerText}
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    })
  ).isRequired,
  submitButtonText: PropTypes.string.isRequired,
  footerText: PropTypes.string,
};

export default AuthForm;
