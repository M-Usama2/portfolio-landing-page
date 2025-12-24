import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Visionary Architecture",
    category: "Web Development",
    description:
      "A stunning architectural portfolio with immersive 3D walkthroughs and gallery.",
    imageColor: "from-blue-900 to-[#0B1221]",
  },
  {
    title: "E-Shop Landing Page",
    category: "E-Commerce",
    description:
      "High-conversion landing page for a modern fashion brand with heavy animations.",
    imageColor: "from-indigo-900 to-[#0B1221]",
  },
  {
    title: "Crypto Tracker App",
    category: "Fintech",
    description:
      "Real-time cryptocurrency dashboard with live price charts and portfolio tracking.",
    imageColor: "from-emerald-900 to-[#0B1221]",
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Portfolio</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#161E2E] rounded-2xl border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-56 w-full bg-gradient-to-br ${project.imageColor} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Abstract Shapes overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 font-bold text-6xl select-none">
                  APP
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <button className="flex-1 py-2 rounded bg-primary text-white text-sm font-semibold hover:bg-red-500 transition-colors">
                    View Project
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
