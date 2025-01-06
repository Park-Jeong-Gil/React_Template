import { Outlet } from 'react-router-dom';
import SideNav from '../../layouts/SideNav';

export default function Sub1() {
  return (
    <>
      <SideNav />
      <section id='container'>
        <h2>Sub-1 Page content</h2>
        <Outlet />
      </section>
    </>
  );
}
