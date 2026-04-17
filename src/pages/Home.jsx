import ProjectShowcase from '../components/ProjectShowcase.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { siteConfig } from '../siteConfig.js';

const projects = [
  {
    title: 'REST Task Board API',
    desc: 'Express.js API with JSON persistence and validation middleware. Practice in routing, POST bodies, and consistent error responses for CIS coursework.',
    tech: ['Node.js', 'Express', 'REST'],
    category: 'course',
  },
  {
    title: 'Interactive Data Dashboard',
    desc: 'React dashboard that loads sample datasets, filters rows client-side, and stays readable on phones using CSS Grid and responsive typography.',
    tech: ['React', 'Vite', 'CSS Grid'],
    category: 'course',
  },
  {
    title: 'Portfolio & blog site',
    desc: 'This site: React Router, component structure, and GitHub Pages deployment with the correct base path so routes work in production.',
    tech: ['React', 'React Router', 'GitHub Pages'],
    category: 'personal',
  },
];

function Home() {
  return (
    <main>
      <section className="hero">
        <p className="hero__eyebrow">Hello, I&apos;m</p>
        <h1>{siteConfig.displayName}</h1>
        <p className="hero__tagline">{siteConfig.heroTagline}</p>
        <a className="btn-primary hero__cta" href="#contact">
          Get in touch
        </a>
      </section>

      <section id="about" className="section section--alt">
        <h2>About me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m a student focused on web programming and software design. I like the moment
              when an API finally returns the right JSON, and when a layout finally looks right on
              mobile without hacks.
            </p>
            <p>
              I study at {siteConfig.university} — {siteConfig.majorLine}. Outside lectures I
              build small apps, refine UI details, and practice deployment so projects are usable
              on the web, not only on localhost.
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
          Selected work from class labs and personal experiments. Use the filters to browse by type.
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
