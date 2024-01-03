import React from 'react';
import '../components/Shop.css';
import Shop_Left_Image from '../images/shop_left.avif';
import Shop_Top_Image from '../images/shop_top.webp';

const Shop = ({shop}) => {
  return (
    <>
        <div className='shop'>
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
                                <li># tv</li>
                                <li># laptop</li>
                                <li># watch</li>
                                <li># speaker</li>
                                <li># electronics</li>
                                <li># headphone</li>
                                <li># phone</li>
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
                        <div className="product_container">
                            {
                                shop.map((curElm, idx) => {
                                    return (
                                        <>
                                            <div className="box" key={idx}>
                                                <div className="img_box">
                                                    <img src={curElm.image} alt="" />
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shop