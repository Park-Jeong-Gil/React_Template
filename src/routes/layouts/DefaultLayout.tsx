import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main id='main'>
        <SideNav />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
