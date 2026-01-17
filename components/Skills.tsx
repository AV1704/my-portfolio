const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Bootstrap",
  "MySQL",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section className="relative">
      <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>

      <div className="absolute flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 text-sm rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
