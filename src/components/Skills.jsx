import {
  Palette,
  Zap,
  Move,
  FileCode,
  AppWindow,
  Figma,
  Database,
  CreditCard,
  HardDrive,
  Layers,
  Box,
  Layout,
  Code,
  Globe,
  Server,
  Atom,
  GitBranch,
  Github,
  Braces,
  Cpu,
} from "lucide-react";

const skills = [
  { name: "HTML5", icon: Code },
  { name: "CSS", icon: Layout },
  { name: "Javascript", icon: Braces },
  { name: "TypeScript", icon: FileCode },
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Globe },
  { name: "Node.js", icon: Server },
  { name: "Nest.js", icon: Layers },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Framer Motion", icon: Move },
  { name: "Vite", icon: Zap },
  { name: "Figma", icon: Figma },
  { name: "Prisma", icon: Database },
  { name: "PostgreSQL", icon: HardDrive },
  { name: "Minio", icon: Box },
  { name: "Stripe", icon: CreditCard },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
  { name: "React Native", icon: AppWindow },
];

const Skills = () => {
  return (
    <section
      id="expertise"
      className="py-32 bg-[#0f1420] relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#dd5953]/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-16 tracking-tight">
          My <span className="text-[#dd5953]">Expertise</span>
        </h2>

        {/* Badge Grid - Equal Sizing */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 px-4 py-4 bg-[#151b27] border border-white/5 rounded-xl hover:bg-[#1c2233] hover:border-[#dd5953]/30 transition-all duration-300 hover:-translate-y-1 cursor-default hover:shadow-lg hover:shadow-[#dd5953]/5 group"
            >
              <skill.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
