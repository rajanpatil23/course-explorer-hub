import { useState } from "react";
import { Search, BookOpen, Users, Award } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Choose Certification", desc: "Browse catalog, compare, and pick the one for you." },
  { icon: BookOpen, num: "02", title: "Enroll & Get Study Kit", desc: "Register, receive materials, schedule sessions." },
  { icon: Users, num: "03", title: "Train with Experts", desc: "Live sessions, hands-on labs, real-time Q&A." },
  { icon: Award, num: "04", title: "Get Certified", desc: "Pass your exam and unlock new opportunities." },
];

const LearningJourney = () => {
  const [hovered, setHovered] = useState(-1);

  // Progress width: from first icon center to hovered icon center
  // Each icon is at 12.5%, 37.5%, 62.5%, 87.5% of the connector
  const getProgressWidth = () => {
    if (hovered <= 0) return "0%";
    const pct = (hovered / 3) * 100;
    return `${pct}%`;
  };

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container">
        <p className="text-center text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Your Journey</p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-center text-foreground mb-10 md:mb-14">
          From Enrollment to Certification in 4 Steps
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-border" />

          {/* Glow progress line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[12%] h-0.5 transition-all duration-500 ease-out"
            style={{
              width: getProgressWidth(),
              maxWidth: "76%",
              background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.6))",
              boxShadow: hovered >= 1 ? "0 0 8px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--primary) / 0.2)" : "none",
            }}
          />

          {steps.map((s, i) => {
            const Icon = s.icon;
            const isActive = hovered >= 0 && i <= hovered;

            return (
              <div
                key={i}
                className="relative text-center group"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(-1)}
              >
                <div
                  className={`relative mx-auto w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-background flex items-center justify-center mb-3 md:mb-5 z-10 transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground scale-110 shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
                      : "bg-teal-light text-primary"
                  }`}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-primary/50 mb-1 block">{s.num}</span>
                <h3 className="font-heading font-bold text-foreground mb-1 md:mb-2 text-xs md:text-base">{s.title}</h3>
                <p className="text-[10px] md:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
