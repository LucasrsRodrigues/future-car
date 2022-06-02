import { Fragment } from 'react';
import { Header } from '@components/Header';

import type { NextPage } from 'next';
import { Home } from '@components/Home';
import { About } from '@components/About';
import { Popular } from '@components/Popular';

import 'swiper/css';
import { Features } from '@components/Features';
import { Featured } from '@components/Featured';
import { Offer } from '@components/Offer';
import { Logos } from '@components/Logos';
import { Footer } from '@components/Footer';

const DefaultPage: NextPage = () => {
  return (
    <Fragment>
      <Header />

      <main>
        <Home />
        <About />
        <Popular />
        <Features />
        <Featured />
        <Offer />
        <Logos />
      </main>

      <Footer />
    </Fragment>
  )
}

export default DefaultPage;
