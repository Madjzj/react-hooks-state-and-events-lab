import React, {useState} from "react";

function Item({ name, category }) {
  const[addToCart, setIsOn] = useState(true)

  function toggleCart(){
    setIsOn((addToCart)=>!addToCart)
  }

  return (
    <li className={addToCart ? "" : "in-cart" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addToCart? "add" : "remove" } onClick={toggleCart}>{addToCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
