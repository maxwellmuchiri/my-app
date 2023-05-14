import React from "react";

const Card = ({ seedling, addToCart }) => {
  const { name, price, image } = seedling;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={() => addToCart(seedling)}>Add to Cart</button>
    </div>
  );
};

export default Card;
