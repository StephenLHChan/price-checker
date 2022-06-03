import { signOut } from 'next-auth/react';

import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';

const LogoutButton = () => {
  return (
    <IconButton
      aria-label="logout"
      variant="contained"
      size="large"
      onClick={() => signOut()}
    >
      <LogoutIcon />
    </IconButton>
  );
};

export default LogoutButton;
