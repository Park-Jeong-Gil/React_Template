import { Outlet } from 'react-router-dom';
import SideNav from '../../layouts/SideNav';

export default function Sub2() {
  return (
    <>
      <SideNav />
      <section id='container'>
        <h2>Sub-2 Page</h2>
        <Outlet />
      </section>
    </>
  );
}
