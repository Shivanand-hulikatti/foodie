import React from 'react';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='flex flex-col items-center justify-center my-10 bg-gray-100 py-10 px-6 rounded-lg shadow-lg'>
      <p className='text-xl font-semibold text-gray-800 mb-6 text-center'>
        For a Better Experience, Download the <br /><span className='text-orange-500'>GrabIt App</span> 
      </p>
      <div className='flex space-x-4'>
        <a href="#" className='transition-transform transform hover:scale-105'>
          <img src={assets.play_store} alt="Download on Google Play" className='w-36 h-auto' />
        </a>
        <a href="#" className='transition-transform transform hover:scale-105'>
          <img src={assets.app_store} alt="Download on the App Store" className='w-36 h-auto' />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
