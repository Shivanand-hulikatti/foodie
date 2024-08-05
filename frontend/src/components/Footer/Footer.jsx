import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white py-10 mt-5'>
      <div className='container mx-auto px-6 md:px-12 flex flex-col items-center'>
        
        <div className='flex flex-wrap justify-center items-start w-full mb-8 ml-16'>
          
          {/* Logo and Description */}
          <div className='flex flex-col items-center text-center md:items-start md:text-left md:w-1/3 p-4'>
            <img src={assets.logo} alt="Logo" className='w-32 mb-4' />
            <p className='text-gray-400 mb-4 max-w-lg'>
              At GrabIt, we're committed to delivering the best dining experience with a diverse menu and exceptional service. Join us on a culinary journey that satisfies your cravings and delights your taste buds.
            </p>
            <div className='flex space-x-4'>
              <a href="#" className='transition-transform transform hover:scale-110'>
                <img src={assets.facebook_icon} alt="Facebook" className='w-6 h-6' />
              </a>
              <a href="#" className='transition-transform transform hover:scale-110'>
                <img src={assets.twitter_icon} alt="Twitter" className='w-6 h-6' />
              </a>
              <a href="#" className='transition-transform transform hover:scale-110'>
                <img src={assets.linkedin_icon} alt="LinkedIn" className='w-6 h-6' />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className='flex flex-col items-center text-center md:items-center md:text-left md:w-1/3 p-4'>
            <h2 className='text-xl font-semibold mb-4 pr-3'>Company</h2>
            <ul className='space-y-2 text-gray-400'>
              <li className='transition-colors hover:text-orange-400 cursor-pointer'>Home</li>
              <li className='transition-colors hover:text-orange-400 cursor-pointer'>About Us</li>
              <li className='transition-colors hover:text-orange-400 cursor-pointer'>Delivery</li>
              <li className='transition-colors hover:text-orange-400 cursor-pointer'>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col items-center text-center md:items-center md:text-left md:w-1/3 p-4'>
            <h2 className='text-xl font-semibold mb-4 pr-3'>Get in Touch</h2>
            <ul className='space-y-2 text-gray-400'>
              <li className='transition-colors hover:text-orange-400 cursor-pointer'>+91-6360556437</li>
              <li className='transition-colors hover:text-orange-400 cursor-pointer'>contact@grabIt.com</li>
            </ul>
          </div>
        </div>

        <hr className='w-full border-gray-700 mb-8' />
        <div className='text-center text-gray-400'>
          &copy; 2024 GrabIt.com - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
