import React from "react";

export function Cart({ items, onDelete }) {
  const total = items.reduce((acc, pizzaObj) => {
    const price = typeof pizzaObj.price === "number" ? pizzaObj.price : 0;

    return acc + price * pizzaObj.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((pizzaObj) => (
          <li className="pizzaList" key={pizzaObj.name}>
            {pizzaObj.name} - {pizzaObj.price}€ x {pizzaObj.quantity} ={" "}
            {pizzaObj.price * pizzaObj.quantity}€
            <button
              className="deleteButton"
              onClick={() => onDelete(pizzaObj.name)}
            >
              &nbsp; X
            </button>
          </li>
        ))}
      </ul>
      <p>Total: {total || 0}€</p>{" "}
    </div>
  );
}
