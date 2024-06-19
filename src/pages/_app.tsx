import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import theme from '../theme/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
