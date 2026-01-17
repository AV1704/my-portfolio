import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28">
      <Navbar />  
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <p className="text-white/70 leading-relaxed mb-6">
          Hi, I’m Alfie — an aspiring Web Developer and fresh graduate who is
          passionate about building modern, responsive, and user-friendly web
          applications. I enjoy turning ideas into real projects and continuously
          improving my skills in both front-end and back-end development.
        </p>  

        <p className="text-white/70 leading-relaxed mb-10">
          I’ve worked with different technologies through personal projects and
          self-study, and I’m motivated to grow as a developer, collaborate with
          teams, and contribute to meaningful digital products.
        </p>

        <Skills />
      </section>
    </main>
  );
}
