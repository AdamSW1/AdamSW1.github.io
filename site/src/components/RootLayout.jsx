import { Outlet } from 'react-router-dom';
import { Nav } from './nav'
export function RootLayout() {
  return (
    <>
      <Nav/>
      <Outlet />
    </>
  );
}