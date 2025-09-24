import profile from "../assets/profile.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

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
            Building modern web applications with the power of MERN Stack.  
            Turning ideas into responsive and scalable digital solutions.
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center md:justify-start gap-5 text-3xl">
            <a
              href="https://github.com/abdullahsabirjs"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg hover:scale-110 transform transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-abdullah-sabir-b44182288/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg hover:scale-110 transform transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/03126116557" 
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg hover:scale-110 transform transition"
            >
              <FaWhatsapp />
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
