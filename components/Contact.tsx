export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-6">Контакты</h2>
        <p className="text-muted text-lg mb-6">Готов к новым проектам. Пишите!</p>
        <div className="flex flex-col gap-3">
          <a href="https://t.me/erisuuu" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-lg">
            Telegram: @erisuuu
          </a>
          <a href="https://github.com/stalmahov" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-lg">
            GitHub: stalmahov
          </a>
          <a href="mailto:ivanstalmahov@gmail.com" className="text-accent hover:underline text-lg">
            Email: ivanstalmahov@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
