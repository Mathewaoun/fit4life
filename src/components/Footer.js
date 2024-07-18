import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </div>
      <div className="footer-nav">
        <a href="#">Process</a>
        <span>|</span>
        <a href="#">Trainers</a>
        <span>|</span>
        <a href="#">Price</a>
      </div>
      <div className="footer-hours">
        <p>Open 24/7</p>
      </div>
      <div className="footer-contact">
        <button>Contact Us!</button>
      </div>
      <div className="footer-copy">
        <p>&copy; 2024 FitLife. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
