import React from "react";
import { MdLocalShipping } from "react-icons/md";
import "./nav.css";
import LogoImg from "../images/logo.webp";
import { FaSearchPlus } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch, searchproduct }) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <header className="header">
      <div className="top_header">
        <div className="icon">
          <MdLocalShipping />
        </div>
        <div className="info">
          <p>Free Shipping When Shopping upto $1000</p>
        </div>
      </div>

      <div className="mid_header">
        <div className="logo">
          <img src={LogoImg} />
        </div>
        <div className="search_box">
          <input type="text" value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
          <button onClick={searchproduct}>
            <FaSearchPlus />
          </button>
        </div>
        {isAuthenticated ? (
          // if user is login then Logout Button will shown and also user profile
          <div className="user">
            <div className="icon">
              <CiLogout />
            </div>
            <div className="btn">
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          // if user is not Login then Login Button will shown
          <div className="user">
            <div className="icon">
              <FiLogIn />
            </div>
            <div className="btn">
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
          </div>
        )}
      </div>

      <div className="last_header">
        <div className="user_profile">
          {/* User Profile Will Shown Were */}
          {isAuthenticated ? (
            <div className="Person-info">
              <div className="email_Image-person">
                <img src={user.picture} alt={user.name} />
              </div>
              <div className="info">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>
          ) : (
            <div className="Person-info no_login">
              <div className="Person-icon">
                <FaRegUser />
              </div>
              <div className="please-info">
                <p>Please Login 😊</p>
              </div>
            </div>
          )}
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/collection" className="link">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contack" className="link">
                  Contack
                </Link>
              </li>
            </ul>
          </div>
          <div className="offer">
            <p className="offer_text">flat 10% over all iphone</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
