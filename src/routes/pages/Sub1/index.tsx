import { Outlet } from 'react-router-dom';
import SideNav from '../../layouts/LnbMenu';

export default function Sub1() {
  return (
    <>
      <SideNav />
      <section id='container'>
        <h2>Sub-1 Page</h2>
        <Outlet />
      </section>
    </>
  );
}
