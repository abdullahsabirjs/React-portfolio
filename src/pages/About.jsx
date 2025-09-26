import profile from "../assets/profile.png"; 

export default function About() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <div className="relative w-40 h-40 md:w-56 md:h-56">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 p-1">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full rounded-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Muhammad Abdullah
          </h2>
          <p className="mt-4 text-base md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
            I'm a{" "}
            <span className="font-semibold text-red-600">
              MERN Stack Developer
            </span>{" "}
            — Transforming visions into web experiences with MERN Stack.  
            Frontend to backend, I build it all.
          </p>

          {/* Skills */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Skills & Tools
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Firebase",
                "Tailwind CSS",
                "GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
