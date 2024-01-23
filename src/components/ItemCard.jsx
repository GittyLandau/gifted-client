// rrd imports
import { NavLink } from 'react-router-dom';
const ItemCard = ({ item, color }) => {
  console.log(color);
  return (
    <div className={`card w-64 shadow-xl text-[#6f7564]`}>
      <figure
        className={`w-64 h-64 rounded-xl`}
        style={{ border: `5px solid ${color}` }}
      >
        <img src={item.img} alt='Shoes' className='w-full h-full' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {item.title.slice(0, 30)}
          {item.title.length > 30 && '...'}
        </h2>
        <p className='text-xs'>
          {item.description.slice(0, 60)}
          {item.description.length > 60 && '...'}
        </p>
        <div className='card-actions justify-center '>
          <NavLink to={`/item/${item.id}`}>
            <button className='btn hover:bg-[#6f7564] hover:text-[#959a8b] text-[#c7cac1] bg-[#959a8b] shadow-xl border-none'>
              View Item
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
