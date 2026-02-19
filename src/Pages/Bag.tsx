import React from "react";

const Bag = () => {
  return (
    <div className="bag-container">
      <div className="shoe-bag">
        <h1>Your Bag</h1>
        <div className="shoe-info">
          <div className="shoe-img">
            <img src="/images/picture-4.png" alt="Nike shoes" />
          </div>
          <div className="shoe-des">
            <h3>Nike</h3>
            <h4>Nike Air Force Premium</h4>
            <div className="shoe-decide">
              {/* this div would be rename ! */}
            </div>
          </div>
          <div className="shoe price">
            <p>$98.23</p>
          </div>
        </div>
      </div>
      <div className="bag-summary"></div>
    </div>
  );
};

export default Bag;
