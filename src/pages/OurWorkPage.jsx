import { useState } from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project1.jpg'; // Dummy images, replace with actual ones
import project6 from '../assets/project2.jpg';
import project7 from '../assets/project3.jpg';
import project8 from '../assets/project4.jpg';
import project9 from '../assets/project1.jpg';
import project10 from '../assets/project2.jpg';
import project11 from '../assets/project3.jpg';
import project12 from '../assets/project4.jpg';
import ClientSlider from '../components/ClientSlider';
import '../styles/ourwork.css';

function WorkBox({ id, image, title, description, externalUrl }) {
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

function OurWorkPage() {
  const works = [
    {
      id: '1',
      image: project1,
      title: 'E-Commerce Website Overhaul',
      description: 'We transformed a struggling e-commerce brand with a sleek, responsive website and targeted SEO strategies. The result? 150% increase in organic traffic and doubled sales within 6 months.',
      externalUrl: 'https://www.kaggle.com',
    },
    {
      id: '2',
      image: project2,
      title: 'Social Media Brand Boost',
      description: 'Our tailored SMM and Meta Ads campaigns skyrocketed a startup’s Instagram engagement by 200%. Authentic influencer partnerships drove brand trust and conversions.',
      externalUrl: 'https://www.brandsboostsocial.com',
    },
    {
      id: '3',
      image: project3,
      title: 'Google Ads ROI Surge',
      description: 'For a local business, we crafted high-converting Google Ads campaigns that reduced cost-per-click by 40%. This led to a 3x increase in qualified leads.',
      externalUrl: 'https://bigbusinessagency.com',
    },
    {
      id: '4',
      image: project4,
      title: 'Mobile App Launch Success',
      description: 'We developed a user-friendly iOS app for a fitness brand, integrated with seamless features. The app achieved 10,000 downloads in its first month.',
      externalUrl: 'https://www.example.com/project4',
    },
    
  ];

  // Pagination Logic
  const worksPerPage = 6; // 3 rows × 2 boxes per row = 6 boxes per page
  const totalPages = Math.ceil(works.length / worksPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * worksPerPage;
  const currentWorks = works.slice(startIndex, startIndex + worksPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="ourwork-section">
      <div className="ourwork-header">
        <h2>Our Work</h2>
      </div>
      <div className="projects-grid">
        {currentWorks.map(work => (
          <WorkBox
            key={work.id}
            id={work.id}
            image={work.image}
            title={work.title}
            description={work.description}
            externalUrl={work.externalUrl}
          />
        ))}
      </div>
      <div className="paginationbtrow">
        <div className="navigation">
          <ol className="wp-paginate font-inherit">
            <li>
              <button
                className="prev"
                onClick={handlePrevious}
                disabled={currentPage === 1}
                aria-label="Go to previous page"
              >
                Previous
              </button>
            </li>
            {pageNumbers.map((page, index) => (
              <li key={index}>
                <button
                  className={`page ${page === currentPage ? "current" : ""}`}
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo(0, 0);
                  }}
                  aria-label={`Go to page ${page}`}
                >
                  {page}
                </button>
              </li>
            ))}
            <li>
              <button
                className="next"
                onClick={handleNext}
                disabled={currentPage === totalPages}
                aria-label="Go to next page"
              >
                Next
              </button>
            </li>
          </ol>
        </div>
      </div>
      <ClientSlider />
    </section>
  );
}

export default OurWorkPage;