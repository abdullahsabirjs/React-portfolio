import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-700 via-red-600 to-yellow-500 text-white relative mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Left: Branding */}
        <div>
          <h2 className="text-xl font-bold tracking-wide">Muhammad Abdullah</h2>
          <p className="text-sm text-white/80 mt-2">
            MERN Stack Developer | Crafting Modern Web Apps
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end gap-6 text-2xl">
          <a
            href="https://github.com/abdullahsabirjs"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transform transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-abdullah-sabir-b44182288/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transform transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mailk1abdullah892@gmail.com"
            className="hover:scale-110 transform transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Muhammad Abdullah. All rights reserved.
      </div>
    </footer>
  );
}
