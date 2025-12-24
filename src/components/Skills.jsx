import {
  FileCode2,
  Palette,
  FileJson,
  Server,
  Atom,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    name: "HTML5",
    description: "Semantic markup, Accessibility, SEO structure",
    icon: FileCode2,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    description: "Responsive design, Flexbox, Grid, Animations",
    icon: Palette,
    color: "text-blue-500",
  },
  {
    name: "Javascript",
    description: "ES6+, Async/Await, DOM Manipulation",
    icon: FileJson,
    color: "text-yellow-500",
  },
  {
    name: "Node.js",
    description: "REST APIs, Express, Backend Logic",
    icon: Server,
    color: "text-green-500",
  },
  {
    name: "React",
    description: "Hooks, Context, State Management",
    icon: Atom,
    color: "text-cyan-500",
  },
  {
    name: "Git",
    description: "Version Control, Branching, Collaboration",
    icon: GitBranch,
    color: "text-red-500",
  },
];

const Skills = () => {
  return (
    <section id="expertise" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 bg-[#161E2E]/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/20 transition-all group hover:-translate-y-1 cursor-default"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className={`p-2 rounded-lg bg-white/5 ${skill.color}`}>
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed pl-[3.5rem]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
