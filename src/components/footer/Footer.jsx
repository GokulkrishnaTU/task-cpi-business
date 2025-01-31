import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter"; // No official X icon, but using Twitter
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2 className="register-heading">Register Now</h2>
        <p className="register-subheading">
          Register now and contribute to shaping the future of education!
        </p>

        <form className="registration-form">
          <div className="form-group">
            <label className="required"  >First Name</label>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label className="required" placeholder="Last Name">Last Name</label>
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

          <div className="RegButton">

          <button type="submit" className="register-button">
            REGISTER NOW
          </button>
          </div>
        </form>
      </div>

        <div className="bottomLabel">
          <a href="http://www.ecae.ac.ae" className="website-link">
            www.ecae.ac.ae
          </a>

          <div className="social-icons">
            <span className="sm-icons">
              <FacebookIcon className="mui-icon" />
            </span>
            <span className="sm-icons">
              <TwitterIcon className="mui-icon" />
            </span>
            <span className="sm-icons">
              <InstagramIcon className="mui-icon" />
            </span>
            <span className="sm-icons">
              <LinkedInIcon className="mui-icon" />
            </span>
            <span className="sm-icons">
              <YouTubeIcon className="mui-icon" />
            </span>
            <span className="sm-icons">
              <LocationOnIcon className="mui-icon" />
            </span>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
