import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Visionary Architecture",
    category: "Web Development",
    description:
      "Architectural portfolio platform featuring immersive layouts and modern UI.",
  },
  {
    title: "E-Shop Landing Page",
    category: "E-Commerce",
    description:
      "High-converting landing page for a fashion brand with smooth animations.",
  },
  {
    title: "Crypto Tracker App",
    category: "Fintech",
    description:
      "Real-time crypto dashboard with live prices, charts, and portfolio tracking.",
  },
  {
    title: "Crypto Tracker App",
    category: "Fintech",
    description:
      "Real-time crypto dashboard with live prices, charts, and portfolio tracking.",
  },
];

const Portfolio = () => {
  return (
    <section
      id="projects"
      className="py-32 bg-[#0f1420] relative overflow-hidden"
    >
      {/* Background Decor (same as Skills) */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#dd5953]/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white mb-16 tracking-tight">
          My <span className="text-[#dd5953]">Projects</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#151b27] border border-white/5 rounded-2xl overflow-hidden hover:bg-[#1c2233] hover:border-[#dd5953]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#dd5953]/5"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-[#1c2233] to-[#0f1420] flex items-center justify-center">
                <span className="text-white/10 font-bold text-5xl select-none">
                  APP
                </span>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-[#dd5953]">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold text-white mt-2 mb-3 group-hover:text-[#dd5953] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button className="flex-1 py-2 rounded-lg bg-[#dd5953] text-sm font-semibold text-white hover:bg-[#e66a65] transition-colors">
                    View Project
                  </button>

                  <button className="p-2 rounded-lg border border-white/5 text-gray-400 hover:text-white hover:border-[#dd5953]/30 transition">
                    <Github size={18} />
                  </button>

                  <button className="p-2 rounded-lg border border-white/5 text-gray-400 hover:text-white hover:border-[#dd5953]/30 transition">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
