import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-20 text-center md:text-left">
        <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
          A Short Pitch
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed md:max-w-3xl">
          I specialize in building{" "}
          <span className="text-red-600 font-semibold">responsive</span> and{" "}
          <span className="text-yellow-600 font-semibold">modern</span> web
          applications using the{" "}
          <span className="text-red-600 font-bold">MERN stack</span>.  
          With <span className="text-yellow-600 font-semibold">React</span> and{" "}
          <span className="text-red-600 font-semibold">Tailwind CSS</span>, I
          craft engaging UIs, while having a growing understanding of{" "}
          <span className="text-yellow-600 font-semibold">Node.js</span> and{" "}
          <span className="text-red-600 font-semibold">MongoDB</span> for backend
          and database management.  
          My focus is on{" "}
          <span className="text-yellow-600 font-semibold">clean design</span>,{" "}
          <span className="text-red-600 font-semibold">efficient code</span>, and{" "}
          <span className="text-yellow-600 font-semibold">real-world projects</span>.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center md:justify-start">
          <a
            href="/contact"
            className="px-6 py-3 rounded-xl border-2 border-red-500 text-red-600 font-medium hover:bg-red-50 hover:scale-105 transition-transform"
          >
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}
