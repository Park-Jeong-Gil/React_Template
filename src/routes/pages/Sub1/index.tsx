import { Outlet } from 'react-router-dom';

export default function Sub1() {
  return (
    <>
      <h2>Sub-1 Page</h2>
      <Outlet />
    </>
  );
}
