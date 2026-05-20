const skills = [
  "Python", "Django", "Flask",
  "Next.js", "React", "TypeScript",
  "PostgreSQL", "Telegram Bot API",
  "Git", "Docker",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8">Навыки</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="bg-background text-accent-light border border-accent-light px-4 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
