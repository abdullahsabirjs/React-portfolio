import profile from "../assets/profile.png";
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-yellow-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
            Muhammad Abdullah
            </span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0">
            Frontend Developer — React, Tailwind & modern UI.  
            I craft fast, responsive and visually stunning web experiences.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="/Projects"
              className="px-6 py-3 rounded-lg shadow-lg bg-gradient-to-r from-red-600 to-yellow-500 text-white font-medium hover:scale-105 transform transition"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg border border-red-500 text-red-600 font-medium hover:bg-red-50 transition"
            >
              ✉️ Contact
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-red-500 hover:scale-105 transform transition">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
