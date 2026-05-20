export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold text-foreground mb-4">Иван Стальмахов</h1>
        <p className="text-xl text-accent mb-8">Freelance Fullstack Developer</p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
            Проекты
          </a>
          <a href="#contact" className="border border-accent text-accent px-6 py-3 rounded-lg hover:bg-card transition">
            Связаться
          </a>
        </div>
      </div>
    </section>
  );
}
