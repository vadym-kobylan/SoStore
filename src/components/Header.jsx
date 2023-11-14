import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo_black.jpg';
import CartLogo from './CartLogo';

const Header = () => {
  return (
    <div className="top-bar">
      <Link to="/">
        <img src={logo} alt="logo" className="header-logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/" className="dark">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cosmetics" className="dark">
              Cosmetics
            </Link>
          </li>
          <li>
            <Link to="/about" className="dark">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="dark">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <CartLogo className="cart-image-dark" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
