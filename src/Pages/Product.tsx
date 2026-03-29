import { useProducts } from "../Context/ProductContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";
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
  // cart's number state
  const [cartNum, setCartNum] = useState<number>(1);

  // Error message
  if (!productList) return <div>Product is delivering</div>;

  // right and left btn fn
  const rightBtn = () => {
    setCurrectIndex((prev) => {
      return prev < productList.length - 1 ? prev + 1 : prev;
    });
  };

  const leftBtn = () => {
    setCurrectIndex((prev) => {
      return prev > 0 ? prev - 1 : 0;
    });
  };

  // cart's number setup fn
  const plusBtn = () => {
    setCartNum((prev) => (prev += 1));
  };

  const reduceBtn = () => {
    setCartNum((prev) => {
      return prev > 1 ? prev - 1 : 1;
    });
  };

  // 	TS 會從 productList 自動推斷型別，並會自動取得 id
  const currentProduct = productList[currentIndex];
  // Render more picture
  const morePicture = productList.map((item, index) => {
    return (
      <img
        src={`${item.imageURL}`}
        alt={`${item.title}`}
        key={item.id}
        className={`${index === currentIndex ? "active" : ""}`}
        // find id by clicked
        onClick={() => {
          setCurrectIndex(index);
        }}
      />
    );
  });

  // Change product would inital cart number
  useEffect(() => {
    setCartNum(1);
  }, [currentIndex]);
  const keypoint = currentProduct.keyPoint;

  // import custom fn
  const { addToCart } = useCart();
  // setup add fn
  const addBtn = () => {
    addToCart({
      id: currentProduct.id,
      shoes: currentProduct.shoes,
      catalog: currentProduct.catalog,
      img: currentProduct.imageURL,
      title: currentProduct.title,
      price: currentProduct.price,
      quantity: cartNum,
    });
  };
  return (
    <div className="product-container">
      <div className="product-gallery">
        <div className="product-image">
          <div className="product-imageGroup">
            <img
              src={`${currentProduct.imageURL}`}
              alt={`${currentProduct.title}`}
            />
            <button className="left-btn" onClick={leftBtn}>
              {"<"}
            </button>
            <button className="right-btn" onClick={rightBtn}>
              {">"}
            </button>
          </div>

          <div className="product-btn">
            <div className="rwd-more">
              {/* 不需要 map 的第一個 element，所以使用 _ 代替 */}
              {productList.map((_, index) => (
                <span
                  key={index}
                  className={index === currentIndex ? "active" : ""}
                  onClick={() => setCurrectIndex(index)}
                ></span>
              ))}
            </div>
          </div>
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
              <button className="cart-btn" onClick={reduceBtn}>
                -
              </button>
              <span>{cartNum}</span>
              <button className="cart-btn" onClick={plusBtn}>
                +
              </button>
            </div>
            <div className="cart-btn">
              <button onClick={addBtn}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-description">
        <h1>Description</h1>
        <div className="product-lan"></div>
        <span>{`${currentProduct.description}`}</span>
        <div className="product-lan"></div>
        <ul>
          {keypoint.map((item, index) => (
            <li className="keypoint" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Product;
