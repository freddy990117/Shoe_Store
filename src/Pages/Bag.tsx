import { useCart } from "../Context/CartContext";

const Bag = () => {
  const {
    cart,
    plusBtn,
    reduceBtn,
    removeBtn,
    Subtotal,
    shipPrice,
    discountPrice,
    totalPrice,
    finalTax,
  } = useCart();
  const cartItem = cart.map((product) => {
    return (
      <div className="shoe-decide">
        <div className="shoe-info">
          <div className="shoe-img">
            <img src={`${product.img}`} alt={`${product.title}`} />
          </div>
          <div className="shoe-des">
            <div className="shoe-catalog">
              <h3>{`${product.shoes}`}</h3>
              <h4>{`${product.catalog}`}</h4>
            </div>
            <div className="shoe-btn">
              <div className="shoe-num">
                <button onClick={() => reduceBtn(product.id)}>-</button>
                <span>{`${product.quantity}`}</span>
                <button onClick={() => plusBtn(product.id)}>+</button>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeBtn(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
          <div className="shoe-price">
            <p>${`${product.price}`}</p>
          </div>
        </div>
        <div className="shoe-lan" />
      </div>
    );
  });

  return (
    <div className="bag-container">
      <div className="shoe-bag">
        <h1>Your Bag</h1>
        {cartItem}
      </div>
      <div className="bag-summary">
        <div className="bag-summary-info">
          <h1>Summary</h1>
          <div className="bag-summary-detail Subtotal">
            <h3>Subtotal</h3>
            <span>${Subtotal}</span>
          </div>
          <div className="bag-summary-detail Shipping">
            <h3>Shipping and delivery</h3>
            <span>${shipPrice}</span>
          </div>
          <div className="bag-summary-detail Tax">
            <h3>Tax</h3>
            <span>${finalTax}</span>
          </div>
          <div className="bag-summary-detail Discount">
            <h3>Discount</h3>
            <span>-${discountPrice}</span>
          </div>
        </div>
        <div className="bag-summary-lan"></div>
        <div className="bag-summary-total">
          <div className="total-detail">
            <h2>Total</h2>
            <span>${totalPrice}</span>
          </div>
          <button className="checkout">Checkout →</button>
        </div>
      </div>
    </div>
  );
};

export default Bag;
