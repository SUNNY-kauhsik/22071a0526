import React, { useState } from 'react';

const Catalogue = () => {
  const [cartItems, setCartItems] = useState([]);

  // Example product data (expanded to 8 products)
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcShHz0DHEIBlkqXUbPal4fQVLevBuEqLKUmbQslAlKocG6RJ9GgOsazmAN2VuZRb3cYLitKvb9Wrd32RgmRi9mP31pf4W26Tt79ev1C4Jo&usqp=CAE',
      priceUSD: 19.99
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR61yTKyTCsyfvDdaYd6vC2aqm5P03hCwjkvjnNRBwGDw2BroexvBQ0AyB-ckPXqPanqH9GlkWa-U25KoFmP2wKuVFXcBSetO-MAEJQGkKco9lISqyDwSXh&usqp=CAE',
      priceUSD: 29.99
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      imageUrl: 'https://pbs.twimg.com/media/GJM2VyiWQAEf2sJ.jpg',
      priceUSD: 39.99
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 4',
      imageUrl: 'https://i.pinimg.com/736x/8a/25/bd/8a25bd00fe2ece2f1fe7c7b427cddf4a.jpg',
      priceUSD: 49.99
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description of Product 5',
      imageUrl: 'https://5.imimg.com/data5/ECOM/Default/2024/3/405484628/DP/VW/QZ/115422180/1modifiedabd-500x500.jpg',
      priceUSD: 59.99
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description of Product 6',
      imageUrl: 'https://m.media-amazon.com/images/I/512Rc7vo3YL.jpg',
      priceUSD: 69.99
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Description of Product 7',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zylLG-3_O4oa6Mnkw6esQ27qHFCXdiZWzw&s',
      priceUSD: 79.99
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Description of Product 8',
      imageUrl: 'https://pbs.twimg.com/media/EYOdJnmU0AAdNfC.jpg',
      priceUSD: 89.99
    }
  ];

  // Conversion rate from USD to INR (Indian Rupee)
  const exchangeRate = 75.0; // Replace with the current exchange rate if needed

  // Function to convert USD to INR and format the price
  const convertCurrency = (priceUSD) => {
    const priceINR = priceUSD * exchangeRate;
    return priceINR.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  };

  // Function to handle adding a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', padding: '20px' }}>
      <h1 style={{ gridColumn: '1 / -1' }}>Catalogue</h1>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '20px' }}>
          <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {convertCurrency(product.priceUSD)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalogue;
