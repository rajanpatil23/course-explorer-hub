import { Award, Users, BookOpen, Target, Globe, Shield } from "lucide-react";

const items = [
  { icon: <Award className="w-6 h-6 md:w-7 md:h-7" />, title: "Accredited Training Partner", desc: "Official partner of PMI, CompTIA, Microsoft, AWS, and Scaled Agile." },
  { icon: <Users className="w-6 h-6 md:w-7 md:h-7" />, title: "Expert-Led Live Sessions", desc: "Certified practitioners with 15+ years of hands-on industry experience." },
  { icon: <BookOpen className="w-6 h-6 md:w-7 md:h-7" />, title: "Flexible Learning Formats", desc: "Live online, self-paced, or blended programs for working professionals." },
  { icon: <Target className="w-6 h-6 md:w-7 md:h-7" />, title: "Exam-Ready Preparation", desc: "Practice tests, simulators, study guides, and support until you pass." },
  { icon: <Globe className="w-6 h-6 md:w-7 md:h-7" />, title: "Career Acceleration", desc: "Job-aligned certifications that boost your resume, salary, and credibility." },
  { icon: <Shield className="w-6 h-6 md:w-7 md:h-7" />, title: "Lifetime Resource Access", desc: "Lifetime access to materials, recordings, templates, and alumni community." },
];

const WhatSetsUsApart = () => (
  <section className="py-12 md:py-24 bg-background">
    <div className="container max-w-6xl">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Why Choose Us</p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">What Sets Us Apart</h2>
        <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
          We don't just prepare you for exams — we prepare you for real-world success with industry-leading training.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {items.map((item, i) => (
          <div key={item.title} className="group bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
            {/* Subtle decoration */}
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary/[0.03] rounded-tl-[2.5rem] pointer-events-none" />

            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 text-primary">
                {item.icon}
              </div>
              <h3 className="font-heading font-bold text-foreground text-xs md:text-base mb-1 md:mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-[10px] md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatSetsUsApart;
