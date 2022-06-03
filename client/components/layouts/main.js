import Head from 'next/head';
import { Box, Container } from '@mui/material';

import Footer from '../footer';
import { Navbar } from '../navbar';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Stephen LH Chan" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Price Checker</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxWidth="md" sx={{ pt: 14 }}>
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
