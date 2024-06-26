import React from 'react';

const Cake = ({ cake }) => {



  return (
    <div>
     <h3>{cake.cakeName}</h3>
      <p>Ingredients: {cake.ingredients.join(', ')}</p>
      <p>Price: £{cake.price}</p>
      <p>Rating: {cake.rating}</p>
      <button onClick={() => onSellCake(cake.price)}>Sell Cake</button>

       <hr />

    </div>
  );
}

export default Cake;