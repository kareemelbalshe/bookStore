import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (item) => {
    let isExist = cartItem.find((cart) => cart.id === item.id);
    if (isExist) {
      setCartItem(cartItem.map((cart) => (cart.id === item.id ? item : cart)));
    } else {
      setCartItem((prev) => [...prev, item]);
    }
  };
  const removeFromCart = (id) => {
    const cart = cartItem.filter((c) => c.id !== id);
    setCartItem(cart);
  };
  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        removeFromCart,
        cartItemLength: cartItem.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
