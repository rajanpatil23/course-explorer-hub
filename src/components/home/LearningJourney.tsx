import { Search, BookOpen, Users, Award } from "lucide-react";

const steps = [
  { icon: <Search className="w-6 h-6 md:w-7 md:h-7" />, num: "01", title: "Choose Certification", desc: "Browse catalog, compare, and pick the one for you." },
  { icon: <BookOpen className="w-6 h-6 md:w-7 md:h-7" />, num: "02", title: "Enroll & Get Study Kit", desc: "Register, receive materials, schedule sessions." },
  { icon: <Users className="w-6 h-6 md:w-7 md:h-7" />, num: "03", title: "Train with Experts", desc: "Live sessions, hands-on labs, real-time Q&A." },
  { icon: <Award className="w-6 h-6 md:w-7 md:h-7" />, num: "04", title: "Get Certified", desc: "Pass your exam and unlock new opportunities." },
];

const LearningJourney = () => (
  <section className="py-12 md:py-24 bg-background">
    <div className="container">
      <p className="text-center text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Your Journey</p>
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-center text-foreground mb-10 md:mb-14">
        From Enrollment to Certification in 4 Steps
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto relative">
        {/* Connector line (desktop) */}
        <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-border" />

        {steps.map((s, i) => (
          <div key={i} className="relative text-center group">
            <div className="relative mx-auto w-14 h-14 md:w-20 md:h-20 rounded-full bg-teal-light border-4 border-background flex items-center justify-center text-primary mb-3 md:mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 z-10">
              {s.icon}
            </div>
            <span className="text-[10px] md:text-xs font-bold text-primary/50 mb-1 block">{s.num}</span>
            <h3 className="font-heading font-bold text-foreground mb-1 md:mb-2 text-xs md:text-base">{s.title}</h3>
            <p className="text-[10px] md:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LearningJourney;
