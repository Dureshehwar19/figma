import { AppProps } from 'next/app'; // Import AppProps for proper typing of Component and pageProps
import Head from 'next/head';
import '../styles/index.css'; // Global styles
import Layout from '@/Components/Layout/Layout'; // Layout component
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { store } from '../services/redux/store/store'; // Assuming this is your Redux store

// TypeScript typed MyApp component
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Hecto Commerce</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ThemeProvider defaultTheme='light' attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
