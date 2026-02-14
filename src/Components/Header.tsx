import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="/public/icons/icon.png" alt="logo image" />
        <h1>SUN CO.</h1>
      </div>
      <div className="header-cart">
        <div className="header-cart-info">
          <img src="/public/icons/shope-bag.png" alt="shop bag image" />
          <button>View Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
