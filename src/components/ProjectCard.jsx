export default function ProjectCard({ project }) {
  return (
    <article className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Project Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="mt-5 text-2xl font-bold text-gray-900">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-gray-700 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex gap-4">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-yellow-500 text-white font-medium shadow-md hover:scale-105 transition"
        >
          🚀 Live
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center px-4 py-2 rounded-lg border border-red-500 text-red-600 font-medium hover:bg-red-50 transition"
        >
          💻 Code
        </a>
      </div>
    </article>
  );
}
