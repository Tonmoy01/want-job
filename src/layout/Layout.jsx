import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className='flex flex-col justify-between w-screen h-screen'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
