import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../siteConfig.js';

function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="nav-logo" onClick={close}>
        {siteConfig.displayName}
      </Link>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>
      <nav className={`nav-links ${open ? 'nav-links--open' : ''}`}>
        <Link to="/#about" onClick={close}>
          About
        </Link>
        <Link to="/#projects" onClick={close}>
          Projects
        </Link>
        <Link to="/#contact" onClick={close}>
          Contact
        </Link>
        <Link to="/blog" onClick={close}>
          Blog
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
