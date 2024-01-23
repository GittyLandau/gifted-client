import { IoCartOutline } from 'react-icons/io5';
import { NavLink, useLoaderData } from 'react-router-dom';

const Nav = () => {
  let { items } = useLoaderData();
  const cart = items.filter((item) => {
    return Number(item.cart) > 0 && item;
  });
  return (
    <div className='navbar flex justify-between p-10 text-[#6f7564]'>
      <div className=''>
        <NavLink to={'/'} className='flex items-center ml-10'>
          <img src='/favicon.svg' alt='gifted logo' className='w-8 h-8' />
          <span className=' btn btn-ghost hover:bg-inherit text-2xl font-normal'>
            Gifted
          </span>
        </NavLink>
      </div>

      <div className=''>
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            <div className='indicator duration-1000'>
              <IoCartOutline className='w-6 h-8' />
              {cart.length > 0 && (
                <span className='badge badge-md indicator-item bg-[#EC7063] border-none text-white text-xs'>
                  {cart.reduce((acc, item) => acc + Number(item.cart), 0)}
                </span>
              )}
            </div>
          </div>
          {/* cart */}
          {cart && (
            <div
              tabIndex={0}
              className='mt-3 z-[1] bg-[#aeb2a6] card card-compact dropdown-content w-64 bg-inherit shadow'
            >
              <div className='card-body'>
                <span className='font-bold text-lg'>
                  {cart.reduce((acc, item) => acc + Number(item.cart), 0)} items
                </span>
                <ul>
                  {cart.map((item) => {
                    return (
                      <li key={item.id} className='flex gap-4 mb-4'>
                        <img
                          src={item.img}
                          alt={item.title}
                          className='h-10 w-10'
                        />
                        <div>
                          <div>
                            {item.title.slice(0, 10)}
                            {item.title.length > 10 && '...'}
                          </div>
                          <div>
                            <span className='text-[#436F70]'>
                              ${item.price}
                            </span>
                            <span className='opacity-50 text-xs'>
                              {' '}
                              quantity: {item.cart}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <span className='text-[#EC7063]'>
                  Subtotal: $
                  {cart
                    .reduce((acc, item) => acc + Number(item.price), 0)
                    .toFixed(2)}
                </span>
                <div className='card-actions'>
                  <NavLink to='/cart' className='w-full'>
                    <button className='btn hover:bg-[#6f7564] hover:text-[#959a8b] text-[#c7cac1] bg-[#959a8b] shadow-xl border-none w-full'>
                      View cart
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Nav;
