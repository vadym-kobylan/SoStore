import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import image1 from '../../assets/image/item1.jpg';
import './Cart.css';
import CartItem from './CartItem';

const Cart = ({ cartItems, setCartItems }) => {
  const [totalQuantity, setTotalQuantity] = useState(
    cartItems.reduce((total, item) => total + item.quantity, 0),
  );
  const [totalPrice, setTotalPrice] = useState(
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0),
  );

  useEffect(() => {
    setTotalQuantity(cartItems.reduce((total, item) => total + item.quantity, 0));
    setTotalPrice(cartItems.reduce((total, item) => total + item.quantity * item.price, 0));
  }, [cartItems]);

  return (
    <div>
      <Header />

      <section className="cart-wrapper">
        <div className="cart-container">
          <div className="cart-header">
            <h3 className="cart-heading">Shopping Cart</h3>
            <h5 className="cart-action" onClick={() => setCartItems([])}>
              Remove all
            </h5>
          </div>

          {cartItems.length ? (
            <>
              {cartItems.map(({ id, name, type, image, price, quantity }) => (
                <CartItem
                  key={id}
                  id={id}
                  name={name}
                  type={type}
                  image={image}
                  price={price}
                  quantity={quantity}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                />
              ))}

              <div className="checkout">
                <div className="total">
                  <div>
                    <div className="Subtotal">Sub-Total</div>
                    <div className="items">{totalQuantity}</div>
                  </div>
                  <div className="total-amount">${totalPrice.toFixed(2)}</div>
                </div>
                <button className="button">Checkout</button>
              </div>
            </>
          ) : (
            <div className="empty-cart">Cart is Empty</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
