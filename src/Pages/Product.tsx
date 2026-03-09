import { useProducts } from "../Context/ProductContext";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  // import props
  const productList = useProducts();
  // setup Router's id (用於判斷目前點擊到那邊)
  const { id } = useParams<{ id: string }>();
  // Find id
  const initalIndex = productList.findIndex((item) => item.id === Number(id));
  // 判斷 id
  const [currentIndex, setCurrectIndex] = useState<number>(
    initalIndex >= 0 ? initalIndex : 0,
  );
  // find id by clicked
  if (!productList) return <div>Product is delivering</div>;

  // right and left btn fn
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

  // 	TS 會從 productList 自動推斷型別，並會自動取得 id
  const currentProduct = productList[currentIndex];
  const morePicture = productList.map((item, index) => {
    return (
      <img
        src={`${item.imageURL}`}
        alt={`${item.title}`}
        key={item.id}
        className={`${index === currentIndex ? "active" : ""}`}
        onClick={() => {
          setCurrectIndex(index);
        }}
      />
    );
  });

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
          <img
            src={`${currentProduct.imageURL}`}
            alt={`${currentProduct.title}`}
          />
          <div className="more-picture">{morePicture}</div>
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
