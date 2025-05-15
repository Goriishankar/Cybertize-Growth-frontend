import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/about-image.jpg';
import '../styles/about1.css';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <i className={icon}></i>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    {
      icon: "fas fa-handshake",
      title: "Passion and Dedication",
      description: "At Cybertize Growth, our passion for digital excellence drives every project we undertake. We are dedicated to delivering results that exceed your expectations and fuel your business growth.",
    },
    {
      icon: "fas fa-chart-line",
      title: "Diverse Skill Set",
      description: "Our team combines expertise in web development, SEO, digital ads, and more to offer comprehensive solutions. This diverse skill set ensures we meet all your digital marketing needs under one roof.",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovation and Creativity",
      description: "We thrive on creating innovative strategies and creative campaigns that set your brand apart. Our forward-thinking approach keeps you ahead in the ever-evolving digital landscape.",
    },
  ];

  return (
    <section className={`about-section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="Team working together" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <h3>About Cybertize Growth</h3>
          <p>
            Welcome to Cybertize Growth, your trusted partner in digital success. Founded by Mukul Choudhary, a passionate digital marketing expert and CEO, we are a full-service digital marketing agency dedicated to helping businesses thrive in the online world. From web development and SEO to social media marketing and Google Ads, we offer tailored solutions to drive traffic, leads, and conversions.
          </p>
          <Link to="/contact" className="about-button">Let’s Grow Together</Link>
        </div>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default About;