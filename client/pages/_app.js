import { createContext, useState, useMemo, useContext } from 'react';
import { SessionProvider } from 'next-auth/react';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useTheme
} from '@mui/material';
import { IconButton } from '@mui/material';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import Layout from '../components/layouts/main';
import getDesignTokens from '../components/theme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeToggleButton = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <IconButton onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

const App = ({ Component, pageProps: { session, ...pageProps }, router }) => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <SessionProvider session={session}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout router={router}>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </SessionProvider>
  );
};

export default App;
