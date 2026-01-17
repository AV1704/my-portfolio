import Navbar from "@/components/Navbar";
import Image from "next/image";

const certificates = [
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco",
    date: "2024",
    description: "Covers fundamental cybersecurity concepts including threat detection, network security, and basic risk management",
    image: "/certificates/Cybersecurity-essentials.png",
  },
  {
    title: "DevNet Associate",
    issuer: "Cisco",
    date: "2024",
    description: "Validates skills in software development, APIs, and automation using Cisco platforms and modern programming concepts.",
    image: "/certificates/DevNet-associate.png",
  },
  {
    title: "Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    date: "2024",
    description: "Covers enterprise networking concepts, security fundamentals, and network automation using industry-standard technologies.",
    image: "/certificates/enterprise-networking-security-automation.png",
  },
  {
    title: "Introduction to Networking",
    issuer: "Cisco",
    date: "2023",
    description: "Covers the fundamentals of networking, including protocols, devices, and basic network operations.",
    image: "/certificates/Introduction-to-network.png",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2024",
    description: "Covers the fundamentals of cybersecurity, including threats, vulnerabilities, and basic security principles.",
    image: "/certificates/Introduction-tocybersecurity.png",
  },
  {
    title: "Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    date: "2023",
    description: "Covers the fundamentals of network switching, routing, and wireless technologies for modern enterprise networks",
    image: "/certificates/switching-routing-and-wireless.png",
  },
];

export default function Certificates() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-linear-to-r from-green-900/20 via-blue-900/20 to-purple-900/20 blur-3xl -z-10" />

        {/* Title */}
        <h1 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent">
          My Certificates
        </h1>

        {/* Certificates Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              {/* Certificate Image */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Certificate Info */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-400">
                  Issued by <span className="text-white">{cert.issuer}</span>
                </p>

                <p className="text-sm text-gray-400 mb-4">
                  {cert.date}
                </p>

                <p className="text-gray-300">
                  {cert.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-green-500/0 to-blue-500/0 group-hover:from-green-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
