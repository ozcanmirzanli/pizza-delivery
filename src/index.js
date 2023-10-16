import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const pizzaData = [
  {
    name: "ocaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([{ name: [], quantity: 0 }]);
  const handleDelete = (pizzaName) => {
    const existingPizza = cartItems.find((pizza) => pizza.name === pizzaName);

    if (existingPizza && existingPizza.quantity > 0) {
      const updatedQuantity = existingPizza.quantity - 1;

      if (updatedQuantity === 0) {
        const updatedCart = cartItems.filter(
          (pizza) => pizza.name !== pizzaName
        );
        setCartItems(updatedCart);
      } else {
        const updatedCart = cartItems.map((pizza) =>
          pizza.name === pizzaName
            ? { ...pizza, quantity: updatedQuantity }
            : pizza
        );
        setCartItems(updatedCart);
      }
    }
  };

  const addToCart = (pizzaObj) => {
    const index = cartItems.findIndex((item) => item.name === pizzaObj.name);
    if (index !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...pizzaObj, quantity: 1 }]);
    }
  };

  return (
    <>
      <Header cartItems={cartItems} handleDelete={handleDelete} />
      <div className="container">
        <Menu addToCart={addToCart} handleDelete={handleDelete} />
        <Footer />
      </div>
    </>
  );
}

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
