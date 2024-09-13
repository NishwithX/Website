// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </Router>
  );
}

export default App;