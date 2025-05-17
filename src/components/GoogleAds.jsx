import { Link } from 'react-router-dom';
import googleAdsImage1 from '../assets/google-ads1.png'; // Google Ads image 1
import googleAdsImage2 from '../assets/google-ads2.png'; // Google Ads image 2
import googleAdsImage3 from '../assets/google-ads3.png'; // Google Ads image 3
import googleAdsImage4 from '../assets/google-ads4.png'; // Google Ads image 4
import '../styles/google-ads.css';

function GoogleAds() {
  return (
    <div>
      {/* Section 1: Google Ads Campaign Setup (Image Left, Content Right) */}
      <div className="googleads-row">
        <div className="googleads-image-col">
          <img className="googleads-image" src={googleAdsImage1} alt="Google Ads Campaign Setup" />
        </div>
        <div className="googleads-content-col">
          <h1>Google Ads Campaign Setup</h1>
          <p>
            We set up high-performing Google Ads campaigns tailored to your business goals. Our experts ensure your ads reach the right audience, driving traffic and conversions effectively.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 2: Keyword Research & Optimization (Image Right, Content Left) */}
      <div className="googleads-row reverse">
        <div className="googleads-content-col">
          <h1>Keyword Research & Optimization</h1>
          <p>
            Our team conducts in-depth keyword research to target high-intent search terms. We optimize your campaigns to reduce costs and maximize ROI by focusing on the most effective keywords.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="googleads-image-col">
          <img className="googleads-image" src={googleAdsImage2} alt="Keyword Research & Optimization" />
        </div>
      </div>

      {/* Section 3: Ad Creation & Design (Image Left, Content Right) */}
      <div className="googleads-row">
        <div className="googleads-image-col">
          <img className="googleads-image" src={googleAdsImage3} alt="Ad Creation & Design" />
        </div>
        <div className="googleads-content-col">
          <h1>Ad Creation & Design</h1>
          <p>
            We craft compelling ad copies and visuals that grab attention and drive clicks. Our creative approach ensures your Google Ads stand out, boosting engagement and conversions.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 4: Performance Tracking & Reporting (Image Right, Content Left) */}
      <div className="googleads-row reverse">
        <div className="googleads-content-col">
          <h1>Performance Tracking & Reporting</h1>
          <p>
            Monitor your Google Ads performance with our detailed tracking and reporting services. We provide actionable insights to refine campaigns and achieve better results over time.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="googleads-image-col">
          <img className="googleads-image" src={googleAdsImage4} alt="Performance Tracking & Reporting" />
        </div>
      </div>
    </div>
  );
}

export default GoogleAds;