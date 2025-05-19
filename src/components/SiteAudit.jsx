import { Link } from 'react-router-dom';
import siteAuditImage1 from '../assets/site-audit1.jpg'; // Site Audit image 1
import siteAuditImage2 from '../assets/site-audit2.jpg'; // Site Audit image 2
import siteAuditImage3 from '../assets/site-audit3.jpg'; // Site Audit image 3
import siteAuditImage4 from '../assets/site-audit4.jpg'; // Site Audit image 4
import '../styles/site-audit.css';

function SiteAudit() {
  return (
    <div>
      {/* Section 1: Comprehensive Site Audit (Image Left, Content Right) */}
      <div className="siteaudit-row">
        <div className="siteaudit-image-col">
          <img className="siteaudit-image" src={siteAuditImage1} alt="Comprehensive Site Audit" />
        </div>
        <div className="siteaudit-content-col">
          <h1>Comprehensive Site Audit</h1>
          <p>
            We conduct in-depth site audits to identify issues affecting your website’s performance. Our detailed analysis covers SEO, usability, and technical aspects to ensure optimal functionality.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 2: SEO Audit & Optimization (Image Right, Content Left) */}
      <div className="siteaudit-row reverse">
        <div className="siteaudit-content-col">
          <h1>SEO Audit & Optimization</h1>
          <p>
            Our SEO audit uncovers gaps in your website’s search engine performance. We provide actionable recommendations to improve rankings, increase organic traffic, and boost visibility.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="siteaudit-image-col">
          <img className="siteaudit-image" src={siteAuditImage2} alt="SEO Audit & Optimization" />
        </div>
      </div>

      {/* Section 3: Technical Performance Analysis (Image Left, Content Right) */}
      <div className="siteaudit-row">
        <div className="siteaudit-image-col">
          <img className="siteaudit-image" src={siteAuditImage3} alt="Technical Performance Analysis" />
        </div>
        <div className="siteaudit-content-col">
          <h1>Technical Performance Analysis</h1>
          <p>
            We analyze your website’s technical performance, including speed, mobile responsiveness, and security. Our insights help enhance user experience and ensure your site runs smoothly.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 4: User Experience Evaluation (Image Right, Content Left) */}
      <div className="siteaudit-row reverse">
        <div className="siteaudit-content-col">
          <h1>User Experience Evaluation</h1>
          <p>
            We evaluate your website’s user experience to identify areas for improvement. From navigation to design, we ensure your site delivers a seamless and engaging experience for visitors.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="siteaudit-image-col">
          <img className="siteaudit-image" src={siteAuditImage4} alt="User Experience Evaluation" />
        </div>
      </div>
    </div>
  );
}

export default SiteAudit;