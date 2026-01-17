type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  description,
  tech,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:scale-[1.02] transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-white/70 text-sm mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
