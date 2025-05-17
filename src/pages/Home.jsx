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
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            GROW <span>YOUR BUSINESS</span> with Cybertize Growth
          </h1>
          <p>
          We provide top-tier web development, SEO, SMM, Google Ads, and more to skyrocket your online presence. Partner with us to achieve measurable results.
          </p>
          <Link to="/contact" className="hero-button">Boost Your Growth</Link>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Team working on digital marketing" />
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