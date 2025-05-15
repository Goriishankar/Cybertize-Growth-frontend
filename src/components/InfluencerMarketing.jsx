import { Link } from 'react-router-dom';
import influencerMarketingImage1 from '../assets/influencer-marketing1.png'; // Influencer Marketing image 1
import influencerMarketingImage2 from '../assets/influencer-marketing1.png'; // Influencer Marketing image 2
import influencerMarketingImage3 from '../assets/influencer-marketing1.png'; // Influencer Marketing image 3
import influencerMarketingImage4 from '../assets/influencer-marketing1.png'; // Influencer Marketing image 4
import '../styles/influencer-marketing.css';

function InfluencerMarketing() {
  return (
    <div>
      {/* Section 1: Influencer Partnership Strategy (Image Left, Content Right) */}
      <div className="influencermarketing-row">
        <div className="influencermarketing-image-col">
          <img className="influencermarketing-image" src={influencerMarketingImage1} alt="Influencer Partnership Strategy" />
        </div>
        <div className="influencermarketing-content-col">
          <h1>Influencer Partnership Strategy</h1>
          <p>
            We develop strategic influencer partnerships to amplify your brand’s reach. Our tailored approach connects you with the right influencers to engage your target audience authentically.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 2: Influencer Campaign Management (Image Right, Content Left) */}
      <div className="influencermarketing-row reverse">
        <div className="influencermarketing-content-col">
          <h1>Influencer Campaign Management</h1>
          <p>
            Our team manages your influencer campaigns from start to finish. We handle negotiations, content creation, and performance tracking to ensure a seamless and successful campaign.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="influencermarketing-image-col">
          <img className="influencermarketing-image" src={influencerMarketingImage2} alt="Influencer Campaign Management" />
        </div>
      </div>

      {/* Section 3: Content Collaboration with Influencers (Image Left, Content Right) */}
      <div className="influencermarketing-row">
        <div className="influencermarketing-image-col">
          <img className="influencermarketing-image" src={influencerMarketingImage3} alt="Content Collaboration with Influencers" />
        </div>
        <div className="influencermarketing-content-col">
          <h1>Content Collaboration with Influencers</h1>
          <p>
            We collaborate with influencers to create authentic and engaging content for your brand. This ensures your message resonates with their followers, driving trust and conversions.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 4: Performance Tracking & Reporting (Image Right, Content Left) */}
      <div className="influencermarketing-row reverse">
        <div className="influencermarketing-content-col">
          <h1>Performance Tracking & Reporting</h1>
          <p>
            We track the performance of your influencer campaigns with detailed analytics. Our reports provide insights to measure impact and optimize future collaborations for better results.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="influencermarketing-image-col">
          <img className="influencermarketing-image" src={influencerMarketingImage4} alt="Performance Tracking & Reporting" />
        </div>
      </div>
    </div>
  );
}

export default InfluencerMarketing;