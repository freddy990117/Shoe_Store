import { Link } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import { useSlide } from "../Hooks/useSlide";
const Homepage = () => {
  // import useProduct and use.
  const productList = useProducts();
  const { currentIndex, next, prev } = useSlide(productList.length);
  return (
    <div>
      <div className="homepage-main">
        <div className="homepage-product">
          <div className="product-introduce">
            <h2>25% OFF</h2>
            <h3>Summer Sale</h3>
            <p>Discover our summer styles with discount</p>
            <Link to={`/product/0`}>
              <button>Shop Now</button>
            </Link>
          </div>
          <div className="product-image">
            <img src="/images/picture-10.svg" alt="shoes picture" />
          </div>
        </div>
        <div className="homepage-more">
          <div className="more-product">
            <h2>Explore our latest drops</h2>
            <div className="product">
              <div className="product-catalog">
                {productList.map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    <img src={`${item.imageURL}`} alt={`${item.title}`} />
                    <h3>{`${item.shoes}`}</h3>
                    <h4>{`${item.catalog}`}</h4>
                    <p>$ {`${item.price}`}</p>
                  </Link>
                ))}
              </div>
              <div className="product-btn">
                <button className="left-btn homepage-btn" onClick={prev}>
                  {"<"}
                </button>
                <button className="right-btn homepage-btn" onClick={next}>
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
