import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Cart } from "./Cart";

export function Header({ cartItems, handleDelete }) {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const totalPizzasInCart = cartItems.reduce(
    (total, pizza) => total + pizza.quantity,
    0
  );

  return (
    <header className="header">
      <span className="cart">
        <h1>Özcan's React Pizzeria</h1>
        <div className="cart-icon" onClick={toggleCart}>
          <FontAwesomeIcon
            icon={faCartShopping}
            size="4x"
            style={{ color: "#ff5e1a" }}
          />
          {totalPizzasInCart > 0 && (
            <span className="cart-count">{totalPizzasInCart}</span>
          )}
        </div>
      </span>
      {cartVisible && (
        <div className="cartFunc">
          {cartItems.length > 0 && (
            <Cart items={cartItems} onDelete={handleDelete} />
          )}
        </div>
      )}
    </header>
  );
}
