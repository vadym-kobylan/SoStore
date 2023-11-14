import React from 'react';

const ProductCard = ({id, image, name, type, price}) => {
  return (
    <div className="product" key={id}>
      <img src={image} alt={id} />
      <h3>{name}</h3>
      <p>{type}</p>
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;
