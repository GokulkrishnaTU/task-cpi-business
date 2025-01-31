import React from 'react';
import './hero.css';
import MenuAppBar from '../header/header';

function Hero() {
  return (
    <div className='hero-wrapper'>
      {/* Navigation Bar */}
      <MenuAppBar className='nav' />

      {/* Hero Section */}
      <div className='hero-container'>
        <div className='first-section'>
          <h1 className='arabic'>التعليم أولاً</h1>
          <h1>EDUCATION FIRST</h1>
        </div>
        <p className='subheading'>FROM ASK TO ACTION</p>

        {/* Register Button (visible on mobile) */}
        <button className='register-btn-desktop'>Register Now</button>

        {/* Event Details */}
        <div className='details'>
          <div>
            <img src='/hero/Vector (1).png' alt='Date Icon' className='iconsImg' />
            <span>January 24, 2023</span>
          </div>
          <div>
            <img src='/hero/clock-history.png' alt='Time Icon' className='iconsImg' />
            <span>10:00 AM - 12:00 PM</span>
          </div>
          <div>
            <img src='/hero/calendar2-week.png' alt='Location Icon' className='iconsImg' />
            <span>Marina Hall, ADNEC</span>
          </div>
        </div>
      </div>

      {/* Hero Shade */}
      <img src='/hero/shadeHero.png' className='heroShade' alt='Hero Shade' />
    </div>
  );
}

export default Hero;
