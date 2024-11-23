import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About BookStore</h3>
          <p>Your one-stop shop for all your reading needs.</p>
        </div>
        <div className="footer-section">
          <h3>Policies</h3>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#shipping">Shipping Policy</a></li>
            <li><a href="#refund">Refund Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 BookStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

