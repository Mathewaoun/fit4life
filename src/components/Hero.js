import React, { useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Hero.css';
import { TranslationContext } from '../go';

function Hero() {
  const { translations } = useContext(TranslationContext);

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{translations.hero_title ? translations.hero_title.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        )) : 'SHAPE YOUR BODY \n PERFECT BODY'}</h1>
        <p>{translations.hero_subtitle ? translations.hero_subtitle.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        )) : 'WORK HARDER, GET STRONGER \nFIRST MONTH FREE!'}</p>
        <ScrollLink 
          to="pricing" 
          smooth={true} 
          duration={700}
          offset={-100}
        >
          <button className="cta-button">{translations.hero_cta || 'Try a Free Class'}</button>
        </ScrollLink>
      </div>
    </section>
  );
}

export default Hero;
