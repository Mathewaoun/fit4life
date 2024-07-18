import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';
import logo from './logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { TranslationContext } from '../go';

function Header() {
  const { translations, changeLanguage, language } = useContext(TranslationContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img src={logo} alt="FitLife Logo" className="logo" />
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li><Link to="/">{translations.welcome_message || 'Home'}</Link></li>
            <li><ScrollLink to="process" smooth={true} duration={700} offset={-80}>{translations.our_process || 'Our Process'}</ScrollLink></li>
            <li><ScrollLink to="trainers" smooth={true} duration={700} offset={-100}>{translations.meet_our_trainers || 'Meet Our Trainers'}</ScrollLink></li>
            <li><ScrollLink to="pricing" smooth={true} duration={700} offset={-100}>{translations.pricing_page || 'Pricing'}</ScrollLink></li>
            <li><Link to="/forum">{translations.forum || 'Forum'}</Link></li>
            <li><Link to="/faq">{translations.faq || 'FAQ'}</Link></li>
            <li><Link to="/contact">{translations.contact || 'Contact'}</Link></li>
          </ul>
        </nav>
        <div className="language-selector" onClick={() => setDropdownOpen(!dropdownOpen)} aria-haspopup="true" aria-expanded={dropdownOpen}>
          <FontAwesomeIcon icon={faGlobe} />
          <span className="current-language" aria-label={`Current language is ${language.toUpperCase()}`}>{language ? language.toUpperCase() : 'EN'}</span>
          {dropdownOpen && (
            <div className="dropdown" role="menu">
              <button onClick={() => handleLanguageChange('en')} role="menuitem">English</button>
              <button onClick={() => handleLanguageChange('fr')} role="menuitem">French</button>
              <button onClick={() => handleLanguageChange('es')} role="menuitem">Spanish</button>
            </div>
          )}
        </div>
        <Link to="/signup">
          <button className="sign-up-btn">{translations.sign_up || 'Sign up!'}</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
