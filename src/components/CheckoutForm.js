import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutForm.css';
import logo from './logo.webp';

function CheckoutForm() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/step1');
  };

  const handlePlaceOrderClick = (e) => {
    e.preventDefault();
    const form = document.querySelector('#checkoutForm'); 
    if (form.checkValidity()) {
      navigate('/calendar');
    } else {
      form.reportValidity(); 
    }
  };

  return (
    <div className="checkout-form">
      <div className="progress-bar">
        <div className="step active">
          <span className="step-number">1</span>
          <span className="step-label">Personal Information</span>
        </div>
        <div className="step active">
          <span className="step-number">2</span>
          <span className="step-label">Billing Details</span>
        </div>
        <div className="step">
          <span className="step-number">3</span>
          <span className="step-label">Calendar Generator</span>
        </div>
        <div className="step">
          <span className="step-number">4</span>
          <span className="step-label">Completed!</span>
        </div>
      </div>
      <form id="checkoutForm">
        <div className="form-container">
          <div className="billing-details">
            <h2>Billing Details</h2>
            <div className="form-group">
              <label>Name</label>
              <div className="name-fields">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="something@something.com" required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="(XXX) - XXX - XXXX" pattern="\d{10}" title="Phone number must be exactly 10 digits" required />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" placeholder="Street Name and House Number" required />
              <label> </label>
              <input type="text" placeholder="Apartment Number, Suite, Unit (Optional)" />
            </div>
            <div className="form-group">
              <label>Postal Code</label>
              <input type="text" placeholder="Ex: X3X 9X9" pattern="[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d" title="Postal code must be in the format A1A 1A1" required />
            </div>
            <div className="form-group">
              <label>Country</label>
              <select required>
                <option value="">Select Your Country</option>
                <option value="Canada">Canada</option>
                <option value="United States">United States</option>
                <option value="Mexico">Mexico</option>
              </select>
            </div>
            <div className="form-group">
              <label>Province</label>
              <select required>
                <option value="">Select Your Province</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Northwest Territories">Northwest Territories</option>
                <option value="Nunavut">Nunavut</option>
                <option value="Yukon">Yukon</option>
              </select>
            </div>
            <div className="form-group">
              <label>City</label>
              <select required>
                <option value="">Select Your City</option>
                <option value="Toronto">Toronto</option>
                <option value="Montreal">Montreal</option>
                <option value="Vancouver">Vancouver</option>
                <option value="Calgary">Calgary</option>
                <option value="Edmonton">Edmonton</option>
                <option value="Ottawa">Ottawa</option>
                <option value="Winnipeg">Winnipeg</option>
                <option value="Quebec City">Quebec City</option>
                <option value="Hamilton">Hamilton</option>
                <option value="London">London</option>
                <option value="Victoria">Victoria</option>
                <option value="Halifax">Halifax</option>
                <option value="Saskatoon">Saskatoon</option>
                <option value="Regina">Regina</option>
                <option value="St. John's">St. John's</option>
                <option value="Charlottetown">Charlottetown</option>
                <option value="Yellowknife">Yellowknife</option>
                <option value="Whitehorse">Whitehorse</option>
                <option value="Iqaluit">Iqaluit</option>
              </select>
            </div>
            <div className="button-container">
              <button className="back-button" onClick={handleBackClick}>Back</button>
            </div>
          </div>
          <div className="card-details">
            <div className="card-image">
              <img src={logo} alt="Fit4Life Logo" />
            </div>
            <h2>Card Details</h2>
            <div className="form-group">
              <label>Cardholder Name</label>
              <input type="text" placeholder="First and Last Name" required />
            </div>
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" placeholder="XXXXXXXXXXXXXXXX (16 Digits)" pattern="\d{16}" title="Card number must be exactly 16 digits" required />
            </div>
            <div className="form-group">
              <label>Expiring Date</label>
              <input type="text" placeholder="MM/YY" pattern="(0[1-9]|1[0-2])\/\d{2}" title="Expiring date must be in the format MM/YY" required />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input type="text" placeholder="XXX" pattern="\d{3}" title="CVV must be exactly 3 digits" required />
            </div>
            <div className="button-container">
              <button className="place-order-button" onClick={handlePlaceOrderClick}>Place Order</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
