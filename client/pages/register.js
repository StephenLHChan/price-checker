import { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Link,
  FormControl,
  TextField,
  FormHelperText,
  Button
} from '@mui/material';

const Register = () => {
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const register = async credentials => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      await localStorage.setItem('messenger-token', data.token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async event => {
    console.log('handleRegister');
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  return (
    <Box display="flex" justifyContent="center" pt={5} pb={20}>
      <Box>
        <Box display="flex" justifyContent="center">
          <Typography>Need to log in?</Typography>
          <Link href="/login" to="/login">
            <Button>Login</Button>
          </Link>
        </Box>

        <form onSubmit={handleRegister}>
          <Box>
            <Box>
              <FormControl margin="dense">
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl margin="dense">
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl
                error={!!formErrorMessage.confirmPassword}
                margin="dense"
              >
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 8 }}
                  name="password"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box>
              <FormControl
                error={!!formErrorMessage.confirmPassword}
                margin="dense"
              >
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 8 }}
                  name="confirmPassword"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box display="flex" justifyContent="center" pt={2}>
              <Button type="submit" variant="contained" size="large">
                register
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
