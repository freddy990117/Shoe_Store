import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
const Header = () => {
  const { cart } = useCart();
  const cartNum = cart.length;
  return (
    <div className="header">
      <div className="header-logo">
        <img src="/icons/icon.png" alt="logo image" />
        <a href="/">
          <h1> SUN CO.</h1>
        </a>
      </div>
      <div className="header-cart">
        <div className="header-cart-info">
          <img src="/icons/shope-bag.png" alt="shop bag image" />
          <Link to={`/bag`}>
            <button>View Cart</button>
          </Link>
          <span className={`cart-number ${cartNum > 0 ? "active" : ""}`}>
            {cartNum}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
