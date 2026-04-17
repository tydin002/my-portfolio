import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard.jsx';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'course', label: 'Coursework' },
  { id: 'personal', label: 'Personal' },
];

function ProjectShowcase({ projects }) {
  const [filter, setFilter] = useState('all');

  const visible = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.category === filter);
  }, [projects, filter]);

  return (
    <div className="project-showcase">
      <div className="project-showcase__filters" role="group" aria-label="Filter projects">
        {FILTERS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`filter-chip ${filter === id ? 'filter-chip--active' : ''}`}
            onClick={() => setFilter(id)}
            aria-pressed={filter === id}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {visible.map((p) => (
          <ProjectCard key={p.title} title={p.title} desc={p.desc} tech={p.tech} />
        ))}
      </div>
      {visible.length === 0 && (
        <p className="project-showcase__empty">No projects in this category yet.</p>
      )}
    </div>
  );
}

export default ProjectShowcase;
