import React from 'react';
import './faq.css';

function FAQ() {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faqItem">
        <h3>What is Fit4Life?</h3>
        <p>Fit4Life is a comprehensive fitness platform designed to help you achieve your health and fitness goals through personalized workout plans, diet training, and fitness tracking.</p>
      </div>
      <div className="faqItem">
        <h3>How do I become a member?</h3>
        <p>To become a member, simply sign up on our website, fill in your personal information, provide billing details, and generate your personalized fitness calendar.</p>
      </div>
      <div className="faqItem">
        <h3>What types of workout plans are available?</h3>
        <p>We offer various workout plans, including cardio, strength training, yoga, and mixed workouts. You can choose the plan that best suits your fitness goals.</p>
      </div>
      <div className="faqItem">
        <h3>How do I contact support?</h3>
        <p>You can contact our support team by visiting the Contact Us page and filling out the form or by emailing us at support@fit4life.com.</p>
      </div>
    </div>
  );
}

export default FAQ;
