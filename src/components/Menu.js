import React from "react";

import { Pizza } from "./Pizza";
import { pizzaData } from "..";

export function Menu({ addToCart, handleDelete }) {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Italian cuisine. 6 creative dishes to choose from. All from our
            stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                pizzaObj={pizza}
                key={pizza.name}
                addToCart={addToCart}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}
