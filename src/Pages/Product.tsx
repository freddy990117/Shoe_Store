import { useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";

const Product = () => {
  const productList = useProducts();
  // 讀取 Router 中的 id 值
  const { id } = useParams<{ id: string }>();
  // find id by clicked
  const correctProduct = productList.find((item) => item.id === Number(id));
  if (!productList) return <div>Product is delivering</div>;

  return (
    <div className="product-container">
      <div className="product-gallery">
        <div className="product-image">
          <button className="left-btn">{"<"}</button>
          <button className="right-btn">{">"}</button>
          <img src={`${correctProduct?.imageURL}`} alt="product-intro" />
          {/* Map more product picture */}
          <div className="more-picture">
            {productList.map((item, index) => (
              <img key={index} src={`${item.imageURL}`} alt={`${item.title}`} />
            ))}
          </div>
        </div>
        <div className="product-info">
          <div className="information">
            <h3>{`${correctProduct?.shoes}`}</h3>
            <h3>{`${correctProduct?.catalog}`}</h3>
            <h3>${`${correctProduct?.price}`}</h3>
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
        <span className="description">{`${correctProduct?.description}`}</span>
        <ul className="keypoint-container">
          {correctProduct?.keyPoint?.map((item, index) => (
            <li key={index} className="keypoint">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
