// rrd imports
import { useNavigate, useRouteError } from 'react-router-dom';

// library imports
import { IoIosArrowRoundBack } from 'react-icons/io';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);
  return (
    <div className='text-center'>
      <h1 className='text-6xl my-10'>OOPS!</h1>
      <div className='text-xl my-10'>{}</div>
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
