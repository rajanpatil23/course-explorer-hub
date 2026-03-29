import { Award, Users, Globe, BookOpen, Target, Shield } from "lucide-react";

const stats = [
  { value: "10,000+", label: "Professionals Trained" },
  { value: "50+", label: "Certification Programs" },
  { value: "98%", label: "First-Attempt Pass Rate" },
  { value: "4.8/5", label: "Average Rating" },
  { value: "30+", label: "Countries Served" },
];

const trainers = [
  {
    name: "Rajiv Sharma",
    certs: "PMP, PMI-ACP, CSM",
    bio: "18+ years in project management across banking & IT. Former PM Director at Cognizant.",
    specialty: "PMI & Agile Leadership",
  },
  {
    name: "Meera Nair",
    certs: "AWS SA-Pro, Azure Solutions Architect",
    bio: "15+ years in cloud architecture. Led cloud migration for Fortune 500 companies.",
    specialty: "AWS & Azure Cloud",
  },
  {
    name: "Vikram Patel",
    certs: "CISSP, CISM, CompTIA SecurityX",
    bio: "20+ years in cybersecurity. Former CISO at a leading fintech. DoD 8570 specialist.",
    specialty: "Cybersecurity",
  },
  {
    name: "Ananya Rao",
    certs: "SAFe SPC, Leading SAFe, CSM",
    bio: "16+ years in agile transformation. Implemented SAFe at 12+ enterprises across 3 continents.",
    specialty: "SAFe & Agile Frameworks",
  },
];

const whatSetsUsApart = [
  { icon: Award, title: "Accredited Training Partner", desc: "Official partner of PMI, CompTIA, Microsoft, AWS, and Scaled Agile." },
  { icon: Users, title: "Expert-Led Live Sessions", desc: "Certified practitioners with 15+ years of hands-on industry experience." },
  { icon: BookOpen, title: "Flexible Learning Formats", desc: "Live online, self-paced, or blended programs for working professionals." },
  { icon: Target, title: "Exam-Ready Preparation", desc: "Practice tests, simulators, study guides, and support until you pass." },
  { icon: Globe, title: "Career Acceleration", desc: "Job-aligned certifications that boost your resume, salary, and credibility." },
  { icon: Shield, title: "Lifetime Resource Access", desc: "Lifetime access to materials, recordings, templates, and alumni community." },
];

const About = () => {
  return (
    <div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary to-background py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About Us</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Empowering Careers Through World-Class Certification Training
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container max-w-4xl space-y-10">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              The EduEdge was founded with a simple yet powerful mission: to make globally recognized IT certifications accessible, affordable, and achievable for professionals everywhere. In a rapidly evolving technology landscape, the gap between academic knowledge and industry requirements continues to widen. We bridge that gap by delivering expert-led, accredited training programs that prepare professionals not just to pass exams, but to excel in their roles.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              As an authorized training partner of PMI, CompTIA, Microsoft, AWS, and Scaled Agile, we bring the credibility and structure of world-class certification bodies together with the personalized attention and flexibility that modern learners demand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To empower professionals worldwide with industry-relevant skills and globally recognized certifications that accelerate career growth, organizational impact, and lifelong learning.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To become the most trusted global platform for IT certification training — known for quality instruction, exceptional pass rates, and measurable career outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">What Sets Us Apart</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whatSetsUsApart.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-lg p-6 flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">{s.value}</p>
                <p className="text-primary-foreground/80 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <p className="text-center text-sm font-semibold text-primary uppercase tracking-widest mb-2">Our Trainers</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Learn from Industry-Leading Experts
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {trainers.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-heading font-bold text-primary text-lg">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-foreground text-sm">{t.name}</h3>
                <p className="text-xs text-primary font-medium mt-1">{t.certs}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{t.bio}</p>
                <span className="inline-block mt-3 text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  {t.specialty}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;
