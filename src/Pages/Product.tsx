import React from "react";

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-gallery">
        <div className="product-image">
          <button className="left-btn">{"<"}</button>
          <button className="right-btn">{">"}</button>
          <img src="/images/picture-2.png" alt="product-intro" />
          <div className="more-picture">
            <img src="/images/picture-3.png" alt="" />
            <img src="/images/picture-4.png" alt="" />
            <img src="/images/picture-5.png" alt="" />
          </div>
          {/* You can put more picture to click over here. */}
        </div>
        <div className="product-info">
          <div className="information">
            <h3>shoe catalog</h3>
            <h4>shoe descri</h4>
            <p>price</p>
          </div>
          <div className="decide">
            <h5>Quanity</h5>
            <div className="product-number">
              <button>-</button>
              <span>1{/* click button would be changed */}</span>
              <button>+</button>
            </div>
            <div className="cart-btn">
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-description">
        <h1>Description</h1>
        <div className="product-lan"></div>
        <span>
          1.
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore atque
          nisi deleniti dolorum quasi nulla, cupiditate quas magni. Facilis
          mollitia quibusdam nemo doloribus provident blanditiis optio
          laudantium, quod corrupti sint? <br />
          <br />
          2.
          <br />
          Lorem ipsum dolor sit, amet cnsectetur adipisicing elit. Dolore atque
          nisi deleniti dolorum quasi nulla, cupiditate quas magni. Facilis
          mollitia quibusdam nemo doloribus provident blanditiis optio
          laudantium, quod corrupti sint? 3.Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. <br />
          <br />
          3.
          <br />
          Dolore atque nisi deleniti dolorum quasi nulla, cupiditate quas magni.
          Facilis mollitia quibusdam nemo doloribus provident blanditiis optio
          laudantium, quod corrupti sint?
        </span>
      </div>
    </div>
  );
};

export default Product;
