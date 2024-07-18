import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h1>Contact us</h1>
        <p className="operation-hours">Hours of Operation</p>
        <p className="hours">Monday to Friday: 24/7<br />Saturday & Sunday: 24/7</p>
        {submitted ? (
          <p className="thank-you-message">Thank you for your message! We will get back to you soon.</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group1">
              <label htmlFor="message">Your message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        )}
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.8192984767596!2d-75.6813100844659!3d45.39468897910096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05ed8df8c761%3A0xf8ac7f8a7f45b5b1!2s2277%20Riverside%20Dr%2C%20Ottawa%2C%20ON%20K1H%207X6%2C%20Canada!5e0!3m2!1sen!2sus!4v1627665613892!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <p className="address">Address: 2277 Riverside Dr, Ottawa, ON K1H 7X6</p>
      </div>
    </div>
  );
}

export default Contact;
