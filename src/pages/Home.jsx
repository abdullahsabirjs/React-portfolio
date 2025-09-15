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
          I build <span className="text-red-600 font-semibold">responsive</span>,{" "}
          <span className="text-yellow-600 font-semibold">accessible</span> and{" "}
          <span className="text-red-600 font-semibold">performant</span> user
          interfaces using <span className="text-yellow-600 font-bold">React</span> and{" "}
          <span className="text-red-600 font-bold">Tailwind</span>.  
          I focus on{" "}
          <span className="text-yellow-600 font-semibold">simple design</span>,{" "}
          <span className="text-red-600 font-semibold">readable code</span> and{" "}
          <span className="text-yellow-600 font-semibold">shipping working features</span>.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-red-600 to-yellow-500 shadow-lg hover:scale-105 transition-transform"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border-2 border-red-500 text-red-600 hover:bg-red-50 hover:scale-105 transition-transform"
          >
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}
