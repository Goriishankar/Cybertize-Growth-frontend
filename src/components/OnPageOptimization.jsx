import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import seoImage1 from '../assets/seo1.png'; // On-Page Optimization image
import seoImage2 from '../assets/seo2.jpg'; // Off-Page Optimization image
import seoImage3 from '../assets/seo3.jpg'; // Keywords Strategy image
import seoImage4 from '../assets/seo4.jpg'; // New section image
import '../styles/on-page-optimization.css';

function OnPageOptimization() {
  return (
    <div>
      <Helmet>
        <title>SEO Services - Digital Marketing Agency in Jhunjhunu | Cybertize Growth</title>
        <meta
          name="description"
          content="Boost your online presence with Cybertize Growth's SEO services in Jhunjhunu. We offer on-page optimization, off-page optimization, keywords strategy, and technical SEO."
        />
        <meta
          name="keywords"
          content="SEO services, digital marketing agency in Jhunjhunu, on-page optimization, off-page optimization, keywords strategy, technical SEO, digital marketing agency, Cybertize Growth"
        />
        <meta name="author" content="Cybertize Growth Team" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cybertizegrowth.com/seo-services" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="SEO Services - Digital Marketing Agency in Jhunjhunu | Cybertize Growth"
        />
        <meta
          property="og:description"
          content="Cybertize Growth provides expert SEO services in Jhunjhunu, including on-page optimization, off-page optimization, keywords strategy, and technical SEO to enhance your website's ranking."
        />
        <meta
          property="og:image"
          content="https://cybertizegrowth.com/images/seo-services-hero.webp"
        />
        <meta property="og:url" content="https://cybertizegrowth.com/seo-services" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="SEO Services - Digital Marketing Agency in Jhunjhunu | Cybertize Growth"
        />
        <meta
          property="twitter:description"
          content="Explore Cybertize Growth's SEO services in Jhunjhunu, from on-page and off-page optimization to keywords strategy and technical SEO."
        />
        <meta
          property="twitter:image"
          content="https://cybertizegrowth.com/images/seo-services-hero.webp"
        />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SEO Services",
            "url": "https://cybertizegrowth.com/seo-services",
            "description": "Cybertize Growth offers expert SEO services in Jhunjhunu, specializing in on-page optimization, off-page optimization, keywords strategy, and technical SEO to boost your online presence.",
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