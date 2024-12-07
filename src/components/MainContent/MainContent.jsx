import React from 'react';
import mainImage from '../../assets/images/homepageimage.png';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="image-container">
        <img src={mainImage} alt="TradeMaster Program" className="main-image" />
      </div>
      <div className="company-description">
        <div className="description-content">
          <h2>Your Trusted Partner in Plumbing & HVAC Solutions</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Quality Products</h3>
              <p>Access our extensive inventory of premium plumbing and HVAC supplies from industry-leading manufacturers.</p>
            </div>
            <div className="service-item">
              <h3>Expert Support</h3>
              <p>Our dedicated team of professionals provides technical expertise and personalized assistance for all your project needs.</p>
            </div>
            <div className="service-item">
              <h3>Fast Delivery</h3>
              <p>Enjoy reliable shipping with real-time tracking and next-day delivery options to keep your projects on schedule.</p>
            </div>
            <div className="service-item">
              <h3>Trade Benefits</h3>
              <p>Join our TradeMaster program for exclusive pricing, priority support, and specialized tools to grow your business.</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact</h4>
            <p>1-888-757-4774</p>
            <p>support@supplyhouse.com</p>
          </div>
          <div className="footer-section">
            <h4>Location</h4>
            <p>SupplyHouse.com</p>
            <p>New York, USA</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SupplyHouse.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainContent; 