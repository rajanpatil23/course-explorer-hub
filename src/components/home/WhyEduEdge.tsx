import { Award, Users, Monitor, Target, Rocket, BookOpen } from "lucide-react";

const features = [
  {
    icon: <Award className="w-7 h-7" />,
    title: "Accredited Training Partners",
    desc: "Official partner of PMI, CompTIA, Microsoft, AWS and Scaled Agile.",
    accent: "primary",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Expert-Led Live Sessions",
    desc: "Certified practitioners with 15+ years of hands-on industry experience.",
    accent: "accent",
  },
  {
    icon: <Monitor className="w-7 h-7" />,
    title: "Flexible Learning Formats",
    desc: "Live online, self-paced, or blended programs for working professionals.",
    accent: "primary",
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "Exam-Ready Preparation",
    desc: "Practice tests, simulators, study guides, and support until you pass.",
    accent: "amber",
  },
  {
    icon: <Rocket className="w-7 h-7" />,
    title: "Career Acceleration",
    desc: "Job-aligned certifications that boost your resume, salary, and credibility.",
    accent: "accent",
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Lifetime Resource Access",
    desc: "Lifetime access to materials, recordings, templates, and alumni community.",
    accent: "primary",
  },
];

const WhyEduEdge = () => (
  <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
    {/* Large glow blobs */}
    <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[180px]" />
    <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] rounded-full bg-accent/8 blur-[150px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-amber/5 blur-[120px]" />

    {/* Dot grid - top right */}
    <div className="absolute top-6 right-8 w-32 h-32 grid grid-cols-6 gap-2.5 hidden lg:grid">
      {Array.from({ length: 36 }).map((_, i) => (
        <div key={`tr-${i}`} className="w-2 h-2 rounded-full bg-primary/25" />
      ))}
    </div>
    {/* Dot grid - bottom left */}
    <div className="absolute bottom-10 left-6 w-28 h-28 grid grid-cols-5 gap-2.5 hidden lg:grid">
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={`bl-${i}`} className="w-2 h-2 rounded-full bg-accent/25" />
      ))}
    </div>

    {/* Decorative rings */}
    <div className="absolute top-16 left-[15%] w-20 h-20 rounded-full border-2 border-primary/10 hidden lg:block" />
    <div className="absolute top-12 left-[15%] ml-6 mt-6 w-10 h-10 rounded-full border-2 border-accent/15 hidden lg:block" />
    <div className="absolute bottom-20 right-[12%] w-24 h-24 rounded-full border-2 border-primary/10 hidden lg:block" />
    <div className="absolute bottom-16 right-[12%] mr-4 mb-4 w-12 h-12 rounded-full border-2 border-accent/15 hidden lg:block" />

    {/* Floating shapes */}
    <div className="absolute top-32 right-[25%] w-3 h-3 bg-primary/20 rotate-45 hidden lg:block" />
    <div className="absolute bottom-28 left-[22%] w-4 h-4 bg-accent/20 rotate-12 rounded-sm hidden lg:block" />
    <div className="absolute top-1/2 right-6 w-2.5 h-2.5 bg-amber/30 rounded-full hidden lg:block" />
    <div className="absolute top-1/3 left-4 w-2 h-2 bg-primary/25 rounded-full hidden lg:block" />

    {/* Cross accents */}
    <div className="absolute top-24 left-[30%] hidden lg:block">
      <div className="w-5 h-[3px] bg-primary/15 rounded-full" />
      <div className="w-[3px] h-5 bg-primary/15 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
    <div className="absolute bottom-32 right-[28%] hidden lg:block">
      <div className="w-5 h-[3px] bg-accent/15 rounded-full" />
      <div className="w-[3px] h-5 bg-accent/15 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>

    {/* Curved corner lines */}
    <div className="absolute top-4 left-4 w-20 h-20 border-t-[3px] border-l-[3px] border-primary/10 rounded-tl-3xl hidden lg:block" />
    <div className="absolute bottom-4 right-4 w-20 h-20 border-b-[3px] border-r-[3px] border-accent/10 rounded-br-3xl hidden lg:block" />

    <div className="container relative z-10">
      <p className="text-center text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Why The EduEdge</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Why 10,000+ Professionals Choose Us
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
        World-class training backed by official accreditations and real industry expertise.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 max-w-5xl mx-auto grid-rows-[auto_auto_auto]">
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

          // Each card gets a unique decorative element
          const decorations: Record<number, JSX.Element> = {
            0: (
              <>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[3rem]" />
                <div className="absolute bottom-3 right-4 w-8 h-8 border-2 border-primary/10 rounded-full" />
              </>
            ),
            1: (
              <>
                <div className="absolute -top-1 -right-1 w-16 h-16 border-2 border-accent/10 rounded-full" />
                <div className="absolute bottom-0 left-0 w-20 h-12 bg-accent/5 rounded-tr-[2rem]" />
              </>
            ),
            2: (
              <>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-accent/10 to-transparent" />
                <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-1.5">
                  {Array.from({ length: 9 }).map((_, j) => (
                    <div key={j} className="w-1.5 h-1.5 rounded-full bg-primary/15" />
                  ))}
                </div>
                <div className="absolute top-1/2 right-0 w-12 h-12 border-2 border-primary/8 rounded-full -translate-y-1/2 translate-x-1/2" />
              </>
            ),
            3: (
              <>
                <div className="absolute top-0 right-0 w-16 h-16 bg-amber/5 rounded-bl-[2rem]" />
                <div className="absolute bottom-2 left-3 w-2 h-2 bg-amber/20 rotate-45" />
              </>
            ),
            4: (
              <>
                <div className="absolute bottom-0 right-0 w-20 h-16 bg-accent/5 rounded-tl-[2.5rem]" />
                <div className="absolute top-3 right-3 w-6 h-6 border-2 border-accent/10 rounded-lg rotate-12" />
              </>
            ),
            5: (
              <>
                <div className="absolute top-0 left-0 w-28 h-1 bg-gradient-to-r from-primary/20 to-transparent" />
                <div className="absolute bottom-0 right-0 w-28 h-1 bg-gradient-to-l from-accent/20 to-transparent" />
                <div className="absolute top-3 right-6 grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 8 }).map((_, j) => (
                    <div key={j} className="w-1.5 h-1.5 rounded-full bg-primary/12" />
                  ))}
                </div>
                <div className="absolute bottom-4 left-6 w-10 h-10 border-2 border-primary/8 rounded-full" />
              </>
            ),
          };

          return (
            <div
              key={i}
              className={`${spanClass} relative bg-card rounded-2xl border border-border group overflow-hidden ${
                isWide ? "p-8 flex flex-row items-start gap-5" : isTall ? "p-7 flex flex-col justify-between h-full" : "p-7"
              }`}
            >
              {/* Per-card decorations */}
              {decorations[i]}

              <div className={`relative z-10 flex-shrink-0 rounded-xl bg-teal-light flex items-center justify-center text-primary ${
                isWide ? "w-16 h-16" : "w-14 h-14 mb-5"
              }`}>
                {f.icon}
              </div>
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-foreground mb-2 text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyEduEdge;
