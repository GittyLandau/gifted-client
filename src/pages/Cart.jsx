// rrd imports
import { useLoaderData } from 'react-router-dom';

// components
import Checkout from '../components/Checkout';
import Item from '../components/Item';

// library imports
import { PiBasketThin } from 'react-icons/pi';

const Cart = () => {
  let { items } = useLoaderData();
  const cart = items.filter((item) => item.cart > 0);
  return (
    <div className='w-full m-20'>
      {cart.length > 0 ? (
        <div className='flex justify-between'>
          <div>
            <h1 className='text-3xl mb-20 text-[#6f7564]'>Shopping Cart</h1>
            <div>
              <table className=''>
                <tbody>
                  {cart.map((item) => {
                    return (
                      <tr key={item.id} className='flex gap-8 mb-12'>
                        <td>
                          <Item location='cart' item={item} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <Checkout cart={cart} />
        </div>
      ) : (
        <div className='flex flex-col items-center text-[#6f7564]'>
          <PiBasketThin size={300} className='text-[#D76161]' />{' '}
          <h1 className='text-xl'>No items in cart</h1>
        </div>
      )}
    </div>
  );
};
export default Cart;
