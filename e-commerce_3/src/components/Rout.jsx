import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop';
import Cart from './Cart';

const Rout = ({shop, Filter, AllCategoriesProduct, addtocart, cart, setCart}) => {

  return (
    <>
        <Routes>
            <Route path='/' element={<Home addtocart={addtocart} />} />
            <Route path='/shop' element={<Shop shop={shop} Filter={Filter} AllCategoriesProduct={AllCategoriesProduct} addtocart={addtocart} />} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
    </>
  )
}

export default Rout