// import character from "../assets/character.png";
import character from "../assets/character.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-background"
    >
      {/* Background glow */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -left-40 bottom-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="space-y-6 animate-in slide-in-from-left duration-700">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Hello <span className="text-primary">.</span>
          </h2>

          <div className="flex items-center gap-4">
            <span className="h-[2px] w-12 bg-primary" />
            <p className="text-xl text-gray-300">I'm M. Usama</p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Software
            <span className="text-gray-300 font-semibold"> Engineer</span>
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-white rounded-md text-sm md:text-md font-medium cursor-pointer hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(221,89,83,0.3)] hover:shadow-[0_0_30px_rgba(221,89,83,0.5)] active:scale-95"
            >
              Get in touch
            </a>
            <a
              href="/M.Usama.pdf"
              download="M.Usama.pdf"
              className="px-6 py-3 border border-white/10 text-gray-300 rounded-md text-sm md:text-md cursor-pointer hover:border-primary/50 hover:text-white hover:bg-white/5 transition-all active:scale-95"
            >
              My resume
            </a>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-8 pt-10 border-t border-white/10 mt-10 text-sm">
            {["HTML5", "CSS", "Javascript", "Node.js", "React", "Github"].map(
              (item) => (
                <span
                  key={item}
                  className="text-gray-500 hover:text-primary transition-colors cursor-pointer font-medium"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* RIGHT HERO VISUAL */}
        <div className="relative flex justify-center items-center animate-in slide-in-from-right duration-700">
          {/* Image / Vector */}
          <img
            src={character}
            alt="Developer illustration"
            className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
