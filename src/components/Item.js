import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false);
  const itemClass = inCart ? "in-cart" : "";

  function addItemToCart() {
    setCart((inCart) => !inCart);
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItemToCart}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
