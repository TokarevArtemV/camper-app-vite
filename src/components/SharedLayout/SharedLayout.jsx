import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Header, Loader } from '../';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
