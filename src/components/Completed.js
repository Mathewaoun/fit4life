import React from 'react';
import './Completed.css';
import logo from './logo.webp';

function Completed() {
  return (
    <div className="completed">
      <div className="progress-bar">
        <div className="step active">
          <span className="step-number">1</span>
          <span className="step-label">First Step</span>
        </div>
        <div className="step active">
          <span className="step-number">2</span>
          <span className="step-label">Second Step</span>
        </div>
        <div className="step active">
          <span className="step-number">3</span>
          <span className="step-label">Third Step</span>
        </div>
        <div className="step active">
          <span className="step-number">4</span>
          <span className="step-label">Completed!</span>
        </div>
      </div>
      <div className="completed-message">
        <h1>Welcome to Fit4Life!</h1>
        <p>Congratulations on completing the steps!</p>
        <p>We are thrilled to have you as a part of our community.</p>
        <p>Enjoy your 1 free month of personalized workout programs, tailored diet plans, and comprehensive fitness tracking. We are committed to supporting you every step of the way.With Fit4Life, you have access to the best trainers and resources to help you achieve your fitness goals. Whether you're looking to lose weight, build muscle, or just stay active, we've got you covered.Don't forget to check out our community forums and join our group classes to stay motivated and connected with other members. Your fitness journey is just beginning, and we are here to help you succeed.Thank you for choosing Fit4Life. Let's get started on achieving your best self!</p>
        <img src={logo} alt="Fit4Life Logo" />
      </div>
    </div>
  );
}

export default Completed;
