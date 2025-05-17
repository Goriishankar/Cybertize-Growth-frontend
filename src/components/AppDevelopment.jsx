import { Link } from 'react-router-dom';
import appDevImage1 from '../assets/app-dev1.png'; // App Development image 1
import appDevImage2 from '../assets/app-dev2.png'; // App Development image 2
import appDevImage3 from '../assets/app-dev3.jpg'; // App Development image 3
import appDevImage4 from '../assets/app-dev4.jpg'; // App Development image 4
import '../styles/app-development.css';

function AppDevelopment() {
  return (
    <div>
      {/* Section 1: Mobile App Development (Image Left, Content Right) */}
      <div className="appdev-row">
        <div className="appdev-image-col">
          <img className="appdev-image" src={appDevImage1} alt="Mobile App Development" />
        </div>
        <div className="appdev-content-col">
          <h1>Mobile App Development</h1>
          <p>
            We build high-performance mobile apps for Android and iOS that engage your users. Our apps are designed with seamless functionality, scalability, and user-friendly interfaces to drive business growth.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 2: iOS App Development (Image Right, Content Left) */}
      <div className="appdev-row reverse">
        <div className="appdev-content-col">
          <h1>iOS App Development</h1>
          <p>
            Our iOS app development services deliver premium applications tailored for Apple devices. We ensure smooth performance, robust security, and an exceptional user experience to delight your audience.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="appdev-image-col">
          <img className="appdev-image" src={appDevImage2} alt="iOS App Development" />
        </div>
      </div>

      {/* Section 3: Android App Development (Image Left, Content Right) */}
      <div className="appdev-row">
        <div className="appdev-image-col">
          <img className="appdev-image" src={appDevImage3} alt="Android App Development" />
        </div>
        <div className="appdev-content-col">
          <h1>Android App Development</h1>
          <p>
            We create custom Android apps that cater to a wide audience with optimized performance. Our solutions focus on usability, modern design, and integration to enhance your mobile presence.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 4: App Maintenance & Support (Image Right, Content Left) */}
      <div className="appdev-row reverse">
        <div className="appdev-content-col">
          <h1>App Maintenance & Support</h1>
          <p>
            Keep your mobile apps running smoothly with our maintenance and support services. We provide updates, bug fixes, and performance optimization to ensure your app stays competitive.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="appdev-image-col">
          <img className="appdev-image" src={appDevImage4} alt="App Maintenance & Support" />
        </div>
      </div>
    </div>
  );
}

export default AppDevelopment;