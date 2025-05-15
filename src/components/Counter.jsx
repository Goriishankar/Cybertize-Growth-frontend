import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import '../styles/counter1.css';

function Counter() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.3, // Trigger when 30% of the section is in view
  });

  return (
    <section className="counter-section" ref={ref}>
      <div className="counter-content">
        <div className="counter-item">
          <h3>
            {inView ? <CountUp end={60} duration={2} suffix="+" /> : '0+'}
          </h3>
          <p>Complete Projects</p>
        </div>
        <div className="counter-item">
          <h3>
            {inView ? <CountUp end={10} duration={2} suffix="+" /> : '0+'}
          </h3>
          <p>Years Experience</p>
        </div>
        <div className="counter-item">
          <h3>
            {inView ? <CountUp end={400} duration={2} suffix="+" /> : '0+'}
          </h3>
          <p>Incredible Volunteers</p>
        </div>
        <div className="counter-item">
          <h3>
            {inView ? <CountUp end={700} duration={2} suffix="+" /> : '0+'}
          </h3>
          <p>Successful Campaigns</p>
        </div>
      </div>
    </section>
  );
}

export default Counter;