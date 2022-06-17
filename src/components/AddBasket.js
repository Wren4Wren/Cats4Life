import { useState } from "react";

const AddToBasket = ( { basket, removeItemFromBasket } ) => {
  
  return (
    <>
      {basket.map((cat, i) => (
        <div key={i} className="Cat">
          <img src={cat.url} alt="basket item" />
          <h3>{cat.name}</h3>
          <p>{cat.price}</p>
          <button
            onClick={() => {
              removeItemFromBasket(cat.splice(1));
            }}>
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default AddToBasket;
