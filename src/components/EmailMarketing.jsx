import { Link } from 'react-router-dom';
import emailMarketingImage1 from '../assets/email-marketing1.jpg'; // Email Marketing image 1
import emailMarketingImage2 from '../assets/email-marketing2.jpg'; // Email Marketing image 2
import emailMarketingImage3 from '../assets/email-marketing3.jpg'; // Email Marketing image 3
import emailMarketingImage4 from '../assets/email-marketing4.jpg'; // Email Marketing image 4
import '../styles/email-marketing.css';

function EmailMarketing() {
  return (
    <div>
      {/* Section 1: Email Campaign Strategy (Image Left, Content Right) */}
      <div className="emailmarketing-row">
        <div className="emailmarketing-image-col">
          <img className="emailmarketing-image" src={emailMarketingImage1} alt="Email Campaign Strategy" />
        </div>
        <div className="emailmarketing-content-col">
          <h1>Email Campaign Strategy</h1>
          <p>
            We design targeted email marketing strategies to nurture leads and drive conversions. Our campaigns are tailored to your audience, ensuring high open rates and engagement.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 2: Email Design & Content Creation (Image Right, Content Left) */}
      <div className="emailmarketing-row reverse">
        <div className="emailmarketing-content-col">
          <h1>Email Design & Content Creation</h1>
          <p>
            Our team creates visually appealing and personalized email designs with compelling content. We ensure your emails stand out in inboxes, encouraging clicks and conversions.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="emailmarketing-image-col">
          <img className="emailmarketing-image" src={emailMarketingImage2} alt="Email Design & Content Creation" />
        </div>
      </div>

      {/* Section 3: Email Automation Setup (Image Left, Content Right) */}
      <div className="emailmarketing-row">
        <div className="emailmarketing-image-col">
          <img className="emailmarketing-image" src={emailMarketingImage3} alt="Email Automation Setup" />
        </div>
        <div className="emailmarketing-content-col">
          <h1>Email Automation Setup</h1>
          <p>
            We set up automated email workflows to engage your audience at the right time. From welcome series to abandoned cart emails, our automation boosts efficiency and results.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 4: Performance Analytics & Reporting (Image Right, Content Left) */}
      <div className="emailmarketing-row reverse">
        <div className="emailmarketing-content-col">
          <h1>Performance Analytics & Reporting</h1>
          <p>
            Track your email campaigns with our detailed analytics and reporting. We provide insights on open rates, click-through rates, and conversions to optimize future campaigns.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="emailmarketing-image-col">
          <img className="emailmarketing-image" src={emailMarketingImage4} alt="Performance Analytics & Reporting" />
        </div>
      </div>
    </div>
  );
}

export default EmailMarketing;