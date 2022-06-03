import { Box, Container, Link, Typography, Button } from '@mui/material';

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h1">Not Found</Typography>
      <Typography variant="h5">
        The page you&apos;re looking for was not found.
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center" p={4}>
        <Link href="/">
          <Button variant="contained" size="large">
            Return to home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
