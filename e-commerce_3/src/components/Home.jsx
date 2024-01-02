import React from 'react';
import '../components/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <div className="home">
            <div className="top_banner">
                <div className="contant">
                    <h3>Silver Aluminium</h3>
                    <h2>Apple Watch</h2>
                    <p>30% off at your first odder</p>
                    <Link to={'/shop'} className='link'>Shop Now</Link>
                </div>
            </div>

            <div className="trending">
                <div className="container">
                    <div className="left-box">
                        <div className="header">
                            <div className="heading">
                                <h2>Trending Product</h2>
                            </div>
                            <div className="cate">
                                <h3>New</h3>
                                <h3>Featured</h3>
                                <h3>Top Selling</h3>
                            </div>
                        </div>

                        <div className="products">
                            <div className="container">
                                
                            </div>
                        </div>
                    </div>

                    <div className="right-box">

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home