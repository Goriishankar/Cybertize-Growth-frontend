import { Link } from 'react-router-dom';
import '../styles/servicesbox.css';

function ServiceCard({ title, description, icon, link }) {
  return (
    <div className="service-card">
      <i className={`fas ${icon} service-icon`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="read-more">Read more..</Link>
    </div>
  );
}

function Services() {
  const servicesData = [
    {
      title: "Web Development",
      description: "Build fast, responsive, and user-friendly websites tailored to your business needs. Our expert developers ensure seamless functionality and stunning designs.",
      icon: "fa-laptop-code",
      link: "/web-development",
    },
    {
      title: "Web Design",
      description: "Create visually appealing and intuitive website designs that captivate your audience. Our designs enhance user experience and drive conversions.",
      icon: "fa-paint-brush",
      link: "/web-design",
    },
    {
      title: "App Development",
      description: "Develop high-performance mobile apps for Android and iOS to engage your customers. We deliver scalable and innovative app solutions.",
      icon: "fa-mobile-alt",
      link: "/app-development",
    },
    {
      title: "iOS Development",
      description: "Craft premium iOS apps with cutting-edge technology to delight your users. Our iOS solutions are secure, fast, and user-friendly.",
      icon: "fa-apple",
      link: "/ios-development",
    },
    {
      title: "SEO (Search Engine Optimization)",
      description: "Rank higher on Google with our proven SEO strategies. Drive organic traffic and boost your brand visibility with expert optimization.",
      icon: "fa-search",
      link: "/OnPageOptimization",
    },
    {
      title: "SMM (Social Media Marketing)",
      description: "Engage your audience with powerful social media campaigns. Our SMM strategies build brand loyalty and drive conversions.",
      icon: "fa-share-alt",
      link: "/smm",
    },
    {
      title: "Google Ads",
      description: "Maximize ROI with targeted Google Ads campaigns. Our experts create high-converting ads to drive traffic and leads.",
      icon: "fa-ad",
      link: "/google-ads",
    },
    {
      title: "Meta Ads",
      description: "Reach your audience on Facebook and Instagram with precision-targeted Meta Ads. Boost engagement and sales with our ad expertise.",
      icon: "fa-bullhorn",
      link: "/meta-ads",
    },
    {
      title: "Content Creation",
      description: "Attract and retain customers with high-quality, engaging content. From blogs to videos, we create content that converts.",
      icon: "fa-pen-fancy",
      link: "/content-creation",
    },
    {
      title: "Site Audit",
      description: "Identify and fix website issues with our comprehensive site audits. Improve performance, usability, and conversions.",
      icon: "fa-check-circle",
      link: "/site-audit",
    },
    {
      title: "Influencer Marketing",
      description: "Amplify your brand with authentic influencer partnerships. Our campaigns drive trust and engagement with your audience.",
      icon: "fa-users",
      link: "/influencer-marketing",
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and boost sales with personalized email campaigns. Our strategies deliver high open rates and conversions.",
      icon: "fa-envelope",
      link: "/email-marketing",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our Services</h2>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;