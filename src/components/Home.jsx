// src/components/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="/projects">Projects</a></li>

        </ul>
      </nav>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}

export default Home;