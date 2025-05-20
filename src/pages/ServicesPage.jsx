import { Helmet } from 'react-helmet-async';
import Service from '../pages/Services';
import ClientSlider from '../components/ClientSlider';
import '../styles/services-page.css';

function ServicesPage() {
  return (
    <div>
      <Helmet>
        <title>Digital Marketing Services in Jhunjhunu - Cybertize Growth</title>
        <meta
          name="description"
          content="Explore top digital marketing services in Jhunjhunu by Cybertize Growth, including SEO, SMM, Google Ads, and web development for businesses in India."
        />
        <meta
          name="keywords"
          content="digital marketing agency in Jhunjhunu, digital marketing, digital marketing agency, digital marketing agency in India, SEO services, SMM, web development, Google Ads, Cybertize Growth"
        />
        <meta name="author" content="Cybertize Growth Team" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cybertizegrowth.com/services" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Digital Marketing Services in Jhunjhunu - Cybertize Growth"
        />
        <meta
          property="og:description"
          content="Cybertize Growth offers expert digital marketing services in Jhunjhunu, including SEO, SMM, and web development for businesses in India."
        />
        <meta
          property="og:image"
          content="https://cybertizegrowth.com/images/services-hero.webp"
        />
        <meta property="og:url" content="https://cybertizegrowth.com/services" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Digital Marketing Services in Jhunjhunu - Cybertize Growth"
        />
        <meta
          property="twitter:description"
          content="Top digital marketing agency in Jhunjhunu offering SEO, SMM, and web development services."
        />
        <meta
          property="twitter:image"
          content="https://cybertizegrowth.com/images/services-hero.webp"
        />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Digital Marketing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Cybertize Growth",
              "url": "https://cybertizegrowth.com",
              "logo": "https://cybertizegrowth.com/images/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jhunjhunu",
                "addressRegion": "Rajasthan",
                "addressCountry": "India"
              }
            },
            "areaServed": ["Jhunjhunu", "India"],
            "description": "Cybertize Growth provides digital marketing services in Jhunjhunu, including SEO, SMM, Google Ads, and web development for businesses in India."
          }
        `}</script>
      </Helmet>
      <div>
        <Service />
        <ClientSlider />
      </div>
    </div>
  );
}

export default ServicesPage;