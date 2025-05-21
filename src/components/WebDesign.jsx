import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import webDesignImage1 from '../assets/web-design1.webp'; // Web Design image 1
import webDesignImage2 from '../assets/web-design2.webp'; // Web Design image 2
import webDesignImage3 from '../assets/web-design3.webp'; // Web Design image 3
import webDesignImage4 from '../assets/web-design4.webp'; // Web Design image 4
import '../styles/web-design.css';

function WebDesign() {
  return (
    <div>
      <Helmet>
        <title>Web Design - Digital Marketing Agency in Jhunjhunu | Cybertize Growth</title>
        <meta
          name="description"
          content="Explore top-tier web design services at Cybertize Growth, a leading digital marketing agency in Jhunjhunu. We specialize in UI/UX design, branding, graphic design, and website redesign."
        />
        <meta
          name="keywords"
          content="web design, digital marketing agency in Jhunjhunu, UI/UX design, branding and identity, graphic design, website redesign, digital marketing agency, Cybertize Growth"
        />
        <meta name="author" content="Cybertize Growth Team" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cybertizegrowth.com/web-design" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Web Design - Digital Marketing Agency in Jhunjhunu | Cybertize Growth"
        />
        <meta
          property="og:description"
          content="Cybertize Growth offers expert web design services in Jhunjhunu, including UI/UX design, branding, graphic design, and website redesign to elevate your online presence."
        />
        <meta
          property="og:image"
          content="https://cybertizegrowth.com/images/web-design-hero.webp"
        />
        <meta property="og:url" content="https://cybertizegrowth.com/web-design" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Web Design - Digital Marketing Agency in Jhunjhunu | Cybertize Growth"
        />
        <meta
          property="twitter:description"
          content="Discover Cybertize Growth's web design services in Jhunjhunu, from UI/UX and branding to graphic design and website redesign."
        />
        <meta
          property="twitter:image"
          content="https://cybertizegrowth.com/images/web-design-hero.webp"
        />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Web Design",
            "url": "https://cybertizegrowth.com/web-design",
            "description": "Cybertize Growth provides expert web design services in Jhunjhunu, specializing in UI/UX design, branding and identity, graphic design, and website redesign.",
            "publisher": {
              "@type": "Organization",
              "name": "Cybertize Growth",
              "url": "https://cybertizegrowth.com",
              "logo": "https://cybertizegrowth.com/images/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jhunjhunu",
                "addressRegion": "Rajasthan",
                "addressCountry": "India"
              }
            }
          }
        `}</script>
      </Helmet>
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