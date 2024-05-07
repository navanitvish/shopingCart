import React from "react";

const CartItem = ({ item, itemIndex }) => {
  return (
    <div>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>

        <div>
          <p>{item.price}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CartItem;
