import React from "react";

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-gallery">
        <div className="product-image">
          <img src="" alt="product-intro" />
          <button>Left</button>
          <button>Right</button>
          {/* You can put more picture to click over here. */}
        </div>
        <div className="prodduct-info">
          <h3>shoe catalog</h3>
          <h4>shoe des</h4>
          <p>price</p>
          <div className="product-lan">{/* border div */}</div>
          <h5>Quanity</h5>
          <div className="product-number">
            <button>-</button>
            <span>{/* click button would be changed */}</span>
            <button>+</button>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="product-description">
        <h1>Description</h1>
        <div className="">{/* Border over here */}</div>
      </div>
    </div>
  );
};

export default Product;
