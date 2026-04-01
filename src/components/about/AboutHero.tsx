import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroAbout from "@/assets/hero-about.jpg";

const AboutHero = () => (
  <section className="relative bg-muted/40 text-foreground overflow-hidden rounded-b-[3rem] md:rounded-b-[8rem] shadow-sm">
    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />
    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-background via-background/80 to-transparent z-[1]" />
    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-background via-background/80 to-transparent z-[1]" />
    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-background via-background/80 to-transparent z-[1]" />
    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-background via-background/80 to-transparent z-[1]" />
    <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[180px] z-[2]" />
    <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] z-[2]" />

    <div className="container relative z-10 py-10 md:py-20 lg:py-24 pb-20 md:pb-32 lg:pb-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left content */}
        <div className="text-center lg:text-left">
          <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">
            About The EduEdge
          </p>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold leading-[1.12] mb-4 md:mb-5">
            Empowering Careers Through{" "}
            <span className="text-gradient-primary">World-Class</span>{" "}
            Certification Training
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6 md:mb-8">
            We bridge the gap between academic knowledge and industry requirements, delivering expert-led training that prepares you to excel.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-teal-dark text-primary-foreground font-semibold px-8 text-base gap-2 w-full sm:w-auto">
              <Link to="/courses">Explore Courses <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/5 font-semibold px-8 text-base w-full sm:w-auto">
                Talk to Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Right - Hero image */}
        <div className="relative hidden lg:block">
          <div className="absolute -top-6 -right-6 w-28 h-28 grid grid-cols-5 gap-2.5 z-0">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={`tr-${i}`} className="w-2 h-2 rounded-full bg-primary/40" />
            ))}
          </div>
          <div className="absolute -bottom-6 -left-6 w-28 h-28 grid grid-cols-5 gap-2.5 z-0">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={`bl-${i}`} className="w-2 h-2 rounded-full bg-accent/40" />
            ))}
          </div>
          <div className="absolute -top-3 -left-3 w-16 h-16 border-t-[3px] border-l-[3px] border-primary/30 rounded-tl-2xl z-0" />
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-[3px] border-r-[3px] border-accent/30 rounded-br-2xl z-0" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border z-10">
            <img
              src={heroAbout}
              alt="Professional team collaborating at The EduEdge"
              className="w-full h-[420px] object-cover"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHero;
