// rrd imports
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// library imports
import axios from 'axios';

// delete cart

// url
const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
const deleteCart = async () => {
  const result = await axios.delete(`${URL}/cart`);
};
const Checkout = ({ cart }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', number: '' });
  const submitHandler = async (e) => {
    if (userInfo.name || userInfo.email || userInfo.number) {
      try {
        const result = await axios.post(`${URL}/send-email`, {
          subject: 'Order placed',
          text: formatText(),
        });
        deleteCart();
        navigate(`/order-confirmation/?timestamp=${new Date().getTime()}`, {
          replace: true,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
    }
  };
  const formatText = () => {
    let text = '';
    const line =
      '---------------------------------------------------------------------';
    const starLine =
      '**********************************************************************************************';
    text += `Order Date:\t${new Date()}\n${starLine}\n`;
    text += `Customer Information:\nName:\t${userInfo.name}\nEmail:\t${userInfo.email}\nNumber:\t${userInfo.number}\n${starLine}\n`;
    text += `Total Products:\t${cart.length}\n`;
    cart.map((item, index) => {
      text += `${line}\nItem: ${index + 1}\nProduct:\t${
        item.title
      }\nQuantity:\t${item.cart}\nUnit Price:\t$${item.price}\n`;
    });
    text += `${starLine}\nOrder Total:\t$${cart
      .reduce((acc, item) => Number(item.price) + acc, 0)
      .toFixed(2)}\n`;
    return text;
  };
  return (
    <div className='text-[#6f7564]'>
      {/* alert */}
      {error && (
        <div role='alert' className='alert alert-error m-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>Please provide contact details.</span>
        </div>
      )}
      {/* account summary */}
      <div className='border border-[#0A8292] w-full p-20 shadow rounded-xl flex flex-col gap-2 h-fit m-4'>
        <h1 className='font-semibold text-3xl'>Order Summary</h1>{' '}
        <span className='w-full border border-[1px] border-[#a2a49c] my-6'></span>
        <div className='flex justify-between'>
          <span>Subtotal</span>
          <span>
            $
            {cart
              .reduce((acc, item) => Number(item.price * item.cart) + acc, 0)
              .toFixed(2)}
          </span>
        </div>
        <div className='flex justify-between'>
          <span>Shipping</span>
          <span>$0</span>
        </div>
        <div className='flex justify-between'>
          <span>Tax</span>
          <span>$0</span>
        </div>
        <span className='w-full border border-[1px] border-[#a2a49c] my-6'></span>
        <div className='flex justify-between'>
          <span className='font-bold'>ORDER TOTAL</span>
          <span className='text-[#436F70]'>
            $
            {cart
              .reduce((acc, item) => Number(item.price * item.cart) + acc, 0)
              .toFixed(2)}
          </span>
        </div>
        {/* account */}
      </div>
      <div className='border border-[#F287B5] w-full p-20  shadow rounded-xl flex flex-col gap-2 h-fit m-4'>
        <h1 className='font-semibold text-3xl'>Account</h1>{' '}
        <div>How can we reach you?</div>
        <span className='w-full border border-[1px] border-[#a2a49c] my-6'></span>
        <div className='flex justify-between'>
          <label className='font-bold' htmlFor='name'>
            Name
          </label>
          <input
            value={userInfo.name}
            onChange={(e) => {
              setUserInfo({ ...userInfo, name: e.target.value });
              setError(false);
            }}
            type='text'
            className='rounded-md p-1 text-xs bg-inherit border-2 border-[#959a8b] outline-none'
            id='name'
            name='name'
          />
        </div>
        <div className='flex justify-between'>
          <label className='font-bold' htmlFor='email'>
            Email
          </label>
          <input
            value={userInfo.email}
            onChange={(e) => {
              setUserInfo({ ...userInfo, email: e.target.value });
              setError(false);
            }}
            type='email'
            className='rounded-md p-1 text-xs bg-inherit border-2 border-[#959a8b] outline-none'
            id='name'
            name='name'
          />
        </div>
        <div className='flex justify-between'>
          <label className='font-bold' htmlFor='number'>
            Phone #
          </label>
          <input
            value={userInfo.number}
            onChange={(e) => {
              setUserInfo({ ...userInfo, number: e.target.value });
              setError(false);
            }}
            type='text'
            className='rounded-md p-1 text-xs bg-inherit border-2 border-[#959a8b] outline-none'
            id='name'
            name='name'
          />
        </div>
      </div>
      <button
        className='text-md btn hover:bg-[#6f7564] hover:text-[#959a8b] text-[#c7cac1] bg-[#959a8b] shadow-xl border-none w-full m-4'
        type='submit'
        onClick={(e) => submitHandler(e)}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
