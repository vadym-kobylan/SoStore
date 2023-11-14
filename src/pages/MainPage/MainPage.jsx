import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.svg';

import storyImage from '../../assets/image/toa-heftiba-GLl6_-L3fxM-unsplash.jpg';
import client1 from '../../assets/image/2023-10-10 21.47.04.jpg';
import client2 from '../../assets/image/2023-10-10 21.46.54.jpg';
import client3 from '../../assets/image/2023-10-10 21.46.48.jpg';
import whyUsLogo1 from '../../assets/image/secure.jpg';
import whyUsLogo2 from '../../assets/image/deliver.jpg';
import whyUsLogo3 from '../../assets/image/service.jpg';
import ProductCard from '../../components/ProductCard';
import CartLogo from '../../components/CartLogo'

import './MainPage.css';
const MainPage = ({ productItems }) => {
  return (
    <div>
      <header>
        <div className="top-bar">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cosmetics">Cosmetics</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/cart">
                  <CartLogo className='cart-image' />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header_content_wrap">
          <div className="header-content">
            <h6>Welcome To The SOstore</h6>
            <h1>Where beauty finds its home</h1>
            <div className="button_wrap">
              <Link className="button_shop" to="/cosmetics">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="products">
        <div className="products_title">
          <h2>New Cosmetics</h2>
          <div className="button_wrap">
            <Link className="button_shop" to="/cosmetics">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="products_section">
          {productItems.map(({ id, img, name, type, price }) => (
            <ProductCard id={id} image={img} name={name} type={type} price={price} key={id} />
          ))}
        </div>
      </section>

      <section className="our_story">
        <div className="our_story_img">
          <img src={storyImage} alt="" />
        </div>
        <div className="our_story_text">
          <h6>Our Story</h6>
          <h2>For People Who Love Beauty</h2>
          <p>
            Our mission is to provide the best solutions for those who appreciate beauty in
            everything. From exclusive cosmetic products to everyday skincare items, we create a
            world for you where every moment reflects your unique beauty.
          </p>
          <p>With us, beauty will find its true home.</p>
          <div className="button_wrap">
            <a className="button_shop" href="#">
              Read More
            </a>
          </div>
        </div>
      </section>

      <section className="customer_reviews">
        <h2>What Our Customers Say</h2>
        <div className="review_wrap">
          <div className="review">
            <p>
              Most of my decorative cosmetics collection consists of products bought here. The
              quality of their goods is always top-notch, and the service is very pleasant.
            </p>
            <img src={client1} alt="Клієнт 1" />
            <p>YULIA VERBYNETS</p>
          </div>

          <div className="review">
            <p>
              This store is my favorite place to shop for decorative cosmetics! They always have a
              wide range of products that meet all my needs. I love their promotions and expert
              advice. Highly recommended!
            </p>
            <img src={client2} alt="Клієнт 2" />
            <p>DASHA ASTAFIEVA</p>
          </div>

          <div className="review">
            <p>
              Most of my decorative cosmetics collection consists of products bought here. The
              quality of their goods is always top-notch, and the service is very pleasant. I'm a
              happy customer, and I will definitely be back
            </p>
            <img src={client3} alt="Клієнт 3" />
            <p>NADYA DOROFEEVA</p>
          </div>
        </div>
      </section>

      <section className="gift_card">
        <div>
          <h6>GIFT CARD</h6>
          <h3>Give the Gift of Cosmetics</h3>
          <p>Gift certificate for cosmetic expenses — For your best version of yourself.</p>
          <div className="button_wrap">
            <a className="button_shop" href="#">
              Purchase A Gift Card
            </a>
          </div>
        </div>
      </section>

      <section className="why_us">
        <div>
          <img src={whyUsLogo1} alt="" />
          <p>SECURE PAYMENT</p>
        </div>
        <div>
          <img src={whyUsLogo2} alt="" />
          <p>DELIVERED WITH CARE</p>
        </div>
        <div>
          <img src={whyUsLogo3} alt="" />
          <p>EXCELLENT SERVICE</p>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
