import type { AppProps } from 'next/app';
import '@styles/global.scss';
import { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
