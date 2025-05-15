import { Link } from 'react-router-dom';
import iosDevImage1 from '../assets/ios-dev1.png'; // iOS Development image 1
import iosDevImage2 from '../assets/ios-dev1.png'; // iOS Development image 2
import iosDevImage3 from '../assets/ios-dev1.png'; // iOS Development image 3
import iosDevImage4 from '../assets/ios-dev1.png'; // iOS Development image 4
import '../styles/ios-development.css';

function IosDevelopment() {
  return (
    <div>
      {/* Section 1: Custom iOS Development (Image Left, Content Right) */}
      <div className="iosdev-row">
        <div className="iosdev-image-col">
          <img className="iosdev-image" src={iosDevImage1} alt="Custom iOS Development" />
        </div>
        <div className="iosdev-content-col">
          <h1>Custom iOS Development</h1>
          <p>
            We create tailored iOS applications that align with your business goals, ensuring a seamless user experience. Our expert developers leverage the latest iOS technologies to deliver high-performance apps.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 2: Swift Development (Image Right, Content Left) */}
      <div className="iosdev-row reverse">
        <div className="iosdev-content-col">
          <h1>Swift Development</h1>
          <p>
            Our team specializes in Swift to build fast, secure, and scalable iOS apps. We ensure your app meets Apple’s high standards while providing a smooth and engaging experience for users.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="iosdev-image-col">
          <img className="iosdev-image" src={iosDevImage2} alt="Swift Development" />
        </div>
      </div>

      {/* Section 3: iOS App Testing (Image Left, Content Right) */}
      <div className="iosdev-row">
        <div className="iosdev-image-col">
          <img className="iosdev-image" src={iosDevImage3} alt="iOS App Testing" />
        </div>
        <div className="iosdev-content-col">
          <h1>iOS App Testing</h1>
          <p>
            We provide comprehensive testing for iOS apps to ensure flawless performance across all Apple devices. Our rigorous testing process guarantees a bug-free and reliable app experience.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
      </div>

      {/* Section 4: iOS App Maintenance (Image Right, Content Left) */}
      <div className="iosdev-row reverse">
        <div className="iosdev-content-col">
          <h1>iOS App Maintenance</h1>
          <p>
            Keep your iOS app up-to-date with our maintenance services. We handle updates, performance optimization, and compatibility with the latest iOS versions to ensure long-term success.
          </p>
          <Link to="/contact">
            <button className="growth-button">FIND OUT MORE</button>
          </Link>
        </div>
        <div className="iosdev-image-col">
          <img className="iosdev-image" src={iosDevImage4} alt="iOS App Maintenance" />
        </div>
      </div>
    </div>
  );
}

export default IosDevelopment;