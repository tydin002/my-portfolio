import { Link } from 'react-router-dom';
import { siteConfig } from '../siteConfig.js';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">
          © {year} {siteConfig.displayName}. Built with React & Vite.
        </p>
        <div className="site-footer__links">
          <Link to="/#about">About</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/blog">Spring break blog</Link>
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
