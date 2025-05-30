import ceoImage from '../assets/ceo-image.webp';
import '../styles/ceo-notes.css';

function CeoNotes() {
  return (
    <section className="ceo-notes-section">
      <div className="ceo-notes-content">
        <div className="ceo-text">
          <h2>Notes from Our CEO</h2>
          <p>
            Welcome to Cybertize Growth, where we empower businesses with innovative digital solutions. As CEO, I am committed to driving your success through our expertise in web development, SEO, and digital marketing, building a partnership that fuels your growth.
          </p>
          <div className="signature">
            <span className="signature-name">Mukul Poonia</span>
            <span className="signature-title">Founder & CEO</span>
          </div>
        </div>
        <div className="ceo-image">
          <div className="gradient-bg"></div>
          <img src={ceoImage} alt="CEO" />
        </div>
      </div>
    </section>
  );
}

export default CeoNotes;