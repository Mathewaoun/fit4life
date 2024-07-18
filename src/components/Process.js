import React, { useContext } from 'react';
import './Process.css';
import { FaChartLine, FaDumbbell, FaFlask, FaGem } from "react-icons/fa";
import video from './Fit4Life.mp4';
import { TranslationContext } from '../go';

function Process() {
  const { translations } = useContext(TranslationContext);

  return (
    <section className="process" id="process">
      <h2>{translations.process_title || 'OUR PROCESS'}</h2>
      <div className="process-steps">
        <div className="step">
          <div className="icon-container">
            <FaChartLine className="icon" />
          </div>
          <h3>{translations.analyse_goal || 'ANALYSE YOUR GOAL'}</h3>
        </div>
        <div className="step">
          <div className="icon-container">
            <FaDumbbell className="icon" />
          </div>
          <h3>{translations.work_hard || 'WORK HARD ON IT'}</h3>
        </div>
        <div className="step">
          <div className="icon-container">
            <FaFlask className="icon" />
          </div>
          <h3>{translations.improve_you || 'IMPROVE YOU'}</h3>
        </div>
        <div className="step">
          <div className="icon-container">
            <FaGem className="icon" />
          </div>
          <h3>{translations.achieve_destiny || 'ACHIEVE YOUR DESTINY'}</h3>
        </div>
      </div>
      <p className="guide-text">{translations.guide_text || 'Watch our quick guide to discover how Fit4Life helps you achieve your fitness goals!'}</p>
      <div className="video-container">
        <video controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Process;
