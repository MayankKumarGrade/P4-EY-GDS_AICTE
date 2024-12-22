import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const AuthForm = ({ title, onSubmit, inputs, submitButtonText, footerText }) => {
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ p: 3, mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
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
            />
          ))}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {submitButtonText}
          </Button>
          {footerText && (
            <Typography variant="body2" align="center">
              {footerText}
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

// Prop Types Validation
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
