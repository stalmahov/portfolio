import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8">Проекты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.slug} className="bg-card rounded-xl p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
              <p className="text-muted text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t: string) => (
                  <span key={t} className="text-xs bg-background text-accent-light px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
