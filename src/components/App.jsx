// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Product from "./Product";
import ProductList from "./ProductList";

const allergyStyle = {
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "#e74c3c",
  color: "white",
};

export default function App() {
  const favProducts = [
  {
    id: 1,
    name: "Tacos With Lime",
    alergyIngredients: ["Egg, Soy, Tree nuts, Peanuts, Sezame, Milk"],
  },
  {
    id: 2,
    name: "Fries and Burger",
    alergyIngredients: ["Egg, Milk, Soy, Wheat, Mustard"],
  },
  ];
  
  return (
    <div>
      <h1>Best selling</h1>

      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />

      <h2 style={allergyStyle}>Allergy information</h2>
      <ProductList product={favProducts} />
    </div>
  );
}

