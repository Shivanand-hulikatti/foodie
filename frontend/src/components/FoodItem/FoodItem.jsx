import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);

  return (
    <div className='border rounded-lg p-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer'>
      <div className='mb-4 relative'>
        <img src={image} alt={name} className='rounded-lg w-full h-48 object-cover' />
        <div className='absolute bottom-2 right-2 flex items-center bg-white rounded-full p-1 shadow-md'>
          {!cartItems[id] ? (
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt="Add"
              className='h-8 w-8 cursor-pointer rounded-full'
            />
          ) : (
            <div className='flex items-center space-x-2'>
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt="Remove"
                className='h-8 w-8 cursor-pointer rounded-full'
              />
              <span className='text-lg font-semibold bg-gray-100 px-2 py-1 rounded-full'>
                {cartItems[id]}
              </span>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt="Add"
                className='h-8 w-8 cursor-pointer rounded-full'
              />
            </div>
          )}
        </div>
      </div>
      <div className='mb-2 flex justify-between items-center'>
        <p className='font-semibold text-xl text-gray-900'>{name}</p>
        <img src={assets.rating_starts} alt="Rating" className='h-6' />
      </div>
      <p className='text-gray-700 mb-4'>{description}</p>
      <p className='font-semibold text-lg text-orange-400'>${price}</p>
    </div>
  );
};

export default FoodItem;
