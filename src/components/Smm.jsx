import { Link } from 'react-router-dom';
import smmImage1 from '../assets/smm1.png'; // SMM image 1
import smmImage2 from '../assets/smm1.png'; // SMM image 2
import smmImage3 from '../assets/smm1.png'; // SMM image 3
import smmImage4 from '../assets/smm1.png'; // SMM image 4
import '../styles/smm.css';

function Smm() {
  return (
    <div>
      {/* Section 1: Social Media Strategy (Image Left, Content Right) */}
      <div className="smm-row">
        <div className="smm-image-col">
          <img className="smm-image" src={smmImage1} alt="Social Media Strategy" />
        </div>
        <div className="smm-content-col">
          <h1>Social Media Strategy</h1>
          <p>
            We develop tailored social media strategies to boost your brand’s online presence. Our data-driven approach ensures maximum engagement and growth across platforms like Instagram, Facebook, and Twitter.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 2: Content Creation for Social Media (Image Right, Content Left) */}
      <div className="smm-row reverse">
        <div className="smm-content-col">
          <h1>Content Creation for Social Media</h1>
          <p>
            Our team creates engaging and visually appealing content for your social media channels. From eye-catching graphics to compelling captions, we help you connect with your audience effectively.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="smm-image-col">
          <img className="smm-image" src={smmImage2} alt="Content Creation for Social Media" />
        </div>
      </div>

      {/* Section 3: Social Media Advertising (Image Left, Content Right) */}
      <div className="smm-row">
        <div className="smm-image-col">
          <img className="smm-image" src={smmImage3} alt="Social Media Advertising" />
        </div>
        <div className="smm-content-col">
          <h1>Social Media Advertising</h1>
          <p>
            We run targeted social media ad campaigns on platforms like Facebook, Instagram, and LinkedIn to drive traffic and conversions. Our ads are optimized to maximize ROI and reach your ideal audience.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 4: Analytics & Reporting (Image Right, Content Left) */}
      <div className="smm-row reverse">
        <div className="smm-content-col">
          <h1>Analytics & Reporting</h1>
          <p>
            Track your social media performance with our detailed analytics and reporting services. We provide insights to refine strategies, ensuring continuous growth and engagement for your brand.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="smm-image-col">
          <img className="smm-image" src={smmImage4} alt="Analytics & Reporting" />
        </div>
      </div>
    </div>
  );
}

export default Smm;