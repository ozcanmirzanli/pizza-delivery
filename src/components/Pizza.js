import React, { useState } from "react";

export function Pizza({ pizzaObj, addToCart, onDelete }) {
  const [num, setNum] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleClick = () => {
    addToCart(pizzaObj);
    setNum(num + 1);
    setAddedToCart(true);
  };

  const handleDeleteClick = () => {
    if (num >= 1) {
      onDelete(pizzaObj.name);
      setNum(num - 1);
      if (num === 1) {
        setAddedToCart(false);
      }
    }
  };

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span className="add">
          {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + "€"}
          {addedToCart ? (
            <span className="added-to-cart">
              x{num} Added to Cart
              <button className="deleteButton" onClick={handleDeleteClick}>
                &nbsp; X
              </button>
            </span>
          ) : (
            ""
          )}
          {pizzaObj.soldOut === false ? (
            <button className="cartBtn" onClick={handleClick}>
              Add to Cart
            </button>
          ) : null}
        </span>
      </div>
    </li>
  );
}
