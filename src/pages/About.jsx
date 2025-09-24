import profile from "../assets/profile.png"; // if in public/assets use /assets/...

export default function About() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Image */}
        <div className="relative w-44 h-44 md:w-56 md:h-56">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 p-1">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full rounded-full object-cover shadow-xl"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Muhammad Abdullah
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
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
              {/* Highlighted Skills */}
              <span className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm shadow-md">
                HTML
              </span>
              <span className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm shadow-md">
                CSS
              </span>
              <span className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm shadow-md">
                JavaScript
              </span>
              <span className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm shadow-md">
                React.js
              </span>
              <span className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm shadow-md">
                Node.js
              </span>
              <span className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm shadow-md">
                Express.js
              </span>
              <span className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm shadow-md">
                MongoDB
              </span>
              <span className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm shadow-md">
                Firebase
              </span>
              <span className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm shadow-md">
                Tailwind CSS
              </span>
              <span className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm shadow-md">
                GitHub
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
