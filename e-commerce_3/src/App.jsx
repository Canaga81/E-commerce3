import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./components/Rout";
import Footer from "./components/Footer";
import HomeProduct from "./components/Home_Products";
import { useState } from "react";

function App() {

  // Add To Cart

  const [cart, setCart] = useState([]);

  // Shop Search Filter UseState

  const [search, setSearch] = useState("");

  // Shop Products

  const [shop, setShop] = useState(HomeProduct);

  // Shop Category Filter

  const Filter = (x) => {
    const cateFilter = HomeProduct.filter((product) => {
      return product.cat === x;
    });

    setShop(cateFilter);
  };

  const AllCategoriesProduct = () => {
    setShop(HomeProduct);
  };

  // Shop Search Filter

  const searchlength = (search || []).length === 0;

  const searchproduct = () => {
    if (searchlength) {
      alert("Please Search Something");
      setShop(HomeProduct);
    } else {
      const searchFilter = HomeProduct.filter((x) => {
        return x.cat === search;
      });

      setShop(searchFilter);
    }
  };

  // Add to Cart

  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("This product is already added in cart !");
    } 
    else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added To Cart !")
    }
  };

  return (
    <>
      <BrowserRouter>
        <Nav
          search={search}
          setSearch={setSearch}
          searchproduct={searchproduct}
        />
        <Rout
          shop={shop}
          Filter={Filter}
          AllCategoriesProduct={AllCategoriesProduct}
          addtocart={addtocart}
          cart={cart}
          setCart={setCart}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;