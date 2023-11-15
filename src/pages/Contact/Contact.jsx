import React from 'react';
import './Contact.css';
import Header from '../../components/Header';

import linkImage1 from '../../assets/image/map_marker.png';
import linkImage2 from '../../assets/image/phone.png';
import linkImage3 from '../../assets/image/email.png';

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="contact">
        <div className="leftBar">
          <h1>Get In Touch</h1>
          <div>
            <img src={linkImage1} alt="" />
            <div>
              <h6>VISIT US</h6>
              <a
                className="contact-links"
                href="https://maps.app.goo.gl/8fKfpkud1EQpyq9o8"
                target="_blanc">
                77 Shevchenko St., Kyiv, 38053, Ukraine
              </a>
            </div>
          </div>
          <div>
            <img src={linkImage2} alt="" />
            <div>
              <h6>CALL US</h6>
              <a className="contact-links" href="tel:+380975557777">
                +380 97 555 7777
              </a>
            </div>
          </div>

          <div className="rightBar">
            <img src={linkImage3} alt="" />
            <div>
              <h6>EMAIL US</h6>
              <a className="contact-links" href="mailto:mail@example.com" target="_blanc">
                mail@example.com
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3>Drop us a line or two</h3>
          <form className="formStyle">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" cols="30" rows="4"></textarea>
            <input type="submit" value="Submit" className="button" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
