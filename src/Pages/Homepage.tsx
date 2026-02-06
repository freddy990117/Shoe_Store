import React from "react";

const Homepage = () => {
  return (
    <div>
      <div className="homepage-main">
        <div className="homepage-product">
          <div className="product-introduce">
            <h2>25% OFF</h2>
            <h3>Summer Sale</h3>
            <p>Discover our summer styles with discount</p>
            <button>Shop Now</button>
          </div>
          <div className="product-image">
            <img src="/public/images/picture-1.svg" alt="shoes picture" />
          </div>
        </div>
        <div className="homepage-more"></div>
      </div>
    </div>
  );
};

export default Homepage;
