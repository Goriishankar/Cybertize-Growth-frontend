import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import webDevImage1 from '../assets/web-dev1.webp'; // Web Development image 1
import webDevImage2 from '../assets/web-dev3.webp'; // Web Development image 2
import webDevImage3 from '../assets/web-dev4.webp'; // Web Development image 3
import webDevImage4 from '../assets/web-dev2.webp'; // Web Development image 4
import '../styles/web-development.css';

function WebDevelopment() {
  return (
    <div>
      <Helmet>
        <title>Web Development - Digital Marketing Agency in Jhunjhunu | Cybertize Growth</title>
        <meta
          name="description"
          content="Discover expert web development services at Cybertize Growth, a leading digital marketing agency in Jhunjhunu. We offer custom websites, responsive design, e-commerce solutions, and web maintenance."
        />
        <meta
          name="keywords"
          content="web development, digital marketing agency in Jhunjhunu, custom web development, responsive design, e-commerce solutions, web maintenance, digital marketing agency, Cybertize Growth"
        />
        <meta name="author" content="Cybertize Growth Team" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cybertizegrowth.com/web-development" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Web Development - Digital Marketing Agency in Jhunjhunu | Cybertize Growth"
        />
        <meta
          property="og:description"
          content="Explore Cybertize Growth's web development services in Jhunjhunu, including custom websites, responsive design, e-commerce platforms, and web maintenance."
        />
        <meta
          property="og:image"
          content="https://cybertizegrowth.com/images/web-development-hero.webp"
        />
        <meta property="og:url" content="https://cybertizegrowth.com/web-development" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Web Development - Digital Marketing Agency in Jhunjhunu | Cybertize Growth"
        />
        <meta
          property="twitter:description"
          content="Cybertize Growth offers top-tier web development services in Jhunjhunu, from custom websites to e-commerce solutions and maintenance."
        />
        <meta
          property="twitter:image"
          content="https://cybertizegrowth.com/images/web-development-hero.webp"
        />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Web Development",
            "url": "https://cybertizegrowth.com/web-development",
            "description": "Cybertize Growth provides expert web development services in Jhunjhunu, including custom web development, responsive design, e-commerce solutions, and web maintenance.",
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
      {/* Section 1: Custom Web Development (Image Left, Content Right) */}
      <div className="webdev-row">
        <div className="webdev-image-col">
          <img className="webdev-image" src={webDevImage1} alt="Custom Web Development" />
        </div>
        <div className="webdev-content-col">
          <h1>Custom Web Development</h1>
          <p>
            We create tailored websites that align with your business goals, ensuring a unique online presence. Our expert developers use the latest technologies to build scalable, secure, and high-performance websites that drive engagement and growth.
          </p>
          <Link to="/Contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 2: Responsive Design (Image Right, Content Left) */}
      <div className="webdev-row reverse">
        <div className="webdev-content-col">
          <h1>Responsive Design</h1>
          <p>
            Our responsive web designs ensure your site looks stunning and functions seamlessly across all devices, from desktops to mobiles. We prioritize user experience, making sure your audience enjoys a consistent and intuitive interface everywhere.
          </p>
          <Link to="/Contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="webdev-image-col">
          <img className="webdev-image" src={webDevImage2} alt="Responsive Design" />
        </div>
      </div>

      {/* Section 3: E-Commerce Solutions (Image Left, Content Right) */}
      <div className="webdev-row">
        <div className="webdev-image-col">
          <img className="webdev-image" src={webDevImage3} alt="E-Commerce Solutions" />
        </div>
        <div className="webdev-content-col">
          <h1>E-Commerce Solutions</h1>
          <p>
            We build powerful e-commerce platforms that drive sales and enhance customer satisfaction. From secure payment gateways to intuitive product pages, our solutions are designed to boost conversions and grow your online business.
          </p>
          <Link to="/Contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 4: Web Maintenance (Image Right, Content Left) */}
      <div className="webdev-row reverse">
        <div className="webdev-content-col">
          <h1>Web Maintenance</h1>
          <p>
            Keep your website running smoothly with our comprehensive maintenance services. We handle updates, backups, security checks, and performance optimization, ensuring your site remains fast, secure, and up-to-date at all times.
          </p>
          <Link to="/Contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="webdev-image-col">
          <img className="webdev-image" src={webDevImage4} alt="Web Maintenance" />
        </div>
      </div>
    </div>
  );
}

export default WebDevelopment;