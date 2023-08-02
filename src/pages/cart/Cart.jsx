import React, { useContext } from "react";
import "./cart.css";
import CartContext from "../../context/cartContext";

export default function Cart() {
  const { cartItem, addToCart, removeFromCart } = useContext(CartContext);
  const totalPrice = cartItem.reduce((acc, cur) =>
    acc + cur.price * cur.quantity, 0
  ).toFixed(2);
  return (
    <>
      <div className="cart">
        <div className="cart-title">Your Shoping Cart</div>
        <div className="cart-wrapper">
          <div className="cart-items">
            {cartItem.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={`/books/${item.image}`}
                  alt=""
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <div>
                    <div className="cart-item-book-title">
                      <b>Title: </b> {item.title}
                    </div>
                    <div className="cart-item-author">
                      <b>Author: </b> {item.author}
                    </div>
                  </div>
                  <div>
                    <div className="cart-item-quantity">
                      <button
                        onClick={() =>
                          addToCart({ ...item, quantity: item.quantity + 1 })
                        }
                      >
                        <i className="bi bi-plus-lg"></i>
                      </button>
                      <b>{item.quantity}</b>
                      <button
                        onClick={() =>item.quantity>0?
                          addToCart({ ...item, quantity: item.quantity - 1 }):true
                        }
                      >
                        <i className="bi bi-dash-lg"></i>
                      </button>
                    </div>
                    <div className="cart-items-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <i
                      onClick={() => removeFromCart(item.id)}
                      className="bi bi-trash-fill"
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-order-summary">
            <div className="order-summary-title">ORDER SUMMARY</div>
            <div className="order-summary-item">
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <div className="order-summary-item">
              <span>Shoping Cost</span>
              <span>0</span>
            </div>
            <div className="order-summary-item">
              <span>Discount</span>
              <span>0</span>
            </div>
            <div className="order-summary-item">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
