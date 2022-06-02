import { Fragment } from 'react';
import { Header } from '@components/Header';

import type { NextPage } from 'next';
import { Home } from '@components/Home';
import { About } from '@components/About';
import { Popular } from '@components/Popular';

import 'swiper/css';
import { Features } from '@components/Features';

const DefaultPage: NextPage = () => {
  return (
    <Fragment>
      <Header />

      <main>
        <Home />
        <About />
        <Popular />
        <Features />
      </main>
    </Fragment>
  )
}

export default DefaultPage;
