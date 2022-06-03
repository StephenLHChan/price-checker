import { Box, Link, Typography } from '@mui/material';

const Logo = () => {
  return (
    <Link href="/" underline="none" color="inherit">
      <Box h="30px" display="inline-flex" alignItems="center" p={1} sx={{}}>
        <Typography ml={3} fontSize="18px" fontWeight="bold" lineHeight="20px">
          Price Checker
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;
