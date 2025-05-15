import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-column footer-logo">
          <Link to="/">
            <img src={logo} alt="AC Logo" className="footer-logo-img" />
          </Link>
          <p className="copyright">© Copyright 2025, All rights reserved</p>
        </div>
        <div className="footer-column footer-contact">
          <h4>Contact Us</h4>
          <p>+91 7891731414</p>
          <p>
            <a href="/" target="_blank" rel="noopener noreferrer">
              www.cybertizegrowth.com
            </a>
          </p>
          <p>Send Emails to: <a href="/">cryptomuku@gmail.com</a></p>
          <p>#03, Mp colony BKN</p>
        </div>
        <div className="footer-column footer-links">
          <h4>Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/our-work-page">Our Work</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/ClientsFirst">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-column footer-guide">
          <h4>Guide</h4>
          <ul>
            <li><Link to="/terms">Term & Condition</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
          <div className="social-icons">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;