import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="page-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
