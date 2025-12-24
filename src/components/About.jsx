const About = () => {
  return (
    <section id="about" className="relative py-32 bg-[#0f1420] overflow-hidden">
      {/* Background glow */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#dd5953]/10 blur-[120px]" />

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="max-w-4xl">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
            About Me
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed mb-20 max-w-2xl font-light">
            I'm a self-taught software developer with a strong focus on building
            modern, high-quality web and mobile applications. I enjoy solving
            complex problems and continuously learning new technologies. My goal
            is to craft intuitive, performant, and visually appealing digital
            experiences.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-20 border-t border-white/10 pt-12">
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">
                20<span className="text-[#dd5953] text-3xl">+</span>
              </h3>
              <p className="text-sm text-gray-500 font-medium leading-snug">
                Completed <br /> Projects
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white mb-2">
                95<span className="text-[#dd5953] text-3xl">%</span>
              </h3>
              <p className="text-sm text-gray-500 font-medium leading-snug">
                Client <br /> Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white mb-2">
                2.5<span className="text-[#dd5953] text-3xl">+</span>
              </h3>
              <p className="text-sm text-gray-500 font-medium leading-snug">
                Years <br /> Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
