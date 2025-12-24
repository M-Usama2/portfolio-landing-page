const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Right Hero Glow */}
      <div className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] rounded-full border border-primary/20 opacity-30 blur-[1px]"></div>
      <div className="absolute top-[5%] right-[5%] w-[600px] h-[600px] rounded-full border border-primary/10 opacity-40"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full"></div>

      {/* Middle Right (About Section) Large Curve */}
      <div className="absolute top-[40%] right-[-20%] w-[1000px] h-[1000px] rounded-full border border-primary/10 opacity-20"></div>
      <div className="absolute top-[45%] right-[-15%] w-[800px] h-[800px] bg-gradient-to-l from-primary/10 to-transparent blur-[80px] rounded-full"></div>

      {/* Bottom Left (Portfolio) Glow */}
      <div className="absolute bottom-[10%] -left-[10%] w-[600px] h-[600px] rounded-full border border-primary/10 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full"></div>
    </div>
  );
};

export default BackgroundEffects;
