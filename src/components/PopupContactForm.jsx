import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/popup-contact-form.css';

function PopupContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    website: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  // 10 seconds ke baad popup dikhayi de
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData, {
        withCredentials: true,
      });
      setStatus('Message sent successfully!');
      setFormData({ fullName: '', contactNumber: '', email: '', website: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-contact-form-overlay">
          <div className="popup-contact-form">
            <div className="popup-contact-form-header">
              <h3>Contact Us</h3>
              <span className="close-icon" onClick={handleClose}>
                <i className="fas fa-times"></i>
              </span>
            </div>
            <form className="popup-contact-form-content" onSubmit={handleSubmit}>
              <div className="custom-row">
                <div className="form-outline col-lg-12">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name*"
                    required
                  />
                </div>
                <div className="form-outline col-50">
                  <input
                    type="text"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Contact Number*"
                    required
                  />
                </div>
                <div className="form-outline col-50">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    required
                  />
                </div>
                <div className="form-outline col-lg-12">
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Website*"
                    required
                  />
                </div>
                <div className="form-outline col-lg-12">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message*"
                    rows="4" // Reduced rows for compactness
                    required
                  ></textarea>
                </div>
                <div className="form-submit">
                  <button type="submit" className="submit-button">Send Message ❯</button>
                </div>
              </div>
              {status && <p className="status-message">{status}</p>}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default PopupContactForm;