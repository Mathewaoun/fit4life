import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pricing.css';

function Pricing() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    supportType: 'Select One',
    price: 'Select One',
    facilityAccess: 'Select One'
  });

  const [filteredPlans, setFilteredPlans] = useState([]);
  const [filtersApplied, setFiltersApplied] = useState(false); // Track if filters are applied

  const pricingPlans = [
    {
      name: 'Basic Plan',
      price: 49.99,
      features: ['Access to All Basic Training Programs', 'Weekly Progress Tracking', 'Email Support', 'Access to Community Forum', 'Select 1 Location', 'Facility Access: Gym Only'],
      supportType: 'Email Support',
      facilityAccess: 'Gym Only'
    },
    {
      name: 'Sportman Plan',
      price: 59.99,
      features: ['Everything in the Basic Plan', 'Customized Workout Plans', 'Nutritional Guidance', 'Monthly One-on-One Consultation', 'Priority Email Support', 'Any Location in Your City', 'Facility Access: Gym + Pool'],
      supportType: 'Priority Email Support',
      facilityAccess: 'Gym + Pool'
    },
    {
      name: 'Professional Plan',
      price: 99.99,
      features: ['Everything in the Sportman Plan', 'Advanced Workout Programs', 'Detailed Nutritional Plans', 'Weekly One-on-One Coaching', 'Access to Exclusive Workshops', '24/7 Support', 'Any Location in the World', 'Facility Access: All Facilities'],
      supportType: '24/7 Support',
      facilityAccess: 'All Facilities'
    }
  ];

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSubscribeClick = () => {
    navigate('/step1');
  };

  const handleRefreshClick = () => {
    let filteredPlans = [...pricingPlans];

    // Filter by support type
    if (filters.supportType !== 'Select One') {
      if (filters.supportType === 'Email Support') {
        // Show all plans with Email Support
      } else if (filters.supportType === 'Priority Email Support') {
        filteredPlans = filteredPlans.filter(plan => plan.supportType === 'Priority Email Support' || plan.supportType === '24/7 Support');
      } else if (filters.supportType === '24/7 Support') {
        filteredPlans = filteredPlans.filter(plan => plan.supportType === '24/7 Support');
      }
    }

    // Filter by price
    if (filters.price !== 'Select One') {
      if (filters.price === 'Plans under $50') {
        filteredPlans = filteredPlans.filter(plan => plan.price < 50);
      } else if (filters.price === 'Plans under $75') {
        filteredPlans = filteredPlans.filter(plan => plan.price < 75);
      } else if (filters.price === 'Plans over $75') {
        filteredPlans = filteredPlans.filter(plan => plan.price > 75);
      }
    }

    // Filter by facility access
    if (filters.facilityAccess !== 'Select One') {
      if (filters.facilityAccess === 'All Facilities') {
        filteredPlans = filteredPlans.filter(plan => plan.facilityAccess === 'All Facilities');
      } else {
        filteredPlans = filteredPlans.filter(plan => plan.facilityAccess === filters.facilityAccess);
      }
    }

    setFilteredPlans(filteredPlans);
    setFiltersApplied(true); // Indicate that filters have been applied
  };

  return (
    <section className="pricing">
      <div className="filters">
        <div className="filter">
          <label>Support Type</label>
          <select name="supportType" value={filters.supportType} onChange={handleFilterChange}>
            <option>Select One</option>
            <option>Email Support</option>
            <option>Priority Email Support</option>
            <option>24/7 Support</option>
          </select>
        </div>
        <div className="filter">
          <label>Price</label>
          <select name="price" value={filters.price} onChange={handleFilterChange}>
            <option>Select One</option>
            <option>Plans under $50</option>
            <option>Plans under $75</option>
            <option>Plans over $75</option>
          </select>
        </div>
        <div className="filter">
          <label>Facility Access</label>
          <select name="facilityAccess" value={filters.facilityAccess} onChange={handleFilterChange}>
            <option>Select One</option>
            <option>All Facilities</option>
            <option>Gym Only</option>
            <option>Gym + Pool</option>
          </select>
        </div>
      </div>
      <div className="refresh-container">
        <button className="refresh-button" onClick={handleRefreshClick}>Refresh</button>
      </div>
      <h2>PRICING PLANS</h2>
      <div className="plans">
        {filtersApplied ? (
          filteredPlans.map((plan, index) => (
            <div key={index} className={`plan ${plan.name.toLowerCase().replace(' ', '-')}${plan.price === 99.99 ? ' highlighted-plan' : ''}`}>
              <h3>{plan.name}</h3>
              <div className="price-section">
                <p className="price">${plan.price.toFixed(2)}</p>
                <p>PER MONTH</p>
              </div>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="subscribe-button" onClick={handleSubscribeClick}>Subscribe Now</button>
            </div>
          ))
        ) : (
          <>
            <div className="plan basic-plan">
              <h3>Basic Plan</h3>
              <div className="price-section">
                <p className="price">$49.99</p>
                <p>PER MONTH</p>
              </div>
              <ul>
                <li>Access to All Basic Training Programs</li>
                <li>Weekly Progress Tracking</li>
                <li>Email Support</li>
                <li>Access to Community Forum</li>
                <li>Select 1 Location</li>
                <li>Facility Access: Gym Only</li>
              </ul>
              <button className="subscribe-button" onClick={handleSubscribeClick}>Subscribe Now</button>
            </div>
            <div className="plan professional-plan highlighted-plan">
              <h3>Professional Plan</h3>
              <div className="price-section">
                <p className="price">$99.99</p>
                <p>PER MONTH</p>
              </div>
              <ul>
                <li>Everything in the Sportman Plan</li>
                <li>Advanced Workout Programs</li>
                <li>Detailed Nutritional Plans</li>
                <li>Weekly One-on-One Coaching</li>
                <li>Access to Exclusive Workshops</li>
                <li>24/7 Support</li>
                <li>Any Location in the World</li>
                <li>Facility Access: All Facilities</li>
              </ul>
              <button className="subscribe-button" onClick={handleSubscribeClick}>Subscribe Now</button>
            </div>
            <div className="plan sportman-plan right-plan">
              <h3>Sportman Plan</h3>
              <div className="price-section">
                <p className="price">$59.99</p>
                <p>PER MONTH</p>
              </div>
              <ul>
                <li>Everything in the Basic Plan</li>
                <li>Customized Workout Plans</li>
                <li>Nutritional Guidance</li>
                <li>Monthly One-on-One Consultation</li>
                <li>Priority Email Support</li>
                <li>Any Location in Your City</li>
                <li>Facility Access: Gym + Pool</li>
              </ul>
              <button className="subscribe-button" onClick={handleSubscribeClick}>Subscribe Now</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Pricing;
