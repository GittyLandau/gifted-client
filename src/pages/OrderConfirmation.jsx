// library imports
import { BsEnvelopeCheck } from 'react-icons/bs';

// rrd imports
import { NavLink } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className='w-full text-center flex justify-center gap-20 items-center text-[#6f7564]'>
      <BsEnvelopeCheck color='#0A8292' size={300} />

      <div className=''>
        <h1 className='text-3xl font-bold'>Thank you for shopping with us.</h1>
        <div className='text-xl mt-8'>Your order has been received.</div>
        <div className='text-md mt-8'>
          We will reach out to you shortly to complete the payment.
        </div>
        <NavLink to={'/'}>
          <button className='btn hover:bg-[#6f7564] hover:text-[#959a8b] text-[#c7cac1] bg-[#959a8b] shadow-xl border-none mt-8'>
            Continue shopping
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default OrderConfirmation;
