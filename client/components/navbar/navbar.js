import { useSession, getSession } from 'next-auth/react';
import { Box, Container, Stack, Typography } from '@mui/material';

import Logo from './logo';
import LinkItem from './link-item';
import NavMenu from './nav-menu';
import LoginButton from './login-button';
import LogoutButton from './logout-button';
import { ThemeToggleButton } from '../../pages/_app';

const Navbar = props => {
  const { path } = props;

  const { data: session, status } = useSession();
  const loading = status === 'loading';

  const pages = [
    {
      href: '/grocery',
      name: 'Grocery'
    }
  ];

  return (
    <Box
      position="fixed"
      as="nav"
      width="100%"
      alignItems="center"
      justifyContent="center"
      sx={{
        backdropFilter: 'blur(10px)'
      }}
      zIndex={1}
      {...props}
    >
      <Container
        maxWidth="md"
        flexwrap="wrap"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2
        }}
      >
        <Box display="flex" mr={5}>
          <Logo />
        </Box>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          display={{ xs: 'none', md: 'flex' }}
          width={{ xs: 'none', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ xs: 4, md: 0 }}
        >
          {session && (
            <LinkItem href="/grocery" path={path}>
              <Typography textAlign="center">Grocery</Typography>
            </LinkItem>
          )}
        </Stack>

        <Box display="flex" alignItems="center">
          {!loading && !session && <LoginButton />}
          {session && <LogoutButton />}
          <ThemeToggleButton />

          <Box ml={2} display={{ sm: 'inline-block', md: 'none' }}>
            <NavMenu pages={pages} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx)
    }
  };
}

export default Navbar;
