import { projects } from "@/data/resume";

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group bg-[#0f1629] border border-slate-800 rounded-xl p-6 hover:border-sky-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.05)]">
      <div className="flex items-start justify-between mb-4 gap-4">
        <div>
          {project.featured && (
            <span className="text-xs font-mono text-sky-400 mb-2 block tracking-wider">FEATURED PROJECT</span>
          )}
          <h3 className="text-lg font-semibold text-slate-100 group-hover:text-sky-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-xs font-mono text-slate-600 mt-1">{project.period}</p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
            </a>
          ) : (
            <span
              className="text-xs font-mono text-slate-600 border border-slate-800 rounded px-2 py-0.5"
              title="Private repository"
            >
              private
            </span>
          )}
        </div>
      </div>
      <ul className="space-y-2 mb-5">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
            <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono text-slate-500 bg-slate-800/60 rounded px-2 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-sky-400 font-mono text-sm mb-3 tracking-wider">03. Projects</p>
      <h2 className="text-3xl font-bold text-slate-100 mb-12">Things I&apos;ve Built</h2>
      <div className="space-y-6 mb-6">
        {featured.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {rest.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}
