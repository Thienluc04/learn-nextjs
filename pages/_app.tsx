import '../styles/globals.scss';
import { AppPropsWithLayout } from '@/models';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache, theme } from '@/utils';
import { SWRConfig } from 'swr/_internal';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import EmptyLayout from '@/components/layout/EmptyLayout';
import axiosClient from '@/api-client/axios-client';
import '../styles/prism.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
