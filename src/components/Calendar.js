import React from 'react';
import './Calendar.css';
import { useNavigate } from 'react-router-dom';

const CalendarPage = () => {
  const navigate = useNavigate();
  const daysInMonth = 30;
  const tasks = [
    { type: 'Fitness', details: 'Legs', trainer: 'Mark Tucker' },
    { type: 'Cardio', details: 'Running', trainer: 'Cole Johnson' },
    { type: 'Yoga', details: 'Vinyasa Yoga', trainer: 'Marie Saab' },
    { type: 'Fitness', details: 'Push Day', trainer: 'Mark Tucker' },
    { type: 'Cardio', details: 'Stair Master', trainer: 'Cole Johnson' },
    { type: 'Yoga', details: 'Iyengar Yoga', trainer: 'Marie Saab' },
    { type: 'Fitness', details: 'Pull Day', trainer: 'Mark Tucker' },
    { type: 'Cardio', details: 'Jump Rope', trainer: 'Cole Johnson' },
    { type: 'Yoga', details: 'Hatha Yoga', trainer: 'Marie Saab' },
  ];

  const getTaskForDay = (day, dayOfWeek) => {
    if (dayOfWeek === 0 || dayOfWeek === 1) {
      return { type: 'REST DAY', details: '', trainer: '' };
    }
    const taskIndex = (day - 1) % tasks.length;
    return tasks[taskIndex];
  };

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(2024, 6, i); // July 2024
      const dayOfWeek = date.getDay();
      const task = getTaskForDay(i, dayOfWeek);

      days.push(
        <td key={i} className="calendar-cell">
          <span className="calendar-day-number">{i}</span>
          <span className="calendar-task-type">{task.type}</span>
          {task.details && <span className="calendar-task-details">{task.details}</span>}
          {task.trainer && <span className="calendar-trainer">{task.trainer}</span>}
        </td>
      );
    }
    return days;
  };

  const handleBackClick = () => {
    navigate('/checkout');
  };

  const handleCompleteClick = () => {
    navigate('/completed');
  };

  const weeks = [];
  const days = renderDays();
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(<tr className="calendar-row" key={i}>{days.slice(i, i + 7)}</tr>);
  }

  return (
    <div className="completed">
      <div className="progress-bar">
        <div className="step active">
          <span className="step-number">1</span>
          <span className="step-label">Personal Information</span>
        </div>
        <div className="step active">
          <span className="step-number">2</span>
          <span className="step-label">Billing Details</span>
        </div>
        <div className="step active">
          <span className="step-number">3</span>
          <span className="step-label">Calendar Generator</span>
        </div>
        <div className="step active1">
          <span className="step-number">4</span>
          <span className="step-label">Completed!</span>
        </div>
      </div>
      <h2>July 2024</h2>
      <div className="calendar-container">
        <table className="calendar-table">
          <thead>
            <tr className="calendar-row">
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {weeks}
          </tbody>
        </table>
      </div>
      <div className="calendar-button-container">
        <button className="calendar-back-button" onClick={handleBackClick}>Back</button>
        <button className="calendar-complete-button" onClick={handleCompleteClick}>Complete</button>
      </div>
      <div className="calendar-message">
        <p>If there's any issue with the calendar, you can always give us a call or come see us. We would love to see you!</p>
      </div>
    </div>
  );
};

export default CalendarPage;
