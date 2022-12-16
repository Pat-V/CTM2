import rocket from "../assets/rocket.gif"
import '../styles/help.css';

export default function Help() {
  const title = "Coming soon!"
  return (
    <section className='section'>
      <div className="help-alignment"  >
        <h2>{title}</h2>
        <img src={rocket} alt={title} className="ctm-rocket-coming-soon" />
      </div>
      <p>This section is under construction and will be delivered soon. Stay tuned! </p>
    </section>
  );
};
