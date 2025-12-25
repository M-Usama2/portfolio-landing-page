import { ExternalLink, Github } from "lucide-react";
import gerrys from "../assets/gerrys.png";
import astra from "../assets/astra.png";
import dashboard from "../assets/astra-dashboard.png";
import food from "../assets/Food.png";
import jarvis from "../assets/jarvis.png";
import sportsApp from "../assets/sports-app.png";
import telkom from "../assets/telkom1.png";

const projects = [
  {
    title: "Astra Landing Page",
    category: "Website",
    description:
      "Astra Landing Page is a modern and responsive landing page for a fashion brand with smooth animations.",
    link: "https://astra.com.pk/",
    image: astra,
  },
  {
    title: "Astra Dashboard (Sabre - PowerSuite)",
    category: "Business System",
    description:
      "Astra Dashboard is a modern and responsive dashboard for a fashion brand with smooth animations.",
    link: "https://astra.com.pk/login",
    image: dashboard,
  },
  {
    title: "Food Delivery App",
    category: "Mobile App",
    description:
      "Food Delivery App is a modern and responsive app for a fashion brand with smooth animations.",
    link: "https://pizzeria-frontend-vjur.onrender.com/",
    image: food,
  },
  {
    title: "Gerrys Group Website",
    category: "Fintech",
    description:
      "Gerrys Group Website is a modern and responsive website for a fashion brand with smooth animations.",
    link: "https://gerrys.com.pk/",
    image: gerrys,
  },
  {
    title: "Jarvis AI Chatbot",
    category: "Website",
    description:
      "Real-time crypto dashboard with live prices, charts, and portfolio tracking.",
    link: "https://jarvistechglobal.com/",
    image: jarvis,
  },
  {
    title: "Sports App",
    category: "Mobile App",
    description:
      "Sports App is a modern and responsive app for a fashion brand with smooth animations.",
    image: sportsApp,
  },
  {
    title: "Telkom App",
    category: "Mobile App",
    description:
      "Telkom App is a modern and responsive app for a fashion brand with smooth animations.",
    image: telkom,
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
              <div className="relative h-72 bg-gradient-to-br from-[#1c2233] to-[#0f1420] flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white/10 font-bold text-5xl select-none">
                    APP
                  </span>
                )}
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
                {project.link ? (
                  <div className="flex items-center gap-3">
                    <a target="_blank" href={project.link}>
                      <button className="p-2 cursor-pointer rounded-lg border border-white/5 text-gray-400 hover:text-white hover:border-[#dd5953]/30 transition">
                        <ExternalLink size={18} />
                      </button>
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
