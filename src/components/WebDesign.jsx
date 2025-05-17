import { Link } from 'react-router-dom';
import webDesignImage1 from '../assets/web-design1.webp'; // Web Design image 1
import webDesignImage2 from '../assets/web-design2.webp'; // Web Design image 2
import webDesignImage3 from '../assets/web-design3.webp'; // Web Design image 3
import webDesignImage4 from '../assets/web-design4.webp'; // Web Design image 4
import '../styles/web-design.css';

function WebDesign() {
  return (
    <div>
      {/* Section 1: UI/UX Design (Image Left, Content Right) */}
      <div className="webdesign-row">
        <div className="webdesign-image-col">
          <img className="webdesign-image" src={webDesignImage1} alt="UI/UX Design" />
        </div>
        <div className="webdesign-content-col">
          <h1>UI/UX Design</h1>
          <p>
            We craft intuitive and visually appealing UI/UX designs that enhance user satisfaction. Our designs focus on seamless navigation and engaging interfaces, ensuring your website leaves a lasting impression on visitors.
          </p>
          <Link to="/Contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 2: Branding & Identity (Image Right, Content Left) */}
      <div className="webdesign-row reverse">
        <div className="webdesign-content-col">
          <h1>Branding & Identity</h1>
          <p>
            Our branding and identity design services help your business stand out with a cohesive visual identity. From logos to color schemes, we create designs that reflect your brand’s personality and connect with your audience.
          </p>
          <Link to="/Contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="webdesign-image-col">
          <img className="webdesign-image" src={webDesignImage2} alt="Branding & Identity" />
        </div>
      </div>

      {/* Section 3: Graphic Design (Image Left, Content Right) */}
      <div className="webdesign-row">
        <div className="webdesign-image-col">
          <img className="webdesign-image" src={webDesignImage3} alt="Graphic Design" />
        </div>
        <div className="webdesign-content-col">
          <h1>Graphic Design</h1>
          <p>
            We provide high-quality graphic design services to create stunning visuals for your website. From banners to icons, our designs are crafted to capture attention and communicate your message effectively.
          </p>
          <Link to="/Contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 4: Website Redesign (Image Right, Content Left) */}
      <div className="webdesign-row reverse">
        <div className="webdesign-content-col">
          <h1>Website Redesign</h1>
          <p>
            Revamp your outdated website with our redesign services. We modernize your site’s look and functionality, ensuring it aligns with current trends, improves user experience, and drives better engagement.
          </p>
          <Link to="/Contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="webdesign-image-col">
          <img className="webdesign-image" src={webDesignImage4} alt="Website Redesign" />
        </div>
      </div>
    </div>
  );
}

export default WebDesign;