import NavBar from './components/NavBar/NavBar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
function App() {

  return (
    <div className='w-4/5 m-auto mt-10'>
      <NavBar />
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/cart' element={<Cart />} />
        <Route path = '/order' element={<PlaceOrder />} />
      </Routes>
    </div>
  )
}

export default App
