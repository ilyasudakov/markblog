import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <div className="grid">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;