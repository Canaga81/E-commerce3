import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop';

const Rout = ({shop, Filter, AllCategoriesProduct}) => {

  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop shop={shop} Filter={Filter} AllCategoriesProduct={AllCategoriesProduct} />} />
        </Routes>
    </>
  )
}

export default Rout