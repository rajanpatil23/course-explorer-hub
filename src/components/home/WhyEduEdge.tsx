import { Award, Users, Monitor, Target, Rocket, BookOpen, CheckCircle } from "lucide-react";

const features = [
  { icon: <Award className="w-6 h-6 md:w-7 md:h-7" />, title: "Accredited Training Partners", desc: "Official partner of PMI, CompTIA, Microsoft, AWS and Scaled Agile.", bullets: [] },
  { icon: <Users className="w-6 h-6 md:w-7 md:h-7" />, title: "Expert-Led Live Sessions", desc: "Certified practitioners with 15+ years of hands-on industry experience.", bullets: [] },
  { icon: <Monitor className="w-6 h-6 md:w-7 md:h-7" />, title: "Flexible Learning Formats", desc: "Live online, self-paced, or blended programs for working professionals.", bullets: ["Live Online Classes", "Self-Paced Videos", "Blended Learning", "Weekend Batches"] },
  { icon: <Target className="w-6 h-6 md:w-7 md:h-7" />, title: "Exam-Ready Preparation", desc: "Practice tests, simulators, study guides, and support until you pass.", bullets: [] },
  { icon: <Rocket className="w-6 h-6 md:w-7 md:h-7" />, title: "Career Acceleration", desc: "Job-aligned certifications that boost your resume, salary, and credibility.", bullets: [] },
  { icon: <BookOpen className="w-6 h-6 md:w-7 md:h-7" />, title: "Lifetime Resource Access", desc: "Lifetime access to materials, recordings, templates, and alumni community.", bullets: ["Recorded Sessions", "Study Templates", "Alumni Network"] },
];

const cardDecorations: Record<number, JSX.Element> = {
  0: (
    <div className="absolute bottom-3 left-3 grid grid-cols-3 gap-1">
      {Array.from({ length: 9 }).map((_, j) => (
        <div key={j} className="w-1.5 h-1.5 rounded-full bg-primary/10" />
      ))}
    </div>
  ),
  1: <div className="absolute bottom-0 right-0 w-14 h-14 bg-accent/[0.04] rounded-tl-[2rem]" />,
  2: (
    <>
      <div className="absolute top-6 left-0 w-1 h-[40%] bg-gradient-to-b from-primary/20 to-transparent rounded-r-full" />
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/[0.03] rounded-bl-[2.5rem]" />
    </>
  ),
  3: <div className="absolute top-0 right-0 w-20 h-14 bg-accent/[0.05] rounded-bl-[2rem]" />,
  4: <div className="absolute top-0 left-0 w-12 h-12 bg-accent/[0.04] rounded-br-[2rem]" />,
  5: (
    <>
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-24 h-16 bg-primary/[0.03] rounded-tl-[3rem]" />
    </>
  ),
};

const WhyEduEdge = () => (
  <section className="py-12 md:py-24 bg-secondary rounded-t-[3rem] md:rounded-t-[8rem]">
    <div className="container">
      <p className="text-center text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Why The EduEdge</p>
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-center text-foreground mb-3 md:mb-4">
        Why 10,000+ Professionals Choose Us
      </h2>
      <p className="text-center text-sm md:text-base text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto">
        World-class training backed by official accreditations and real industry expertise.
      </p>

      {/* Mobile: 2-col simple grid. Desktop: fancy 12-col layout */}
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 md:gap-5 max-w-5xl mx-auto">
        {features.map((f, i) => {
          const spanClass = [
            "lg:col-span-7",
            "lg:col-span-5",
            "lg:col-span-4 lg:row-span-2",
            "lg:col-span-4",
            "lg:col-span-4",
            "lg:col-span-8",
          ][i] || "lg:col-span-4";

          const isWide = i === 0 || i === 5;
          const isTall = i === 2;

          return (
            <div
              key={i}
              className={`${spanClass} relative bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden ${
                isWide
                  ? "p-4 md:p-8 flex flex-col md:flex-row items-start gap-3 md:gap-5"
                  : isTall
                  ? "p-4 md:p-7 flex flex-col h-full"
                  : "p-4 md:p-7"
              }`}
            >
              {cardDecorations[i]}

              <div
                className={`relative z-10 flex-shrink-0 rounded-lg md:rounded-xl bg-teal-light flex items-center justify-center text-primary ${
                  isWide ? "w-10 h-10 md:w-16 md:h-16" : "w-10 h-10 md:w-14 md:h-14 mb-2 md:mb-4"
                }`}
              >
                {f.icon}
              </div>
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-foreground mb-1 md:mb-2 text-xs md:text-lg">{f.title}</h3>
                <p className="text-[10px] md:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>

                {f.bullets.length > 0 && (
                  <ul className={`mt-2 md:mt-4 space-y-1 md:space-y-2 hidden md:block ${isWide ? "md:flex md:flex-wrap md:gap-x-6 md:gap-y-2 md:space-y-0" : ""}`}>
                    {f.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyEduEdge;
