import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='mt-5'>
        <h1 className='font-semibold'>Explore Our Menu</h1>
        <p>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisty your cravings and your dining experience,one delicious meal at a time.</p>
        <div>
            {menu_list.map((item,index)=>{
                return (
                    <div key={index}>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu