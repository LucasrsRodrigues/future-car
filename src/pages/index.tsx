import { Fragment } from 'react';
import { Header } from '@components/Header';

import type { NextPage } from 'next';
import { Home } from '@components/Home';

const DefaultPage: NextPage = () => {
  return (
    <Fragment>
      <Header />

      <main>
        <Home />
      </main>
    </Fragment>
  )
}

export default DefaultPage;
