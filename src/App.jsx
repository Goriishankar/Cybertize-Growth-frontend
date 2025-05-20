import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import WhatsAppButton from './components/WhatsAppButton'; 
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage'; 
import Services from './pages/Services';
import WebDevelopment from './components/WebDevelopment';
import WebDesign from './components/WebDesign'; 
import AppDevelopment from './components/AppDevelopment';
import IosDevelopment from './components/IosDevelopment';
import OnPageOptimization from './components/OnPageOptimization';
import Smm from './components/Smm';
import GoogleAds from './components/GoogleAds';
import MetaAds from './components/MetaAds';
import ContentCreation from './components/ContentCreation';
import SiteAudit from './components/SiteAudit';
import InfluencerMarketing from './components/InfluencerMarketing';
import EmailMarketing from './components/EmailMarketing';
import Contact from './pages/Contact';
import PopupContactForm from './components/PopupContactForm';
import OurWork from './pages/OurWork';
import OurWorkPage from './pages/OurWorkPage';
import Aboutuspage from './components/Aboutus-page';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Blog from './pages/Blog';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ServicesPage" element={<ServicesPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/app-development" element={<AppDevelopment />} />
            <Route path="/ios-development" element={<IosDevelopment />} /> 
            <Route path="/OnPageOptimization" element={<OnPageOptimization />} />
            <Route path="/smm" element={<Smm />} />
            <Route path="/google-ads" element={<GoogleAds />} />
            <Route path="/meta-ads" element={<MetaAds />} />
            <Route path="/content-creation" element={<ContentCreation />} />
            <Route path="/site-audit" element={<SiteAudit />} /> 
            <Route path="/influencer-marketing" element={<InfluencerMarketing />} /> 
            <Route path="/email-marketing" element={<EmailMarketing />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/our-work-page" element={<OurWorkPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Aboutus-page" element={<Aboutuspage />} />
            <Route path="/blog" element={<Blog />} /> 
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton /> 
        <PopupContactForm /> 

      </div>
    </Router>
  );
}

export default App;