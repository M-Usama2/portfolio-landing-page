// import character from "../assets/character.png";
import character from "../assets/character3.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0f1420]"
    >
      {/* Background glow */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#dd5953]/20 blur-[120px]" />
      <div className="absolute -left-40 bottom-0 w-[400px] h-[400px] rounded-full bg-[#dd5953]/10 blur-[120px]" />

      <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="space-y-6 animate-in slide-in-from-left duration-700">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Hello <span className="text-[#dd5953]">.</span>
          </h2>

          <div className="flex items-center gap-4">
            <span className="h-[2px] w-12 bg-[#dd5953]" />
            <p className="text-xl text-gray-300">I'm M. Usama</p>
          </div>

          <h1 className="text-6xl md:text-6xl font-bold text-white leading-tight whitespace-nowrap">
            Software
            <span className="text-gray-300 font-semibold"> Engineer</span>
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <a
              href="#contact"
              className="px-7 py-3 bg-[#dd5953]  text-white rounded-md text-md font-medium cursor-pointer hover:opacity-90 transition"
            >
              Get in touch
            </a>
            <button className="px-7 py-3 border border-gray-600 text-gray-300 rounded-md text-md cursor-pointer hover:border-gray-400 hover:text-white transition">
              My resume
            </button>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-8 pt-10 border-t border-white/10 mt-10 text-sm">
            {["HTML5", "CSS", "Javascript", "Node.js", "React", "Github"].map(
              (item) => (
                <span
                  key={item}
                  className="text-gray-500 hover:text-white transition cursor-pointer"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* RIGHT HERO VISUAL */}
        <div className="relative flex justify-center items-center animate-in slide-in-from-right duration-700">
          {/* Circle frame */}
          {/* Inner glow */}

          {/* Image / Vector */}
          <img
            src={character} // replace with your vector image
            alt="Developer illustration"
            className="w-[600px] h-[600px]  relative z-10 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
