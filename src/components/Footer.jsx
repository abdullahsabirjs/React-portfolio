export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-yellow-500 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* left text */}
        <p className="text-sm text-center md:text-left opacity-90">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Muhammad Abdullah</span> — Built with React & Tailwind
        </p>

        {/* right social links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-white/90 hover:text-yellow-200 transition-colors text-sm md:text-base"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-white/90 hover:text-yellow-200 transition-colors text-sm md:text-base"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
