export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        Hi, I’m Alfie 👋
      </h1>

      <p className="text-white/70 max-w-xl mb-8">
        Aspiring Web Developer building websites with React, Next.js,
        TypeScript, and Tailwind CSS.
      </p>

      <div className="flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-80 transition"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
