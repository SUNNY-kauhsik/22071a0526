import React, { useState } from 'react';

const Kart = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <h1>Kart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Kart; 