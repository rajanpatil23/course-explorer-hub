import { Award, Users, Globe, BookOpen, Target, Shield, Rocket, GraduationCap, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


const stats = [
  { value: "10,000+", label: "Professionals Trained", icon: Users },
  { value: "50+", label: "Certification Programs", icon: BookOpen },
  { value: "98%", label: "First-Attempt Pass Rate", icon: Target },
  { value: "4.8/5", label: "Average Rating", icon: Award },
  { value: "30+", label: "Countries Served", icon: Globe },
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

const timeline = [
  { year: "2018", title: "Founded", desc: "Started with PMI certifications and a small team of 3 trainers." },
  { year: "2020", title: "Went Digital", desc: "Launched fully online live training, reaching professionals in 15+ countries." },
  { year: "2022", title: "Expanded Portfolio", desc: "Added AWS, Azure, CompTIA, and SAFe certifications to our catalog." },
  { year: "2024", title: "10K+ Milestone", desc: "Crossed 10,000 trained professionals with a 98% first-attempt pass rate." },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">About The EduEdge</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-hero-foreground mb-5 leading-tight">
              Empowering Careers Through{" "}
              <span className="text-gradient-primary">World-Class</span>{" "}
              Certification Training
            </h1>
            <p className="text-hero-foreground/70 leading-relaxed max-w-xl mx-auto mb-8">
              We bridge the gap between academic knowledge and industry requirements, delivering expert-led training that prepares you to excel.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/courses">Explore Courses <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary bg-primary/10 hover:bg-primary/20">
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Strip */}
      <section className="relative -mt-8 z-20 pb-10">
        <div className="container">
          <div className="bg-card border border-border rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-heading text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
                  <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story + Mission/Vision */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Story */}
            <div className="lg:col-span-3 space-y-5">
              <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Our Story</p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
                From a Vision to a Global Training Platform
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The EduEdge was founded with a simple yet powerful mission: to make globally recognized IT certifications accessible, affordable, and achievable for professionals everywhere. In a rapidly evolving technology landscape, the gap between academic knowledge and industry requirements continues to widen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As an authorized training partner of PMI, CompTIA, Microsoft, AWS, and Scaled Agile, we bring the credibility and structure of world-class certification bodies together with the personalized attention and flexibility that modern learners demand.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["PMI Partner", "CompTIA Partner", "AWS Partner", "Microsoft Partner", "SAFe Partner"].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To empower professionals worldwide with industry-relevant skills and globally recognized certifications that accelerate career growth, organizational impact, and lifelong learning.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To become the most trusted global platform for IT certification training — known for quality instruction, exceptional pass rates, and measurable career outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Journey */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Our Journey</p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">Key Milestones</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, i) => (
              <div key={item.year} className="relative group">
                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <span className="inline-block font-heading text-3xl font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-heading font-bold text-foreground text-base mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
                {i < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Why Choose Us</p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">What Sets Us Apart</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              We don't just prepare you for exams — we prepare you for real-world success with industry-leading training.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatSetsUsApart.map((item) => (
              <div key={item.title} className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-base mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-14 md:py-20 bg-secondary/40 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Our Trainers</p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
              Learn from Industry-Leading Experts
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Our trainers are certified practitioners with decades of real-world experience across top organizations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((t) => (
              <div key={t.name} className="group bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <span className="font-heading font-bold text-primary text-xl">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-foreground text-base">{t.name}</h3>
                <p className="text-xs text-primary font-semibold mt-1">{t.certs}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.bio}</p>
                <span className="inline-block mt-4 text-[11px] font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {t.specialty}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center max-w-3xl">
          <GraduationCap className="w-12 h-12 text-primary mx-auto mb-5" />
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-hero-foreground mb-4">
            Ready to Start Your Certification Journey?
          </h2>
          <p className="text-hero-foreground/70 mb-8 max-w-xl mx-auto">
            Join 10,000+ professionals who've accelerated their careers with The EduEdge. Browse our courses or talk to an advisor today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/courses">Browse Courses <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary bg-primary/10 hover:bg-primary/20">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Spacer / visual separator before footer */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </div>
  );
};

export default About;
