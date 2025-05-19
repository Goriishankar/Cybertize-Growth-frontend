import { Link } from 'react-router-dom';
import metaAdsImage1 from '../assets/meta-ads1.jpg'; // Meta Ads image 1
import metaAdsImage2 from '../assets/meta-ads2.jpg'; // Meta Ads image 2
import metaAdsImage3 from '../assets/meta-ads3.jpg'; // Meta Ads image 3
import metaAdsImage4 from '../assets/meta-ads4.jpg'; // Meta Ads image 4
import '../styles/meta-ads.css';

function MetaAds() {
  return (
    <div>
      {/* Section 1: Meta Ads Campaign Setup (Image Left, Content Right) */}
      <div className="metaads-row">
        <div className="metaads-image-col">
          <img className="metaads-image" src={metaAdsImage1} alt="Meta Ads Campaign Setup" />
        </div>
        <div className="metaads-content-col">
          <h1>Meta Ads Campaign Setup</h1>
          <p>
            We create targeted Meta Ads campaigns on platforms like Facebook and Instagram to reach your ideal audience. Our strategies are designed to drive engagement, leads, and conversions effectively.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 2: Audience Targeting & Segmentation (Image Right, Content Left) */}
      <div className="metaads-row reverse">
        <div className="metaads-content-col">
          <h1>Audience Targeting & Segmentation</h1>
          <p>
            Our team uses advanced audience targeting and segmentation to ensure your Meta Ads reach the right people. We optimize for demographics, interests, and behaviors to maximize campaign performance.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="metaads-image-col">
          <img className="metaads-image" src={metaAdsImage2} alt="Audience Targeting & Segmentation" />
        </div>
      </div>

      {/* Section 3: Creative Ad Design (Image Left, Content Right) */}
      <div className="metaads-row">
        <div className="metaads-image-col">
          <img className="metaads-image" src={metaAdsImage3} alt="Creative Ad Design" />
        </div>
        <div className="metaads-content-col">
          <h1>Creative Ad Design</h1>
          <p>
            We design visually stunning and compelling ads for Meta platforms that capture attention. Our creative solutions ensure your ads resonate with your audience and drive higher click-through rates.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 4: Performance Analysis & Optimization (Image Right, Content Left) */}
      <div className="metaads-row reverse">
        <div className="metaads-content-col">
          <h1>Performance Analysis & Optimization</h1>
          <p>
            Monitor and improve your Meta Ads performance with our in-depth analysis and optimization services. We provide insights to enhance ad efficiency, ensuring better ROI and campaign success.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="metaads-image-col">
          <img className="metaads-image" src={metaAdsImage4} alt="Performance Analysis & Optimization" />
        </div>
      </div>
    </div>
  );
}

export default MetaAds;