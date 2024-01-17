// rrd imports
import { Outlet } from 'react-router-dom';
// components
import Nav from '../components/Nav';
// library imports
import axios from 'axios';

// url
const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

// loader
export const rootLayoutLoader = async () => {
  const data = await axios.get(`${API_BASE_URL}/api/items`);
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
