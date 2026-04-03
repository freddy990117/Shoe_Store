import { useEffect } from "react";
import { useCart } from "../Context/CartContext";
import empty from "/public/images/empty_bag.png";
import { useAdmin, type Order } from "../Context/AdminContext";
const Bag = () => {
  const { addOrder } = useAdmin();
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
    clearCart,
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
              <p>${`${product.price}`}</p>
            </div>
            <h4>{`${product.catalog}`}</h4>
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
        </div>
        <div className="shoe-lan" />
      </div>
    );
  });

  // 當 cart 改變時，將資料存入進 localStorage
  useEffect(() => {
    return localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const handleCheckout = () => {
    if (cart.length === 0) return alert("購物車沒東西喔！");

    // 1. 建立訂單物件
    const newOrder: Order = {
      id: `ORDER-${Date.now()}`,
      items: [...cart], // 複製一份目前的購物車
      total: totalPrice,
      status: "待出貨",
      createdAt: new Date().toLocaleString(),
    };

    // 2. 存入後台 (AdminContext)
    addOrder(newOrder);

    console.log(newOrder);
    // 3. 清空前台購物車 (CartContext)
    clearCart();

    alert("訂單已送出囉(・∀・)つ⑩！。");
  };
  return (
    <div className="bag-container">
      {cart.length === 0 ? (
        <img src={empty} alt="empty bag" className="empty-image" />
      ) : (
        <>
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
              <button className="checkout" onClick={handleCheckout}>
                Checkout →
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Bag;
