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
  console.log(import.meta.env);
  const data = await axios.get(`${URL}/api/items`);
  return { items: data.data.items };
};

const RootLayout = () => {
  return (
    <div>
      <header>
        <Nav />
        <div className='flex justify-center'>
          <Outlet />
        </div>
      </header>
    </div>
  );
};

export default RootLayout;
