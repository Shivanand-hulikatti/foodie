import React from 'react';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className="mt-10 px-6">
      <h1 className="text-3xl font-semibold mb-4">Explore Our Menu</h1>
      <p className="text-gray-600 mb-8">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="flex overflow-x-auto gap-6 scrollbar-hidden pb-4">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 p-2 w-40 min-w-[160px] flex flex-col items-center justify-center text-center cursor-pointer"
            onClick={() => setCategory(item.menu_name)}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-28 h-28 p-2 object-cover rounded-full transition-transform transform hover:scale-105 ${
                category === item.menu_name ? 'border-4 border-orange-500' : ''
              }`}
            />
            <p className="mt-2 text-lg font-medium text-gray-800">{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
