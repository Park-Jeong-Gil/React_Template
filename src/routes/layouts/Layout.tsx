import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

export default function DefaultLayout() {
  return (
    <>
      <Meta
        title='React App'
        description='React App with React Router, React Helmet Async, and React Query'
        keywords='React, React Router, React Helmet Async, React Query'
        url='https://react-app.com'
      />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
