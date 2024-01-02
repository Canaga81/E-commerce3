import { useState } from "react";
import "../components/Home.css";
import { Link } from "react-router-dom";
import HomeProduct from "./Home_Products";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(HomeProduct);

  // Filter of trending Product

  const filtercate = (x) => {
    const filterproduct = HomeProduct.filter((curElm) => {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct);
  }

  // All Trending Product

  const allTrendingProduct = () => {
    setTrendingProduct(HomeProduct)
  }

  return (
    <>
      <div className="home">
        <div className="top_banner">
          <div className="contant">
            <h3>Silver Aluminium</h3>
            <h2>Apple Watch</h2>
            <p>30% off at your first odder</p>
            <Link to={"/shop"} className="link">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="trending">
          <div className="container">
            <div className="left-box">
              <div className="header">
                <div className="heading">
                  <h2 onClick={() => allTrendingProduct()}>Trending Product</h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filtercate('new')}>New</h3>
                  <h3 onClick={() => filtercate('featured')}>Featured</h3>
                  <h3 onClick={() => filtercate('top')}>Top Selling</h3>
                </div>
              </div>

              <div className="products">
                <div className="container">
                  {trendingProduct.map((curElm) => {
                    return (
                      <>
                        <div className="box">
                          <div className="img_box">
                            <img src={curElm.image} alt="" />
                            <div className="icon">
                              <div className="icon_box">
                                <FaEye />
                              </div>
                              <div className="icon_box">
                                <FaHeart />
                              </div>
                            </div>
                          </div>

                          <div className="info">
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <button className="btn">Add To Cart</button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="right-box">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
