import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ end, duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    let start = 0;
    const increment = end / (duration / 16); // Approx 60fps frame time (16ms)

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
  };

  return <span ref={countRef}>{count.toFixed(decimals)}</span>;
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-[#0f1420] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#dd5953]/10 blur-[120px]" />

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="max-w-4xl">
          {/* Section Title */}
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-10 tracking-tight">
            About Me
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-xl leading-relaxed mb-20 max-w-2xl font-light">
            I'm a self-taught software developer with a strong focus on building
            modern, high-quality web and mobile applications. I enjoy solving
            complex problems and continuously learning new technologies. My goal
            is to craft intuitive, performant, and visually appealing digital
            experiences.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-y-14 gap-x-10 md:gap-x-20 border-t border-white/10 pt-12">
            <div>
              <h3 className="text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={20} />
                <span className="text-[#dd5953] text-5xl">+</span>
              </h3>
              <p className="text-sm text-gray-500 font-medium leading-snug">
                Completed <br /> Projects
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={95} />
                <span className="text-[#dd5953] text-5xl">%</span>
              </h3>
              <p className="text-sm text-gray-500 font-medium leading-snug">
                Client <br /> Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={2.5} duration={2000} decimals={1} />
                <span className="text-[#dd5953] text-5xl">+</span>
              </h3>
              <p className="text-sm text-gray-500 font-medium leading-snug">
                Years <br /> Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
