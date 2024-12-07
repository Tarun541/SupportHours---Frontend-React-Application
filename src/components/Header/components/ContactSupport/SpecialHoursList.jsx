import React from 'react';
import './SpecialHoursList.css';

const SpecialHoursList = ({ onClose }) => {
  // Hardcoded special hours data (simulating backend response)
  const specialHours = [
    {
      id: 1,
      startDate: '2024-03-25',
      endDate: '2024-03-26',
      startTime: '10:00 AM',
      endTime: '4:00 PM'
    },
    {
      id: 2,
      startDate: '2024-04-01',
      endDate: '2024-04-02',
      startTime: '9:00 AM',
      endTime: '5:00 PM'
    }
  ];

  return (
    <div className="special-hours-list">
      <div className="list-header">
        <h3>Special Hours</h3>
        <button className="close-btn" onClick={onClose}>&times;</button>
      </div>
      <div className="list-content">
        {specialHours.map(hours => (
          <div key={hours.id} className="special-hours-item">
            <div className="dates-column">
              <div className="date-group">
                <span className="date-label">Start Date:</span>
                <span className="date-value">{hours.startDate}</span>
              </div>
              <div className="date-group">
                <span className="date-label">End Date:</span>
                <span className="date-value">{hours.endDate}</span>
              </div>
            </div>
            <div className="timing-row">
              <div className="timing-group">
                <span className="timing-label">Timings:</span>
                <span className="timing-value">
                  {`${hours.startTime} - ${hours.endTime}`}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialHoursList; 