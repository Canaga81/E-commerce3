import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./components/Rout";
import Footer from "./components/Footer";
import HomeProduct from "./components/Home_Products";
import { useState } from "react";

function App() {
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
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
