import { Box, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box textAlign="center" py={10} >
      &copy; {new Date().getFullYear()}{' '}
      <Link href="/" color="inherit">
        Price Checker
      </Link>
      . All Rights Reserved.
    </Box>
  );
};

export default Footer;
