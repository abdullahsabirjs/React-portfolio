import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Project() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
        My Projects
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {/* Footer text */}
      <div className="text-center mt-12">
        <p className="text-gray-600 text-lg">
          More exciting projects are on the way.
        </p>
        <a
          href="https://github.com/abdullahsabirjs" target="blank"
          className="inline-block mt-6 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-red-600 to-yellow-500 shadow-lg hover:scale-105 transition-transform"
        >
          Explore More
        </a>
      </div>
    </section>
  );
}
