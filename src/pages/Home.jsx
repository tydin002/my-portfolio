import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectShowcase from '../components/ProjectShowcase.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { siteConfig } from '../siteConfig.js';

const projects = [
  {
    title: 'REST Task Board API',
    desc: "Express API we built for class — routes, JSON bodies, basic validation. Nothing fancy but I actually understood what middleware does after this one.",
    tech: ['Node.js', 'Express', 'REST'],
    category: 'course',
  },
  {
    title: 'Interactive Data Dashboard',
    desc: "React page that pulls in sample data and lets you filter it. Learned a lot about useState and also that CSS Grid is kind of fun when it cooperates.",
    tech: ['React', 'Vite', 'CSS Grid'],
    category: 'course',
  },
  {
    title: 'Portfolio & blog site',
    desc: "This website — React Router, a few components, deployed on GitHub Pages. Had to mess with the base path forever before /blog stopped 404-ing.",
    tech: ['React', 'React Router', 'GitHub Pages'],
    category: 'personal',
  },
];

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <main>
      <section className="hero">
        <p className="hero__eyebrow">Hi, I&apos;m</p>
        <h1>{siteConfig.displayName}</h1>
        <p className="hero__tagline">{siteConfig.heroTagline}</p>
        <a className="btn-primary hero__cta" href="#contact">
          Say hi
        </a>
      </section>

      <section id="about" className="section section--alt">
        <h2>About me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m a CS student and I like building things for the web way more than writing
              proofs on paper (no offense to theory). Debugging takes forever sometimes but when
              something finally renders right it&apos;s worth it.
            </p>
            <p>
              I go to {siteConfig.university} — right now {siteConfig.majorLine} is eating most of
              my brain. When I&apos;m not in class I&apos;m usually coding, procrastinating, or both.
            </p>
          </div>
          <div className="about-card" aria-hidden="true">
            <span className="about-card__accent" />
            <p className="about-card__quote">&ldquo;{siteConfig.quote}&rdquo;</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <p className="section__lead">
          Stuff from class + this site. You can filter by coursework vs personal if you want.
        </p>
        <ProjectShowcase projects={projects} />
      </section>

      <section id="contact" className="section section--alt">
        <h2>Contact</h2>
        <p className="section__lead">
          Email:{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {' · '}
          GitHub:{' '}
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
            {siteConfig.githubLabel}
          </a>
        </p>
        <ContactForm />
      </section>
    </main>
  );
}

export default Home;
