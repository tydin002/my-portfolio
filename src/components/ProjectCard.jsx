function ProjectCard({ title, desc, tech }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      {tech && tech.length > 0 && (
        <ul className="project-card__tags">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default ProjectCard;
