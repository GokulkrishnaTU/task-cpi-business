import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
        <div className="footer-content">
            <h2 className="register-heading">Register Now</h2>
            <p className="register-subheading">Register now and contribute to shaping the future of education!</p>
            
            <form className="registration-form">
                <div className="form-group">
                    <label className="required">First Name</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label className="required">Last Name</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label className="required">Gender</label>
                    <select>
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="required">Position</label>
                    <select>
                        <option>Select</option>
                        <option>Teacher</option>
                        <option>Student</option>
                    </select>
                </div>
                <button type="submit" className="register-button">REGISTER NOW</button>
            </form>


            <div className="bottomLabel">


            <a href="http://www.ecae.ac.ae" className="website-link">www.ecae.ac.ae</a>
            
            <div className="social-icons">
                <span>🌟</span>
                <span>😊</span>
                <span>😊</span>
                <span>😊</span>
                <span>😊</span>
                <span>😊</span>
                <span>😊</span>
            </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;