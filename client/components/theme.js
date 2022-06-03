import { grey } from '@mui/material/colors';

const getDesignTokens = mode => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          background: {
            default: '#f0e7db'
          },
          text: {
            primary: grey[900],
            secondary: grey[800]
          }
        }
      : {
          // palette values for dark mode
          background: {
            default: '#202023'
          },
          text: {}
        })
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
        color: 'inherit'
      }
    }
  }
});

export default getDesignTokens;
