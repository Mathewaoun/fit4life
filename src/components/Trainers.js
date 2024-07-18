import React, { useContext } from 'react';
import './Trainers.css';
import Trainer1 from './Cole.jpg';
import Trainer2 from './Mark.jpg';
import Trainer3 from './marie.jpg';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { TranslationContext } from '../go';

function Trainers() {
  const { translations } = useContext(TranslationContext);

  return (
    <section className="trainers">
      <h2>{translations.meet_trainers_title || 'MEET YOUR TRAINERS'}</h2>
      <div className="trainer-cards">
        <div className="card">
          <img src={Trainer1} alt="Cole Johnson" />
          <h3>{translations.cole_johnson || 'Cole Johnson'}</h3>
          <p>{translations.cardio_trainer || 'Cardio Trainer'}</p>
          <p>______________</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
        <div className="card">
          <img src={Trainer2} alt="Mark Tucker" />
          <h3>{translations.mark_tucker || 'Mark Tucker'}</h3>
          <p>{translations.fitness_trainer || 'Fitness Trainer'}</p>
          <p>______________</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
        <div className="card">
          <img src={Trainer3} alt="Marie Saab" />
          <h3>{translations.marie_saab || 'Marie Saab'}</h3>
          <p>{translations.yoga_trainer || 'Yoga Trainer'}</p>
          <p>______________</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trainers;
