const skills = [
  { name: "HTML", color: "from-orange-500 to-red-500" },
  { name: "CSS", color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  { name: "PHP", color: "from-purple-500 to-indigo-500" },
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", color: "from-gray-700 to-black" },
  { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
  { name: "TypeScript", color: "from-blue-600 to-blue-800" },
  { name: "Bootstrap", color: "from-purple-600 to-pink-600" },
  { name: "MySQL", color: "from-orange-600 to-red-600" },
  { name: "Git", color: "from-orange-500 to-red-500" },
  { name: "GitHub", color: "from-gray-800 to-black" },
];

export default function Skills() {
  return (
    <section className="py-16 px-8 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 blur-3xl -z-10"></div>

      <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
        Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`group relative px-6 py-3 text-sm font-medium rounded-full bg-linear-to-r ${skill.color} text-white border border-white/20 hover:scale-110 hover:shadow-lg hover:shadow-white/25 transition-all duration-300 ease-out transform cursor-pointer`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-full bg-linear-to-r from-white/0 to-white/0 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300"></span>
            <span className="relative z-10">{skill.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
