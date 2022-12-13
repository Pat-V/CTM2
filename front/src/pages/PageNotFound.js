import { Link } from 'react-router-dom';

export default function PageNotFoud() {
  return (
    <section className='section'>
      <h2>404</h2>
      <p>page not found</p><Link to='/' className='btn'>Open the CTM home page</Link>
    </section>
  );
};
