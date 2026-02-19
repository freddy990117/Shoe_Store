import React from "react";

const Bag = () => {
  return (
    <div className="bag-container">
      <div className="shoe-bag">
        <h1>Your Bag</h1>
        <div className="shoe-decide">
          <div className="shoe-info">
            <div className="shoe-img">
              <img src="/images/picture-4.png" alt="Nike shoes" />
            </div>
            <div className="shoe-des">
              <div className="shoe-catalog">
                <h3>Nike</h3>
                <h4>Nike Air Force Premium</h4>
              </div>
              <div className="shoe-btn">
                <div className="shoe-num">
                  <button>-</button>
                  <span>1{/* click button would be changed */}</span>
                  <button>+</button>
                </div>
                <button className="remove-btn">Remove</button>
              </div>
            </div>
            <div className="shoe-price">
              <p>$98.23</p>
            </div>
          </div>
          <div className="shoe-lan" />
        </div>
        <div className="shoe-decide">
          <div className="shoe-info">
            <div className="shoe-img">
              <img src="/images/picture-4.png" alt="Nike shoes" />
            </div>
            <div className="shoe-des">
              <div className="shoe-catalog">
                <h3>Nike</h3>
                <h4>Nike Air Force Premium</h4>
              </div>
              <div className="shoe-btn">
                <div className="shoe-num">
                  <button>-</button>
                  <span>1{/* click button would be changed */}</span>
                  <button>+</button>
                </div>
                <button className="remove-btn">Remove</button>
              </div>
            </div>
            <div className="shoe-price">
              <p>$98.23</p>
            </div>
          </div>
          <div className="shoe-lan" />
        </div>
      </div>
      <div className="bag-summary">
        <div className="bag-summary-info">
          <h1>Summary</h1>
          <div className="bag-summary-detail Subtotal">
            <h3>Subtotal</h3>
            <span>$90.00</span>
          </div>
          <div className="bag-summary-detail Shipping">
            <h3>Shipping and delivery</h3>
            <span>$20.00</span>
          </div>
          <div className="bag-summary-detail Tax">
            <h3>Tax</h3>
            <span>$6.00</span>
          </div>
          <div className="bag-summary-detail Discount">
            <h3>Discount</h3>
            <span>-$6.00</span>
          </div>
        </div>
        <div className="bag-summary-lan"></div>
        <div className="bag-summary-total">
          <div className="total-detail">
            <h2>Total</h2>
            <span>$164.46</span>
          </div>
          <button className="checkout">Checkout →</button>
        </div>
      </div>
    </div>
  );
};

export default Bag;
