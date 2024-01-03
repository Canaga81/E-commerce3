import React from "react";
import "../components/Footer.css";
import {
  FaPiggyBank,
  FaShippingFast,
  FaHeadphones,
  FaWallet,
} from "react-icons/fa";
import FooterLogo from "../images/logo.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left-box">
          <div className="box">
            <div className="icon_box">
              <FaPiggyBank />
            </div>
            <div className="detail">
              <h3>Great Saving</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon_box">
              <FaShippingFast />
            </div>
            <div className="detail">
              <h3>Free Delivery</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon_box">
              <FaHeadphones />
            </div>
            <div className="detail">
              <h3>24/7 Support</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon_box">
              <FaWallet />
            </div>
            <div className="detail">
              <h3>Money Back</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        <div className="right_box">
          <div className="header">
            <img src={FooterLogo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem similique eaque itaque eos error vero vel ducimus
              asperiores?
            </p>
          </div>

          <div className="bottom">
            <div className="box">
                <h3>Your Account</h3>
                <ul>
                    <li>About Us</li>
                    <li>Account</li>
                    <li>Payment</li>
                    <li>Sales</li>
                </ul>
            </div>
            <div className="box">
                <h3>Products</h3>
                <ul>
                    <li>Delivery</li>
                    <li>Track Oder</li>
                    <li>New Product</li>
                    <li>Old Product</li>
                </ul>
            </div>
            <div className="box">
                <h3>Contact Us</h3>
                <ul>
                    <li>400$, Silver Business PointAzerbaijan</li>
                    <li>+(012) 9999999</li>
                    <li>info@gmail.com</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
