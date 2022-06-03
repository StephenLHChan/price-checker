import { signIn } from 'next-auth/react';

import LoginIcon from '@mui/icons-material/Login';
import { IconButton } from '@mui/material';

const LoginButton = () => {
  return (
    <IconButton
      aria-label="login"
      variant="contained"
      size="large"
      onClick={() => signIn('google')}
    >
      <LoginIcon />
    </IconButton>
  );
};

export default LoginButton;
