import React, { useState } from "react";
import "../components/Shop.css";
import Shop_Left_Image from "../images/shop_left.avif";
import Shop_Top_Image from "../images/shop_top.webp";
import { FaHeart, FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Shop = ({ shop, Filter, AllCategoriesProduct, addtocart }) => {

  // Toggle Product Detail

  const [showDetail, setShowDetail] = useState(false);

  // Detail Page Data

  const [detail, setDetail] = useState([]);

  // (Eye) Showing Detail

  const detailpage = (product) => {
    const detailData = [{ product }];
    const productDetail = detailData[0]["product"];
    setDetail(productDetail);
    setShowDetail(true);
  };

  // (Close) Showing Detail

  const detailpageClose = () => {
    setShowDetail(false);
  };

  return (
    <>
      {showDetail ? (
        <>
          <div className="product_detail">
            <button className="close_btn" onClick={() => detailpageClose()}>
              <IoMdClose />
            </button>

            <div className="container">
              <div className="img_box">
                <img src={detail.image} alt="" />
              </div>
              <div className="info">
                <h4>{detail.cat}</h4>
                <h2>{detail.Name}</h2>
                <h3 className="detail_price">${detail.price}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis dicta, neque saepe ut recusandae perferendis dolore.
                  Quos quisquam reiciendis laborum perferendis ipsa ipsam autem.
                </p>
                <button onClick={() => addtocart(detail)} className="btn">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}

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
                            <li onClick={() => detailpage(curElm)}>
                              <FaEye />
                            </li>
                          </div>
                        </div>

                        <div className="detail">
                          <h3>{curElm.Name}</h3>
                          <p>${curElm.price}</p>
                          <button
                            onClick={() => addtocart(curElm)}
                            className="btn"
                          >
                            Add To Cart
                          </button>
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
