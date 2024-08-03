import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {
    const [category,setCategory] = useState("All");
  return (
    <div className='mt-10'>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home