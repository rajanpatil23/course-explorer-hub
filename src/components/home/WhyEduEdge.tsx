import { Award, Users, Monitor, Target, Rocket, BookOpen } from "lucide-react";

const features = [
  {
    icon: <Award className="w-7 h-7" />,
    title: "Accredited Training Partners",
    desc: "Official partner of PMI, CompTIA, Microsoft, AWS and Scaled Agile.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Expert-Led Live Sessions",
    desc: "Certified practitioners with 15+ years of hands-on industry experience.",
  },
  {
    icon: <Monitor className="w-7 h-7" />,
    title: "Flexible Learning Formats",
    desc: "Live online, self-paced, or blended programs for working professionals.",
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "Exam-Ready Preparation",
    desc: "Practice tests, simulators, study guides, and support until you pass.",
  },
  {
    icon: <Rocket className="w-7 h-7" />,
    title: "Career Acceleration",
    desc: "Job-aligned certifications that boost your resume, salary, and credibility.",
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Lifetime Resource Access",
    desc: "Lifetime access to materials, recordings, templates, and alumni community.",
  },
];

const WhyEduEdge = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container">
      <p className="text-center text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Why The EduEdge</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Why 10,000+ Professionals Choose Us
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
        World-class training backed by official accreditations and real industry expertise.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 max-w-5xl mx-auto auto-rows-auto">
        {features.map((f, i) => {
          // Bento-style spans: alternate between wider and narrower cards
          const spanClass = [
            "lg:col-span-7", // wide
            "lg:col-span-5", // narrow
            "lg:col-span-4", // narrow
            "lg:col-span-4", // narrow
            "lg:col-span-4", // narrow
            "lg:col-span-5 lg:col-start-1", // wide
          ][i] || "lg:col-span-4";

          const isWide = i === 0 || i === 5;

          return (
            <div
              key={i}
              className={`${spanClass} bg-card rounded-2xl border border-border group ${
                isWide ? "p-8 flex flex-row items-start gap-5" : "p-7"
              }`}
            >
              <div className={`flex-shrink-0 rounded-xl bg-teal-light flex items-center justify-center text-primary ${
                isWide ? "w-16 h-16" : "w-14 h-14 mb-5"
              }`}>
                {f.icon}
              </div>
              <div>
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
