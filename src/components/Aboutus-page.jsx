import { Helmet } from 'react-helmet-async';
import About from '../pages/About';
import ClientSlider from './ClientSlider';
import '../styles/aboutus-page.css';

function Aboutuspage() {
    return (
        <div>
            <Helmet>
                <title>About Us - Digital Marketing Agency in Jhunjhunu | Cybertize Growth</title>
                <meta
                    name="description"
                    content="Learn about Cybertize Growth, a leading digital marketing agency in Jhunjhunu, delivering expert SEO, SMM, and web development services to grow businesses in India."
                />
                <meta
                    name="keywords"
                    content="digital marketing agency in Jhunjhunu, digital marketing, digital marketing agency, digital marketing agency in India, SEO, SMM, web development, Cybertize Growth"
                />
                <meta name="author" content="Cybertize Growth Team" />
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://cybertizegrowth.com/about-us" />
                {/* Open Graph Tags */}
                <meta
                    property="og:title"
                    content="About Us - Digital Marketing Agency in Jhunjhunu | Cybertize Growth"
                />
                <meta
                    property="og:description"
                    content="Discover Cybertize Growth, a top digital marketing agency in Jhunjhunu, offering expert SEO, SMM, and web development services to boost your business."
                />
                <meta
                    property="og:image"
                    content="https://cybertizegrowth.com/images/about-us-hero.webp"
                />
                <meta property="og:url" content="https://cybertizegrowth.com/about-us" />
                <meta property="og:type" content="website" />
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:title"
                    content="About Us - Digital Marketing Agency in Jhunjhunu | Cybertize Growth"
                />
                <meta
                    property="twitter:description"
                    content="Learn about Cybertize Growth, a premier digital marketing agency in Jhunjhunu, specializing in SEO, SMM, and web development."
                />
                <meta
                    property="twitter:image"
                    content="https://cybertizegrowth.com/images/about-us-hero.webp"
                />
                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "About Us",
                        "url": "https://cybertizegrowth.com/about-us",
                        "description": "Learn about Cybertize Growth, a leading digital marketing agency in Jhunjhunu, offering SEO, SMM, and web development services to grow businesses.",
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
            <About />
            <div className="clients-first-section">
                <div className="clients-first-content">
                    <div className="text-content">
                        <h2>Clients First. Always!</h2>
                        <p>
                            Over the years, Techmagnate has developed a culture of rigorous checks and balances for monitoring client performance. Our objective is to ensure that every client in our portfolio is looked after with equal effort. Our team is here to ensure your business grows in all the right ways.
                        </p>
                    </div>
                    <div className="clients-stats">
                        <div className="stats-row">
                            <div className="stat-item">
                                <span>17+</span>
                                <p>years in the SEO industry</p>
                            </div>
                            <div className="stat-item">
                                <span>5000+</span>
                                <p>projects delivered</p>
                            </div>
                        </div>
                        <div className="stats-row">
                            <div className="stat-item">
                                <span>250+</span>
                                <p>digital marketing experts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ClientSlider />
        </div>
    );
}

export default Aboutuspage;