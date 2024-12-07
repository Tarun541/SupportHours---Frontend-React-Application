import React, { useState, useRef, useEffect } from 'react';
import SupportModal from './SupportModal';
import './ContactSupport.css';

const ContactSupport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current && 
        !modalRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="contact-support">
      <button 
        className="support-btn"
        ref={buttonRef}
        onClick={() => setIsModalOpen(!isModalOpen)}
        onMouseEnter={() => setIsModalOpen(true)}
      >
        Contact Support
      </button>

      {isModalOpen && <SupportModal ref={modalRef} />}
    </div>
  );
};

export default ContactSupport; 