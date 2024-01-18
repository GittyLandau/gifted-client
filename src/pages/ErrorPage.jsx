// rrd imports
import { useNavigate } from 'react-router-dom';

// library imports
import { IoIosArrowRoundBack } from 'react-icons/io';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className='text-center'>
      <h1 className='text-6xl my-10'>OOPS!</h1>
      <div className='text-xl my-10'>Page not found</div>
      <button
        className='btn btn-primary'
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoIosArrowRoundBack size={20} />
        Back
      </button>
    </div>
  );
};

export default ErrorPage;
