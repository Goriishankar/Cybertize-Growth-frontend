import drishtiLogo from '../assets/drishti-logo.png';
import byjusLogo from '../assets/Byjus.jpg';
import alibabaLogo from '../assets/Byjus1.jpg';
import eyLogo from '../assets/Byjus2.jpg';
import denerPolluxLogo from '../assets/Byjus3.jpg';
import '../styles/client-slider.css';

function ClientSlider() {
  const clients = [
    { name: 'Drishti', logo: drishtiLogo },
    { name: 'BYJUs', logo: byjusLogo },
    { name: 'Alibaba', logo: alibabaLogo },
    { name: 'EY', logo: eyLogo },
    { name: 'Dener & Pollux', logo: denerPolluxLogo },
    { name: 'BYJUs', logo: byjusLogo },
    { name: 'EY', logo: eyLogo },
  ];

  // Duplicate the clients array to create a seamless loop for the slider
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="client-slider-section">
      <div className="client-header">
        <h2>Our Client</h2>
      </div>
      <div className="client-slider">
        <div className="client-slider-track">
          {duplicatedClients.map((client, index) => (
            <div className="client-logo" key={index}>
              <img src={client.logo} alt={`${client.name} Logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientSlider;