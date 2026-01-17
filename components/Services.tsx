const services = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites using the latest technologies.",
    icon: "🌐",
  },
  {
    title: "Frontend Development",
    description: "Creating interactive user interfaces with React, Next.js, and Tailwind CSS.",
    icon: "💻",
  },
  {
    title: "Backend Development",
    description: "Developing server-side logic and databases with PHP, MySQL, and more.",
    icon: "⚙️",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-8 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-900/20 via-blue-900/20 to-pink-900/20 blur-3xl -z-10"></div>

      <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
        Services I Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative p-6 bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-xl backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 ease-out transform"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
