import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Service from '../pages/Services';
import Counter from '../components/Counter';
import About from './About';
import OurWork from './OurWork';
import ClientSlider from '../components/ClientSlider';
import Testimonials from '../components/Testimonials';
import CeoNotes from '../components/CeoNotes';
import Contact from './Contact';
import heroImage from '../assets/hero-image.webp';
import '../styles/home.css';

function Home() {
  return (
    <section className="hero-section">
      <Helmet>
        <title>Best Digital Marketing Agency in Jhunjhunu | Cybertize Growth</title>
        <meta
          name="description"
          content="Cybertize Growth, the top digital marketing agency in Jhunjhunu, offers expert SEO, SMM, Google Ads, and web development services across India to boost your brand."
        />
        <meta
          name="keywords"
          content="digital marketing agency in Jhunjhunu, digital marketing, digital marketing agency, digital marketing agency in India, SEO services, SMM, Cybertize Growth"
        />
        <meta name="author" content="Cybertize Growth Team" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cybertizegrowth.com/" />
        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content="Cybertize Growth - Best Digital Marketing Agency in Jhunjhunu" />
        <meta
          property="og:description"
          content="Leading digital marketing agency in Jhunjhunu offering SEO, SMM, and web development services across India."
        />
        <meta property="og:image" content="https://cybertizegrowth.com/images/hero-image.webp" />
        <meta property="og:url" content="https://cybertizegrowth.com/" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cybertize Growth - Digital Marketing Agency in Jhunjhunu" />
        <meta
          name="twitter:description"
          content="Top digital marketing agency in Jhunjhunu providing SEO, SMM, and Google Ads services in India."
        />
        <meta name="twitter:image" content="https://cybertizegrowth.com/images/hero-image.webp" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cybertize Growth",
            "url": "https://cybertizegrowth.com",
            "logo": "https://cybertizegrowth.com/images/logo.png",
            "description": "Cybertize Growth is a leading digital marketing agency in Jhunjhunu, offering SEO, SMM, Google Ads, and web development services across India.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jhunjhunu",
              "addressRegion": "Rajasthan",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 7891731414",
              "contactType": "Customer Service"
            }
          }
        `}</script>
      </Helmet>
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            GROW <span>YOUR BUSINESS</span> with Cybertize Growth
          </h1>
          <p>
            As the best digital marketing agency in Jhunjhunu, we provide top-tier SEO, SMM, Google Ads, and web development services across India to skyrocket your online presence.
          </p>
          <Link to="/contact" className="hero-button">Boost Your Growth</Link>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Digital marketing agency in Jhunjhunu team" />
        </div>
      </div>
      <Service />
      <Counter />
      <About />
      <OurWork />
      <ClientSlider />
      <Testimonials />
      <CeoNotes />
      <Contact />
    </section>
  );
}

export default Home;