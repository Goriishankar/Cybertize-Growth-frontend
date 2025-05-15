import { Link } from 'react-router-dom'; 
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import '../styles/ourwork.css';

function ProjectCard({ id, image, title, description, externalUrl }) {
  return (
    <a href={externalUrl} className="project-card" target="_blank" rel="noopener noreferrer">
      <div className="project-card-content">
        <img src={image} alt={title} className="project-image" />
        <div className="project-info">
          <span className="case-study">View our case study for</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}

function OurWork() {
  const projects = [
    {
      id: '1',
      image: project1,
      title: 'E-Commerce Website Overhaul',
      description: 'We transformed a struggling e-commerce brand with a sleek, responsive website and targeted SEO strategies. The result? 150% increase in organic traffic and doubled sales within 6 months.',
      externalUrl: 'https://www.example.com/project1', // Replace with actual external URL
    },
    {
      id: '2',
      image: project2,
      title: 'Social Media Brand Boost',
      description: 'Our tailored SMM and Meta Ads campaigns skyrocketed a startup’s Instagram engagement by 200%. Authentic influencer partnerships drove brand trust and conversions.',
      externalUrl: 'https://www.example.com/project2', // Replace with actual external URL
    },
    {
      id: '3',
      image: project3,
      title: 'Google Ads ROI Surge',
      description: 'For a local business, we crafted high-converting Google Ads campaigns that reduced cost-per-click by 40%. This led to a 3x increase in qualified leads.',
      externalUrl: 'https://www.example.com/project3', // Replace with actual external URL
    },
    {
      id: '4',
      image: project4,
      title: 'Mobile App Launch Success',
      description: 'We developed a user-friendly iOS app for a fitness brand, integrated with seamless features. The app achieved 10,000 downloads in its first month.',
      externalUrl: 'https://www.example.com/project4', // Replace with actual external URL
    },
  ];

  return (
    <section className="ourwork-section">
      <div className="ourwork-header">
        <h2>Our Work</h2>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            id={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            externalUrl={project.externalUrl}
          />
        ))}
      </div>
      <div className="view-more">
      <Link to="/our-work-page" className="view-more-button">View More..</Link>
      </div>
    </section>
  );
}

export default OurWork;