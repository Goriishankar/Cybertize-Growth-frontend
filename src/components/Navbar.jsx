import { useState } from 'react'; // Added useState import
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/navbar.css';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <NavLink to="/">
            <img src={logo} alt="AC Logo" className="navbar-logo" />
          </NavLink>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ||
                location.pathname === '/web-development' ||
                location.pathname === '/web-design' ||
                location.pathname === '/app-development' ||
                location.pathname === '/ios-development' ||
                location.pathname === '/OnPageOptimization' ||
                location.pathname === '/smm' ||
                location.pathname === '/google-ads' ||
                location.pathname === '/meta-ads' ||
                location.pathname === '/content-creation' ||
                location.pathname === '/site-audit' ||
                location.pathname === '/influencer-marketing' ||
                location.pathname === '/email-marketing'
                  ? 'active'
                  : ''
              }
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-work-page"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              Our Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ClientsFirst"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => ('contact-button')} 
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;