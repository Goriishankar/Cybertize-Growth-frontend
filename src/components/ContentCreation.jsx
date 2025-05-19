import { Link } from 'react-router-dom';
import contentCreationImage1 from '../assets/content-creation1.jpg'; // Content Creation image 1
import contentCreationImage2 from '../assets/content-creation2.jpg'; // Content Creation image 2
import contentCreationImage3 from '../assets/content-creation3.jpg'; // Content Creation image 3
import contentCreationImage4 from '../assets/content-creation4.jpg'; // Content Creation image 4
import '../styles/content-creation.css';

function ContentCreation() {
  return (
    <div>
      {/* Section 1: Content Strategy Development (Image Left, Content Right) */}
      <div className="contentcreation-row">
        <div className="contentcreation-image-col">
          <img className="contentcreation-image" src={contentCreationImage1} alt="Content Strategy Development" />
        </div>
        <div className="contentcreation-content-col">
          <h1>Content Strategy Development</h1>
          <p>
            We create comprehensive content strategies tailored to your brand’s goals. Our approach ensures your content resonates with your audience, driving engagement and conversions effectively.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 2: Blog & Article Writing (Image Right, Content Left) */}
      <div className="contentcreation-row reverse">
        <div className="contentcreation-content-col">
          <h1>Blog & Article Writing</h1>
          <p>
            Our team crafts high-quality, SEO-optimized blogs and articles to establish your brand’s authority. We create engaging content that attracts and retains your target audience.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="contentcreation-image-col">
          <img className="contentcreation-image" src={contentCreationImage2} alt="Blog & Article Writing" />
        </div>
      </div>

      {/* Section 3: Visual Content Creation (Image Left, Content Right) */}
      <div className="contentcreation-row">
        <div className="contentcreation-image-col">
          <img className="contentcreation-image" src={contentCreationImage3} alt="Visual Content Creation" />
        </div>
        <div className="contentcreation-content-col">
          <h1>Visual Content Creation</h1>
          <p>
            We produce stunning visuals, including infographics, videos, and images, to enhance your brand’s storytelling. Our creative content captivates your audience and boosts engagement.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 4: Content Distribution & Promotion (Image Right, Content Left) */}
      <div className="contentcreation-row reverse">
        <div className="contentcreation-content-col">
          <h1>Content Distribution & Promotion</h1>
          <p>
            Maximize your content’s reach with our distribution and promotion services. We leverage social media, email marketing, and other channels to ensure your content reaches the right audience.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="contentcreation-image-col">
          <img className="contentcreation-image" src={contentCreationImage4} alt="Content Distribution & Promotion" />
        </div>
      </div>
    </div>
  );
}

export default ContentCreation;