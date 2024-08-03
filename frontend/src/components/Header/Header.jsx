import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-custom bg-hero bg-cover bg-center flex items-end text-white rounded-xl relative overflow-hidden pb-16">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="text-left px-8 z-10 mb-12 mt-20 max-w-2xl relative top-8">
        <h1 className="text-4xl font-semibold mb-4 leading-tight animate-fadeIn">
          Order your favourite <br /> food here
        </h1>
        <p className="mb-6 text-lg leading-relaxed animate-fadeIn">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience.
        </p>
        <button className="bg-white text-orange-500 py-2 px-6 rounded-full border border-orange-500 hover:bg-orange-500 hover:text-white transition-all animate-fadeIn">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
