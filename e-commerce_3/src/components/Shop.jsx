import React from "react";
import "../components/Shop.css";
import Shop_Left_Image from "../images/shop_left.avif";
import Shop_Top_Image from "../images/shop_top.webp";
import { FaHeart, FaEye } from "react-icons/fa";

const Shop = ({ shop, Filter, AllCategoriesProduct }) => {
  return (
    <>
      <div className="shop">
        <h2># Shop</h2>
        <p>Home . Shop</p>
        <div className="container">
          <div className="left_box">
            <div className="category">
              <div className="header">
                <h3>All Categories</h3>
              </div>

              <div className="box">
                <ul>
                  <li onClick={() => AllCategoriesProduct()}># All</li>
                  <li onClick={() => Filter("tv")}># tv</li>
                  <li onClick={() => Filter("laptop")}># laptop</li>
                  <li onClick={() => Filter("watch")}># watch</li>
                  <li onClick={() => Filter("speaker")}># speaker</li>
                  <li onClick={() => Filter("electronics")}># electronics</li>
                  <li onClick={() => Filter("headphone")}># headphone</li>
                  <li onClick={() => Filter("phone")}># phone</li>
                </ul>
              </div>
            </div>

            <div className="banner">
              <div className="img_box">
                <img src={Shop_Left_Image} alt="" />
              </div>
            </div>
          </div>

          <div className="right_box">
            <div className="banner">
              <div className="img_box">
                <img src={Shop_Top_Image} alt="" />
              </div>
            </div>

            <div className="product_box">
              <h2>Shop Product</h2>
              <div className="product_container">
                {shop.map((curElm, idx) => {
                  return (
                    <>
                      <div className="box" key={idx}>
                        <div className="img_box">
                          <img src={curElm.image} alt="" />
                          <div className="icon">
                            <li>
                              <FaHeart />
                            </li>
                            <li>
                              <FaEye />
                            </li>
                          </div>
                        </div>

                        <div className="detail">
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
        </div>
      </div>
    </>
  );
};

export default Shop;
