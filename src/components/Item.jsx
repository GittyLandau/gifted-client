// rrd imports
import { useNavigate, NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Item = ({ item, location }) => {
  // url
  const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(Number(item.cart));

  // remove item from cart
  const removeItem = async () => {
    const result = await axios.delete(`${URL}/cart/${item.id}`);
  };

  // submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    if (e.target.value === 'remove') {
      await removeItem();
      navigate(`/cart/?timestamp=${new Date().getTime()}`, {
        replace: true,
      });
      return;
    }
    try {
      const result = await axios.post(`${URL}/api/cart`, {
        id: item.id,
        quantity: Number(e.target.value ? e.target.value : quantity),
      });
      location === 'itemPage'
        ? navigate(`/?timestamp=${new Date().getTime()}`, {
            replace: true,
          })
        : navigate(`/cart/?timestamp=${new Date().getTime()}`, {
            replace: true,
          });
      return (
        <div className='toast toast-top toast-end'>
          <div className='alert alert-success'>
            <span>{item.title} was added to your cart</span>
          </div>
        </div>
      );
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className='flex space-x-10 text-[#6f7564]'>
      {/* left side of flex--img */}
      <img
        src={item.img}
        alt={item.title}
        className={`w-1/3 border-4 rounded-xl border-[#D76161] shadow-xl ${
          location === 'cart' && 'h-64 w-64'
        }`}
      />
      {/* right side of flex*/}
      <div className={`m-9  ${location === 'cart' && 'flex gap-10'}`}>
        <div className={`${location === 'cart' && 'flex-col w-96'}`}>
          <NavLink to={`/item/${item.id}`}>
            <h1
              className={`${
                location === 'cart' && 'font-normal text-xl'
              } text-3xl font-semibold`}
            >
              {item.title}
            </h1>
          </NavLink>
          {location === 'itemPage' && (
            <div className='mt-9'>{item.description}</div>
          )}
          <div className='mt-9'>${item.price}</div>
        </div>

        <form action='' className='' onSubmit={(e) => submitHandler(e)}>
          <label>
            <div className='label'>
              <span className='label-text-alt'>Quantity</span>
            </div>
            <select
              onChange={(e) => {
                setQuantity(e.target.value);
                location === 'cart' && submitHandler(e);
              }}
              value={quantity}
              name='quantity'
              id='quantity'
              className='select w-fit max-w-xs bg-inherit border-2 border-[#959a8b]'
            >
              <option>Select</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              {location === 'cart' && <option value='remove'>Remove</option>}
            </select>
          </label>
          {location === 'itemPage' && (
            <div className='mt-9'>
              <button
                type='submit'
                className='btn hover:bg-[#6f7564] hover:text-[#959a8b] text-[#c7cac1] bg-[#959a8b] shadow-xl border-none'
              >
                Add to Cart
              </button>
            </div>
          )}
        </form>
        {location === 'cart' && (
          <div className='text-[#436F70]'>${item.price * item.cart}</div>
        )}
      </div>
    </div>
  );
};
export default Item;
