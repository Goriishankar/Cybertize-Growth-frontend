import About from '../pages/About';
import ClientSlider from './ClientSlider';
import '../styles/aboutus-page.css';

function Aboutuspage() {
    return (
        <div>
            <About />
            <div className="clients-first-section">
                <div className="clients-first-content">
                    <div className="text-content">
                        <h2>Clients First. Always!</h2>
                        <p>
                            Over the years, Techmagnate has developed a culture of rigorous checks and balances for monitoring client performance. Our objective is to ensure that every client in our portfolio is looked after with equal effort. Our team is here to ensure your business grows in all the right ways.
                        </p>
                    </div>
                    <div className="clients-stats">
                        <div className="stats-row">
                            <div className="stat-item">
                                <span>17+</span>
                                <p>years in the SEO industry</p>
                            </div>
                            <div className="stat-item">
                                <span>5000+</span>
                                <p>projects delivered</p>
                            </div>
                        </div>
                        <div className="stats-row">
                            <div className="stat-item">
                                <span>250+</span>
                                <p>digital marketing experts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ClientSlider />
        </div>
    );
}

export default Aboutuspage;