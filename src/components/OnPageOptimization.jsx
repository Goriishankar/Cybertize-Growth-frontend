import { Link } from 'react-router-dom';
import seoImage1 from '../assets/seo1.png'; // On-Page Optimization image
import seoImage2 from '../assets/seo2.png'; // Off-Page Optimization image
import seoImage3 from '../assets/seo1.png'; // Keywords Strategy image
import seoImage4 from '../assets/seo1.png'; // New section image
import '../styles/on-page-optimization.css';

function OnPageOptimization() {
  return (
    <div>
      {/* Section 1: On-Page Optimization (Image Left, Content Right) */}
      <div className="optimization-row">
        <div className="optimization-image-col">
          <img className="optimization-image" src={seoImage1} alt="Social2" />
        </div>
        <div className="optimization-content-col">
          <h1>On-Page Optimization</h1>
          <p>
            The role here is played by Meta tags, Meta description, page title, URL structure, keyword density and H1 – H6 tags. Once you optimize them frequently, then you can improve the search ranking results of your website on the search engine as well. To get more relevant traffic on your web pages, we highly recommend On-Page optimization activities while keeping up with the latest trends and updates.
          </p>
          <Link to="/Contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 2: Off-Page Optimization (Image Right, Content Left) */}
      <div className="optimization-row reverse">
        <div className="optimization-content-col">
          <h1>Off-Page Optimization</h1>
          <p>
            Off-Page Optimization involves activities like link building, social media marketing, and influencer outreach to boost your website's authority. By focusing on high-quality backlinks and social signals, we enhance your site's credibility and improve its ranking on search engines, driving more organic traffic to your business.
          </p>
          <Link to="/Contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="optimization-image-col">
          <img className="optimization-image" src={seoImage2} alt="Off-Page Optimization" />
        </div>
      </div>

      {/* Section 3: Keywords Strategy (Image Left, Content Right) */}
      <div className="optimization-row">
        <div className="optimization-image-col">
          <img className="optimization-image" src={seoImage3} alt="Keywords Strategy" />
        </div>
        <div className="optimization-content-col">
          <h1>Keywords Strategy</h1>
          <p>
            A robust keywords strategy ensures your content aligns with what your audience is searching for. We conduct in-depth keyword research to identify high-intent terms, optimizing your website to rank higher and attract the right traffic, ultimately boosting conversions.
          </p>
          <Link to="/Contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 4: Technical SEO (Image Right, Content Left) */}
      <div className="optimization-row reverse">
        <div className="optimization-content-col">
          <h1>Technical SEO</h1>
          <p>
            Technical SEO focuses on improving your website's backend structure, including site speed, mobile responsiveness, and crawlability. Our experts ensure your site is optimized for search engines, providing a seamless user experience that enhances rankings and user satisfaction.
          </p>
          <Link to="/Contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="optimization-image-col">
          <img className="optimization-image" src={seoImage4} alt="Technical SEO" />
        </div>
      </div>
    </div>
  );
}

export default OnPageOptimization;