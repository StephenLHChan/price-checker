import { getProviders, signIn } from 'next-auth/react';
import { Box, Button } from '@mui/material';

const LogIn = ({ providers }) => {
  return (
    <Box>
      {Object.values(providers).map(provider => (
        <Box key={provider.name}>
          <Button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers }
  };
}

export default LogIn;
