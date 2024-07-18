import React from 'react';
import './Reviews.css';
import Jane from './jane.jpeg';
import John from './John.webp';
import Sarah from './sara.jpg';

function Reviews() {
  return (
    <section className="reviews">
      <h2>REVIEWS FROM MEMBERS</h2>
      <div className="review-cards">
        <div className="revcard">
          <p>“Fit4Life has completely transformed my fitness journey. The supportive community is one of the best aspects of this platform. I've connected with so many like-minded individuals who are always there to motivate and encourage each other.”</p>
          <div className="reviewer-info">
            <img src={Jane} alt="Jane Doe" />
            <p>Jane Doe</p>
          </div>
        </div>
        <div className="revcard">
          <p>“The trainers at Fit4Life are truly exceptional. Their dedication to helping members achieve their fitness goals is evident in every interaction. My personal trainer, Mark, constantly checks in with me and provides the motivation I need to stay on track.”</p>
          <div className="reviewer-info">
            <img src={John} alt="John Smith" />
            <p>John Smith</p>
          </div>
        </div>
        <div className="revcard">
          <p>“The dietary advice from the dietitians at Fit4Life has been a game-changer. I feel healthier and more energetic than ever before. The personalized meal plans are tailored to my preferences and goals, making it easy to stick to a healthy diet.”</p>
          <div className="reviewer-info">
            <img src={Sarah} alt="Sarah Lee" />
            <p>Sarah Lee</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
