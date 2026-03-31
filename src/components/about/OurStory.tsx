import { CheckCircle2, BookOpen, Users, Globe, Award } from "lucide-react";

const partners = ["PMI Partner", "CompTIA Partner", "AWS Partner", "Microsoft Partner", "SAFe Partner"];

const highlights = [
  { icon: BookOpen, label: "Expert-Led Training", desc: "Industry veterans with real-world experience" },
  { icon: Users, label: "10,000+ Learners", desc: "Professionals trained across 30+ countries" },
  { icon: Globe, label: "Global Reach", desc: "Accessible from anywhere, anytime" },
  { icon: Award, label: "95% Pass Rate", desc: "Consistently exceeding industry benchmarks" },
];

const OurStory = () => (
  <section className="py-14 md:py-24 bg-background">
    <div className="container max-w-6xl">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Our Story</p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
          From a Vision to a Global Training Platform
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center mb-12">
        {/* Left — narrative */}
        <div className="space-y-6">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            The EduEdge was founded with a simple yet powerful mission: to make globally recognized IT certifications accessible, affordable, and achievable for professionals everywhere.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            In a rapidly evolving technology landscape, the gap between academic knowledge and industry requirements continues to widen. We saw an opportunity to bridge that gap with world-class training.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            As an authorized training partner of PMI, CompTIA, Microsoft, AWS, and Scaled Agile, we bring the credibility and structure of world-class certification bodies together with the personalized attention and flexibility that modern learners demand.
          </p>
          {/* Partner badges */}
          <div className="flex flex-wrap gap-2 md:gap-3 pt-2">
            {partners.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right — highlight cards grid */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-5 md:p-6 flex flex-col items-start gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-sm md:text-base font-bold text-foreground mb-1">{item.label}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OurStory;
