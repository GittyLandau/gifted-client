// rrd imports
import { Outlet } from 'react-router-dom';
// components
import Nav from '../components/Nav';
// library imports
import axios from 'axios';

// URL
const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
// loader
export const rootLayoutLoader = async () => {
  const data = await axios.get(`${URL}/api/items`);
  return { items: data.data.items };
};

const RootLayout = () => {
  return (
    <div className='bg-fixed bg-center bg-cover'>
      <div className='bg-[#aeb2a6] rounded-3xl xl:m-20 md:m-2 min-h-screen min-w-screen overflow-hidden'>
        <header>
          <Nav />
        </header>
        <div className='flex justify-center'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
