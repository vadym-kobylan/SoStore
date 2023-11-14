import React from 'react';
import Header from '../../components/Header';
import CosmeticCard from '../../components/CosmeticCard';
import { ToastContainer, toast } from 'react-toastify';
import './Cosmetics.css';

const Cosmetics = ({ productItems, cartItems, setCartItems }) => {
  const notify = () => toast('You have successfully added the product to the cart!');

  return (
    <div>
      <Header />
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="cosmetics_products_background">
        <section className="cosmetics_products">
          <div className="cosmetics_products_section">
            {productItems.map(({ id, img, name, type, price }) => (
              <CosmeticCard
                key={id}
                id={id}
                image={img}
                name={name}
                type={type}
                price={price}
                cartItems={cartItems}
                setCartItems={setCartItems}
                notify={notify}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cosmetics;
