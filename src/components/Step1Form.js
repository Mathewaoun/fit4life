import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step1Form.css'; 
import logo from './logo.webp';

function Step1Form() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    const form = document.querySelector('form'); 
    const ageInput = form.querySelector('input[name="age"]');
    
    if (form.checkValidity()) {
      if (parseInt(ageInput.value) < 16) {
        ageInput.setCustomValidity('You must be at least 16 years old to register.');
        ageInput.reportValidity();
      } else {
        ageInput.setCustomValidity(''); // Clear any previous custom validation message
        navigate('/checkout');
      }
    } else {
      form.reportValidity(); 
    }
  };

  return (
    <div className="stepForm">
      <div className="formWrapper">
        <div className="progressBar">
          <div className="step active">
            <span className="stepNumber">1</span>
            <span className="stepLabel">Personal Information</span>
          </div>
          <div className="step">
            <span className="stepNumber">2</span>
            <span className="stepLabel">Billing Details</span>
          </div>
          <div className="step">
            <span className="stepNumber">3</span>
            <span className="stepLabel">Calendar Generator</span>
          </div>
          <div className="step">
            <span className="stepNumber">4</span>
            <span className="stepLabel">Completed!</span>
          </div>
        </div>
        <form>
          <div className="formContainer">
            <div className="leftColumn">
              <div className="formSection">
                <h2>Personal Information</h2>
                <div className="formGroup">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Full Name" required />
                </div>
                <div className="formGroup">
                  <label>Age</label>
                  <input type="number" name="age" placeholder="How old are you?" min="16" required />
                </div>
                <div className="formGroup">
                  <label>Gender</label>
                  <select name="gender" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
                <div className="formGroup">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="something@something.com" required />
                </div>
              </div>
              <div className="formSection">
                <h2>Current Physical Status & Goals</h2>
                <div className="formGrid">
                  <div className="formGroup">
                    <label>Weight</label>
                    <select name="weight" required>
                      <option value="">Select Weight Range</option>
                      <option value="130">Under 130 lbs</option>
                      <option value="130-140">130-140 lbs</option>
                      <option value="141-150">141-150 lbs</option>
                      <option value="151-160">151-160 lbs</option>
                      <option value="161-170">161-170 lbs</option>
                      <option value="171-180">171-180 lbs</option>
                      <option value="181-190">181-190 lbs</option>
                      <option value="191-200">191-200 lbs</option>
                      <option value="201-210">201-210 lbs</option>
                      <option value="211-220">211-220 lbs</option>
                      <option value="221-230">221-230 lbs</option>
                      <option value="231-240">231-240 lbs</option>
                      <option value="241-250">241-250 lbs</option>
                      <option value="251-260">251-260 lbs</option>
                      <option value="261-270">261-270 lbs</option>
                      <option value="271-280">271-280 lbs</option>
                      <option value="281-290">281-290 lbs</option>
                      <option value="291-300">291-300 lbs</option>
                      <option value="301-310">301-310 lbs</option>
                      <option value="311-320">311-320 lbs</option>
                      <option value="321-330">321-330 lbs</option>
                      <option value="331-340">331-340 lbs</option>
                      <option value="341-350">341-350 lbs</option>
                      <option value="351-360">351-360 lbs</option>
                      <option value="361-370">361-370 lbs</option>
                      <option value="371-380">371-380 lbs</option>
                      <option value="381-390">381-390 lbs</option>
                      <option value="391-400">391-400 lbs</option>
                      <option value="400+">400+ lbs</option>
                    </select>
                  </div>
                  <div className="formGroup">
                    <label>Height</label>
                    <select name="height" required>
                      <option value="">Select Height Range</option>
                      <option value="5'0-5'2">Smaller than 5'0"</option>
                      <option value="5'0-5'2">5'0" - 5'2"</option>
                      <option value="5'3-5'5">5'3" - 5'5"</option>
                      <option value="5'6-5'8">5'6" - 5'8"</option>
                      <option value="5'9-5'11">5'9" - 5'11"</option>
                      <option value="6'0-6'2">6'0" - 6'2"</option>
                      <option value="6'3-6'5">6'3" - 6'5"</option>
                      <option value="6'6-6'8">6'6" - 6'8"</option>
                      <option value="6'9-6'11">6'9" - 6'11"</option>
                      <option value="6'9-6'11">Taller than 7'0"</option>
                    </select>
                  </div>
                  <div className="formGroup">
                    <label>Target Weight</label>
                    <select name="targetWeight" required>
                      <option value="">What is your target weight?</option>
                      <option value="130">Under 130 lbs</option>
                      <option value="130-140">130-140 lbs</option>
                      <option value="141-150">141-150 lbs</option>
                      <option value="151-160">151-160 lbs</option>
                      <option value="161-170">161-170 lbs</option>
                      <option value="171-180">171-180 lbs</option>
                      <option value="181-190">181-190 lbs</option>
                      <option value="191-200">191-200 lbs</option>
                      <option value="201-210">201-210 lbs</option>
                      <option value="211-220">211-220 lbs</option>
                      <option value="221-230">221-230 lbs</option>
                      <option value="231-240">231-240 lbs</option>
                      <option value="241-250">241-250 lbs</option>
                      <option value="251-260">251-260 lbs</option>
                      <option value="261-270">261-270 lbs</option>
                      <option value="271-280">271-280 lbs</option>
                      <option value="281-290">281-290 lbs</option>
                      <option value="291-300">291-300 lbs</option>
                      <option value="301-310">301-310 lbs</option>
                      <option value="311-320">311-320 lbs</option>
                      <option value="321-330">321-330 lbs</option>
                      <option value="331-340">331-340 lbs</option>
                      <option value="341-350">341-350 lbs</option>
                      <option value="351-360">351-360 lbs</option>
                      <option value="361-370">361-370 lbs</option>
                      <option value="371-380">371-380 lbs</option>
                      <option value="381-390">381-390 lbs</option>
                      <option value="391-400">391-400 lbs</option>
                      <option value="400+">400+ lbs</option>
                    </select>
                  </div>
                  <div className="formGroup">
                    <label>Primary Fitness Goal</label>
                    <select name="primaryFitnessGoal" required>
                      <option value="">Select Fitness Goal</option>
                      <option value="weight-loss">Weight Loss</option>
                      <option value="muscle-gain">Muscle Gain</option>
                      <option value="endurance">Endurance</option>
                      <option value="flexibility">Flexibility</option>
                    </select>
                  </div>
                  <div className="formGroup fullWidth">
                    <label>Preferred Workout Type</label>
                    <select name="preferredWorkoutType" required>
                      <option value="">Select Workout Type</option>
                      <option value="cardio">Cardio</option>
                      <option value="strength-training">Strength Training</option>
                      <option value="yoga">Yoga</option>
                      <option value="mixed">Mixed</option>
                    </select>
                  </div>
                  <div className="formGroup fullWidth">
                    <label>Trainer</label>
                    <select name="trainer" required>
                        <option value="">Who would you like to be your Trainer?</option>
                        <option value="cole">Cole Johnson (Cardio Trainer)</option>
                        <option value="mark">Mark Tucker (Strength Trainer)</option>
                        <option value="marie">Marie Saab (Yoga Trainer)</option>
                    </select>
                  </div>
                </div>
                <div className="buttonContainer">
                  <button type="button" className="backButton" onClick={handleBackClick}>Back</button>
                </div>
              </div>
            </div>
            <div className="rightColumn">
              <div className="logoContainer">
                <img src={logo} alt="Fit4Life Logo" />
              </div>
              <div className="formSection1">
                <h2>Lifestyle, Habits and Motivation</h2>
                <div className="formGroup1">
                  <label>Dietary Preferences</label>
                  <select name="dietaryPreferences" required>
                    <option value="">Select Dietary Preference</option>
                    <option value="none">None</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="gluten-free">Gluten-Free</option>
                    <option value="keto">Keto</option>
                  </select>
                </div>
                <div className="formGroup1">
                  <label>Exercise Frequency</label>
                  <input type="number" name="exerciseFrequency" placeholder="How many times a week do you currently exercise?" min="0" required />
                </div>
                <div className="formGroup1">
                  <label>Available Days</label>
                  <select name="availableDays" required>
                    <option value="">When are you available during the week?</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Weekends">Weekends</option>
                    <option value="Everyday">Everyday</option>
                  </select>
                </div>
                <div className="formGroup2">
                  <label>Available Time</label>
                  <select name="availableTime" required>
                    <option value="">When are you available?</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
                <div className="buttonContainer1">
                  <button type="submit" className="nextStepButton" onClick={handleNextClick}>Next Step</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step1Form;
