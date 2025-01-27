import { Outlet } from 'react-router-dom';
import { Nav } from './nav'
import { ScrollToTopButton } from './ScrollToTop';

export function RootLayout() {
  return (
    <>
      <Nav/>
      <ScrollToTopButton />
      <Outlet />
    </>
  );
}