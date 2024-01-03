import { useEffect, useState } from "react";
import "../components/Home.css";
import { Link } from "react-router-dom";
import HomeProduct from "./Home_Products";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import T1_Avif_Image from "../images/T1.avif";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Multi_Banner_1_Image_avif from "../images/Multi-Banner-1.avif";
import Multi_Banner_2_Image_avif from "../images/Multi-Banner-2.avif";
import Multi_Banner_3_Image_webp from "../images/Multi-Banner-3.webp";
import Multi_Banner_4_Image_avif from "../images/Multi-Banner-4.avif";
import Multi_Banner_5_Image_webp from "../images/Multi-Banner-5.webp";

const Home = ({addtocart}) => {
  // Product Category

  const [newProduct, setNewProduct] = useState([]);
  const [featureProduct, setFeatureProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);

  // Trending Product

  const [trendingProduct, setTrendingProduct] = useState(HomeProduct);

  // Filter of trending Product

  const filtercate = (x) => {
    const filterproduct = HomeProduct.filter((curElm) => {
      return curElm.type === x;
    });
    setTrendingProduct(filterproduct);
  };

  // All Trending Product

  const allTrendingProduct = () => {
    setTrendingProduct(HomeProduct);
  };

  // Product Type

  useEffect(() => {
    productcategory();
  }, []);

  const productcategory = () => {

    const newcategory = HomeProduct.filter((x) => {
      return x.type === "new";
    });
    setNewProduct(newcategory);

    const featuredcategory = HomeProduct.filter((x) => {
      return x.type === "featured";
    });
    setFeatureProduct(featuredcategory);

    const topcategory = HomeProduct.filter((x) => {
      return x.type === "top";
    });
    setTopProduct(topcategory);

  };

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
                  <h3 onClick={() => filtercate("new")}>New</h3>
                  <h3 onClick={() => filtercate("featured")}>Featured</h3>
                  <h3 onClick={() => filtercate("top")}>Top Selling</h3>
                </div>
              </div>

              <div className="products">
                <div className="container">
                  {trendingProduct.map((curElm, idx) => {
                    return (
                      <>
                        <div className="box" key={idx}>
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
                            <button onClick={() => addtocart(curElm)} className="btn">Add To Cart</button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <button className="show_btn">Show More</button>
              </div>
            </div>

            <div className="right-box">
              <div className="right_container">
                <div className="testimonial">
                  <div className="head">
                    <h3>Our Testimonial</h3>
                  </div>
                  <div className="detail">
                    <div className="img_box">
                      <img src={T1_Avif_Image} alt="testimonial" />
                    </div>
                    <div className="info">
                      <h3>Stephan Robot</h3>
                      <h4>Web Designer</h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Odio explicabo temporibus recusandae totam commodi
                        soluta molestias laboriosam. Voluptate.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="newsletter">
                  <div className="head">
                    <h3>Newsletter</h3>
                  </div>
                  <div className="form">
                    <p>join our malling list</p>
                    <input
                      type="email"
                      placeholder="E-mail"
                      autoComplete="off"
                    />
                    <button>Subscribe</button>
                    <div className="icon_box">
                      <div className="icon">
                        <FaFacebookF />
                      </div>
                      <div className="icon">
                        <FaTwitter />
                      </div>
                      <div className="icon">
                        <FaInstagram />
                      </div>
                      <div className="icon">
                        <FaYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banners">
          <div className="container">
            <div className="left_box">
              <div className="box">
                <img src={Multi_Banner_1_Image_avif} alt="" />
              </div>
              <div className="box">
                <img src={Multi_Banner_2_Image_avif} alt="" />
              </div>
            </div>

            <div className="right_box">
              <div className="top">
                <img src={Multi_Banner_3_Image_webp} alt="" />
                <img src={Multi_Banner_4_Image_avif} alt="" />
              </div>

              <div className="bottom">
                <img src={Multi_Banner_5_Image_webp} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="product_type">
          <div className="container">
            <div className="box">
              <div className="header">
                <h2>New Product</h2>
              </div>

              {newProduct.map((curElm, idx) => {
                return (
                  <>
                    <div className="productbox" key={idx}>
                      <div className="img-box">
                        <img src={curElm.image} alt="" />
                      </div>

                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>${curElm.price}</p>
                        <div className="icon">
                          <button><FaEye /></button>
                          <button><FaHeart /></button>
                          <button><FaCartPlus /></button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Top Product</h2>
              </div>

              {topProduct.map((curElm, idx) => {
                return (
                  <>
                    <div className="productbox" key={idx}>
                      <div className="img-box">
                        <img src={curElm.image} alt="" />
                      </div>

                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>${curElm.price}</p>
                        <div className="icon">
                          <button><FaEye /></button>
                          <button><FaHeart /></button>
                          <button><FaCartPlus /></button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Featured Product</h2>
              </div>

              {featureProduct.map((curElm, idx) => {
                return (
                  <>
                    <div className="productbox" key={idx}>
                      <div className="img-box">
                        <img src={curElm.image} alt="" />
                      </div>

                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>${curElm.price}</p>
                        <div className="icon">
                          <button><FaEye /></button>
                          <button><FaHeart /></button>
                          <button><FaCartPlus /></button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
