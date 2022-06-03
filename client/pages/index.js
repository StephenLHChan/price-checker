import { useSession, getSession } from 'next-auth/react';

import { Container, Box, Button, Typography, Link } from '@mui/material';

const Home = () => {
  const { data: session } = useSession();

  return (
    <Container>
      <Box>
        <Typography variant="h3">
          {session && `${session.user.name}, `} Welcome to Price Checker
        </Typography>
        <Link href="/grocery">
          <Button variant="contained" size="large">
            Start!
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
