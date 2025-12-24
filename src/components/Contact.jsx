import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-background/50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          Available for freelance work
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's build something <span className="text-primary">amazing</span>{" "}
          together.
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Have a project in mind? Looking for a partner to handle the technical
          side? Let's chat and turn your ideas into reality.
        </p>

        <a
          href="mailto:hello@jensenomega.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black text-lg font-bold rounded-full hover:bg-orange-600 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,87,34,0.3)]"
        >
          <Mail size={20} />
          Start a Conversation
        </a>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
};

export default Contact;
