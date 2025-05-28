import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="contact-info">
          <span className="contact-item">
          <i class="fa-solid fa-phone-volume"></i> +91 7891731414
          </span>
          <span className="contact-item">
            <i className="fas fa-envelope"></i>support@cybertizegrowth.com
          </span>
        </div>
        <div className="social-links">
          <a href="https://wa.me/917891731414" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;