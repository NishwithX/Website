// src/components/Layout.jsx
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <main>
        <Outlet /> {/* This will render the matched route component */}
      </main>
    </div>
  );
}

export default Layout;
