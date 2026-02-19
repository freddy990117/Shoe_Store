import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <div className="homepage-main">
        <div className="homepage-product">
          <div className="product-introduce">
            <h2>25% OFF</h2>
            <h3>Summer Sale</h3>
            <p>Discover our summer styles with discount</p>
            <Link to={`/product`}>
              <button>Shop Now</button>
            </Link>
          </div>
          <div className="product-image">
            <img src="./images/picture-1.svg" alt="shoes picture" />
          </div>
        </div>
        <div className="homepage-more">
          <div className="more-product">
            <h2>Explore our latest drops</h2>
            <div className="product">
              <Link to={`/product`}>
                <div className="more-product">
                  <img src="/images/picture-2.png" alt="Nike Off-white" />
                  <h3>Off-White</h3>
                  <h4>Out Of Office "Ooo" sneakers</h4>
                  <p>$775</p>
                </div>
              </Link>
              <Link to={`/product`}>
                <div className="more-product">
                  <img src="/images/picture-3.png" alt="Nike shoes" />
                  <h3>Nike</h3>
                  <h4>Nike Air Force Premium</h4>
                  <p>$200</p>
                </div>
              </Link>
              <Link to={`/product`}>
                <div className="more-product">
                  <img src="/images/picture-4.png" alt="Nike shoes" />
                  <h3>Nike</h3>
                  <h4>Nike Air Force Premium</h4>
                  <p>$98.23</p>
                </div>
              </Link>
              <Link to={`/product`}>
                <div className="more-product">
                  <img src="/images/picture-5.png" alt="adidas shoes" />
                  <h3>adidas</h3>
                  <h4>DAILY 3.0 SHOES</h4>
                  <p>$98.99</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
