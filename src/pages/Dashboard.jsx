import ItemCard from '../components/ItemCard';
import { useLoaderData } from 'react-router-dom';
const Dashboard = () => {
  const { items } = useLoaderData();
  const colors = ['#FCEE1C', '#0A8292', '#D76161', '#F287B5', '#64BE7E'];
  return (
    <div className='grid grid-flow-row grid-cols-3 gap-8 p-20'>
      {items.map((item, index) => {
        let colorIndex = index % colors.length;
        return (
          <ItemCard
            type='dashboard'
            key={item.id}
            color={colors[colorIndex]}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
