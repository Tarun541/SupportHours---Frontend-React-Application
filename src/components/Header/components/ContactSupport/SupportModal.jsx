import React, { forwardRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaComments, FaSms, FaUserCircle } from 'react-icons/fa';
import SpecialHoursForm from './SpecialHoursForm';
import SpecialHoursList from './SpecialHoursList';
import './SupportModal.css';
import supportprofile from '../../../../assets/images/image.png';

const SupportModal = forwardRef((props, ref) => {
  const [showSpecialHoursForm, setShowSpecialHoursForm] = useState(false);
  const [showSpecialHoursList, setShowSpecialHoursList] = useState(false);

  if (showSpecialHoursForm) {
    return (
      <div className="support-modal" ref={ref}>
        <SpecialHoursForm onClose={() => setShowSpecialHoursForm(false)} />
      </div>
    );
  }

  if (showSpecialHoursList) {
    return (
      <div className="support-modal" ref={ref}>
        <SpecialHoursList onClose={() => setShowSpecialHoursList(false)} />
      </div>
    );
  }

  return (
    <div className="support-modal" ref={ref}>
      <div className="modal-content">
        <WelcomeSection />
        <ContactDetails />
        <SupportHours 
          onAddSpecialHours={() => setShowSpecialHoursForm(true)}
          onViewSpecialHours={() => setShowSpecialHoursList(true)}
        />
      </div>
    </div>
  );
});

const WelcomeSection = () => (
  <div className="welcome-section">
    <div className="welcome-header">
      <div className="person-image">
        <img src={supportprofile} alt="Support" />
      </div>
      <h3>Questions?</h3>
    </div>
    <p className="welcome-message">
      Our Customer Support will be<br />
      opening late today. We apologize<br />
      for any inconvenience.
    </p>
  </div>
);

const ContactDetails = () => (
  <div className="contact-details">
    <h3>Contact Us</h3>
    <div className="contact-item">
      <FaEnvelope />
      <span>support@example.com</span>
    </div>
    <div className="contact-item">
      <FaPhone />
      <span>1-800-123-4567</span>
    </div>
    <div className="contact-item">
      <FaComments />
      <span>Live Chat</span>
    </div>
    <div className="contact-item">
      <FaSms />
      <span>Text Support</span>
    </div>
  </div>
);

const SupportHours = ({ onAddSpecialHours, onViewSpecialHours }) => (
  <div className="support-hours">
    <h3>Support Hours</h3>
    <div className="hours-item special">
      <span className="days">Special Hours</span>
      <span className="time">9:00 AM - 5:00 PM</span>
    </div>
    <div className="hours-item regular">
      <span className="days">Mon-Thu</span>
      <span className="time">9:00 AM - 8:00 PM</span>
    </div>
    <div className="hours-item regular">
      <span className="days">Fri</span>
      <span className="time">9:00 AM - 6:00 PM</span>
    </div>
    <div className="hours-item regular">
      <span className="days">Sat-Sun</span>
      <span className="time">10:00 AM - 4:00 PM</span>
    </div>
    <div className="special-hours-buttons">
      <button onClick={onAddSpecialHours}>Add Special Hours</button>
      <button onClick={onViewSpecialHours}>View All Special Hours</button>
    </div>
  </div>
);

export default SupportModal; 