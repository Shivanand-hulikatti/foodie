import React, { useState } from 'react'
import {assets} from '../../assets/assets'
const NavBar = () => {
  const [menu,setMenu] = useState("Home");

  return (
    <div>
      <div className='flex justify-between p-20x items-center'>
        <div className='w-150px'>
          <img src={assets.logo} alt="" />
        </div>
        <div>
          <ul className='flex gap-20 list-none text-gray-700 text-base font-sans'>
            {["Home", "Menu", "App", "Contact-us"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${menu === item ? 'border-b-2 border-slate-700' : ''}`}
                onClick={() => setMenu(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex gap-10 items-center'>
          <img src={assets.search_icon} alt="" />
          <div className='relative'>
            <img src={assets.basket_icon} alt="" />
            <div className='absolute top-[-4px] right-[-2px] w-2 h-2 bg-red-500 rounded-full'></div>
          </div>
          <button className='bg-transparent text-sm border-orange-500 border px-4 py-2 cursor-pointer rounded-full hover:bg-orange-200 transition-all'>SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar