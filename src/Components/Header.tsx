import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="/icons/icon.png" alt="logo image" />
        <h1>SUN CO.</h1>
      </div>
      <div className="header-cart">
        <div className="header-cart-info">
          <img src="/icons/shope-bag.png" alt="shop bag image" />
          <Link to={`/bag`}>
            <button>View Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
