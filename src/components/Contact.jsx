import { Monitor, Smartphone, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-[#0f1420] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#dd5953]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
          My <span className="text-[#dd5953]">Expertise</span>
        </h2>

        <p className="text-gray-400 max-w-xl mb-16">
          Have a project in mind? Let’s discuss how I can help bring your ideas
          to life with modern, scalable solutions.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left – Expertise Cards */}
          <div className="space-y-6">
            <div className="bg-[#151b27] border border-white/5 rounded-2xl p-6 hover:border-[#dd5953]/30 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#dd5953]/5">
              <div className="flex items-start gap-4">
                <Monitor size={35} className="text-[#dd5953] mt-1" />
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Website Development
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Modern, fast, and responsive websites built with React,
                    Next.js, and Tailwind CSS—focused on performance and UX.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#151b27] border border-white/5 rounded-2xl p-6 hover:border-[#dd5953]/30 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#dd5953]/5">
              <div className="flex items-start gap-4">
                <Smartphone size={35} className="text-[#dd5953] mt-1" />
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    App Development
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Scalable web applications with clean architecture, smooth
                    animations, and robust backend integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right – Contact Summary */}
          <div className="bg-[#151b27] border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-400">Your Name</p>
                <p className="text-white font-medium">Muhammad Usama</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#dd5953]" />
                <p className="text-white">usama.muhammad.official@gmail.com</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-[#dd5953]" />
                <p className="text-white">+92 312 8913022</p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-[#dd5953]" />
                <p className="text-white">Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
