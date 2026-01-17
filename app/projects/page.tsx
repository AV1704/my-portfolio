import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

      <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Personal Portfolio"
          description="A modern portfolio built with Next.js, TypeScript, and Tailwind CSS."
          tech={["Next.js", "TypeScript", "Tailwind"]}
        />

        <ProjectCard
          title="Love Letter Website"
          description="An interactive website with animations, music, and custom UI."
          tech={["HTML", "CSS", "JavaScript"]}
        />

        <ProjectCard
          title="Coming Soon"
          description="More projects will be added here."
          tech={["React", "API", "UI/UX"]}
        />
      </section>
    </main>
  );
}
