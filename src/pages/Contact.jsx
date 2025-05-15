import emailIcon from '../assets/email-icon.png';
import whatsappIcon from '../assets/whatsapp-icon.png';
import contactBg from '../assets/contact-bg.png';
import ContactForm from '../components/ContactForm';
import '../styles/contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <div className="custom-row">
        <div className="column column-left">
          <div className="title-wrap">
            <h4 className="title">Request a Free Quote</h4>
          </div>
          <div className="desc-wrap">
            <p>
            Ready to transform your business? Let’s connect and skyrocket your online success with our expert web, SEO, and digital marketing solutions!
            </p>
          </div>
          <div className="social-info">
            <div className="img-box">
              <img src={emailIcon} alt="Email Icon" />
            </div>
            <div className="group">
              <label>Email Us</label>
              <a href="mailto:hello@.com">cryptomuku@gmail.com</a>
            </div>
          </div>
          <div className="social-info">
            <div className="img-box">
              <img src={whatsappIcon} alt="Whatsapp Icon" />
            </div>
            <div className="group">
              <label>Sales & Support</label>
              <a href="/" target="_blank" rel="noopener noreferrer">
                +91 7891731414
              </a>
            </div>
          </div>
        </div>
        <div className="column column-right">
          <figure>
            <img src={contactBg} alt="Contact Background" />
          </figure>
          <div className="form-column">
            <h4 className="title">Contact Us</h4>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;