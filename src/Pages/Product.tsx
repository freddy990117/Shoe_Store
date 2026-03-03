import { useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import { useCallback, useState } from "react";

const Product = () => {
  const productList = useProducts();
  // 讀取 Router 中的 id 值
  const { id } = useParams<{ id: string }>();
  // find id by clicked
  const correctProduct = productList.find((item) => item.id === Number(id));
  if (!productList) return <div>Product is delivering</div>;

  // right and left btn fn
  const [currentIndex, setCurrectIndex] = useState<number>(0);
  const rightBtn = useCallback(() => {
    setCurrectIndex((prev) => {
      return prev < productList.length - 1 ? prev + 1 : prev;
    });
  }, []);
  const leftBtn = useCallback(() => {
    setCurrectIndex((prev) => {
      return prev > 0 ? prev - 1 : 0;
    });
  }, []);

  const currentProduct = productList[currentIndex];
  return (
    <div className="product-container">
      <div className="product-gallery">
        <div className="product-image">
          <button className="left-btn" onClick={leftBtn}>
            {"<"}
          </button>
          <button className="right-btn" onClick={rightBtn}>
            {">"}
          </button>
          <img src={`${currentProduct.imageURL}`} alt="product-intro" />
          <div className="more-picture">
            <img src="/images/picture-3.png" alt="" />
            <img src="/images/picture-4.png" alt="" />
            <img src="/images/picture-5.png" alt="" />
          </div>
          {/* You can put more picture to click over here. */}
        </div>
        <div className="product-info">
          <div className="information">
            <h3>{`${currentProduct.shoes}`}</h3>
            <h3>{`${currentProduct.catalog}`}</h3>
            <h3>${`${currentProduct.price}`}</h3>
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
        <span>{`${currentProduct.description}`}</span>
      </div>
    </div>
  );
};

export default Product;
