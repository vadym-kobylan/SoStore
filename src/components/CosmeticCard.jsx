import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

const CosmeticCard = ({ id, image, name, type, price, cartItems, setCartItems, notify }) => {
  const onAddToCart = () => {
    const newProduct = {
      id: id,
      image: image,
      name: name,
      type: type,
      price: price,
      quantity: 1,
    };

    const existingProductIndex = cartItems.findIndex((item) => item.id === newProduct.id);

    if (existingProductIndex !== -1) {
      // Якщо знайдено існуючий продукт, збільште кількість на 1
      const updatedProductItems = [...cartItems];
      updatedProductItems[existingProductIndex].quantity += 1;
      setCartItems(updatedProductItems);
    } else {
      // Якщо не знайдено, додайте новий об'єкт до масиву
      setCartItems((prevProductItems) => [...prevProductItems, newProduct]);
    }

    notify();
  };

  return (
    <div className="product width" key={id}>
      <img className="cosmeticImage" src={image} alt={id} />
      <h3>{name}</h3>
      <p>{type}</p>
      <p>${price}</p>
      <button className="add-to-cart" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default CosmeticCard;
