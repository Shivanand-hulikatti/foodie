import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='mt-8 px-4'>
      <h2 className='font-semibold text-gray-900 font-sans text-4xl text-center mb-8'>Top Dishes Near You</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {food_list.map((item, index) => {
          if(category==="ALL"|| category === item.category)
          {
            return <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />}
      })}
      </div>
    </div>
  );
};

export default FoodDisplay;
