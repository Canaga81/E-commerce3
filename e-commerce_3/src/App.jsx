import './App.css';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Rout from './components/Rout';
import Footer from './components/Footer';
import HomeProduct from './components/Home_Products';
import { useState } from 'react';

function App() {

  // Shop Products

  const [shop, setShop] = useState(HomeProduct);

  // Shop Category Filter

  const Filter = (x) => {
    const cateFilter = HomeProduct.filter((product) => {
      return product.cat === x;
    })

    setShop(cateFilter);
  }

  const AllCategoriesProduct = () => {
    setShop(HomeProduct)
  }

  return (
    
    <>

      <BrowserRouter>

        <Nav />
        <Rout shop={shop} Filter={Filter} AllCategoriesProduct={AllCategoriesProduct} />
        <Footer />

      </BrowserRouter>

    </>

  )

}

export default App;