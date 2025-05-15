import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/testimonials.css';

function TestimonialCard({ logo, quote, name, designation }) {
  return (
    <div className="testimonial-card">
      <div className="logo">Cybertize Growth</div>
      <p className="quote">{quote}</p>
      <div className="client-info">
        <div className="client-name">{name}</div>
        <div className="client-designation">{designation}</div>
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "Cybertize Growth transformed our outdated website into a modern, responsive platform. Their SEO strategies doubled our organic traffic in just 3 months!",
      name: "Priya Sharma",
      designation: "E-Commerce Owner",
    },
    {
      quote: "The Google Ads campaigns by Cybertize Growth were a game-changer for our business. We saw a 3x increase in leads with a lower cost-per-click.",
      name: "Rahul Verma",
      designation: "Local Retail",
    },
    {
      quote: "Their social media marketing team boosted our Instagram engagement by 150%. The influencer partnerships they arranged were spot-on!",
      name: "Anjali Patel",
      designation: "Fashion Brand",
    },
    {
      quote: "We launched a user-friendly iOS app with Cybertize Growth’s expertise. The app hit 8,000 downloads in its first month, exceeding our expectations.",
      name: "Vikram Singh",
      designation: "Fitness Startup",
    },
    {
      quote: "The SEO audit provided by Cybertize Growth uncovered critical issues on our site. After their optimizations, we ranked on Google’s first page!",
      name: "Neha Gupta",
      designation: "Tech Consultancy",
    },
    {
      quote: "Their email marketing campaigns delivered outstanding results. Our open rates increased by 40%, driving more conversions than ever.",
      name: "Arjun Mehta",
      designation: "Online Education",
    },
    {
      quote: "Cybertize Growth’s Meta Ads strategy helped us reach our target audience perfectly. Our sales grew by 200% in just two months!",
      name: "Michael Brown",
      designation: "CEO, JKL Enterprises",
    },
    {
      quote: "[Agency Name]’s expertise in SEO and digital marketing helped us achieve our business goals faster than expected.",
      name: "Sonia Kapoor",
      designation: "Beauty Brand",
    },
    {
      quote: "The website integration services by Cybertize Growth streamlined our operations. Their team’s professionalism and expertise are unmatched.",
      name: "Rohit Malhotra",
      designation: "Logistics Company",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // 10 seconds
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Client Success Stories</h2>
        <p>Discover What Our Satisfied Clients Are Saying About Us</p>
      </div>
      <div className="testimonials-slider">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              logo="Cybertize Growth"
              quote={testimonial.quote}
              name={testimonial.name}
              designation={testimonial.designation}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;