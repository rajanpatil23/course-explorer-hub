import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
    {/* Corner fades */}
    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-background via-background/80 to-transparent z-[1]" />
    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-background via-background/80 to-transparent z-[1]" />
    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-background via-background/80 to-transparent z-[1]" />
    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-background via-background/80 to-transparent z-[1]" />
    {/* Glow accents */}
    <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[180px] z-[2]" />
    <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] z-[2]" />

    <div className="container relative z-10 py-16 md:py-28 lg:py-32">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">
          About The EduEdge
        </p>
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold leading-[1.12] mb-4 md:mb-5">
          Empowering Careers Through{" "}
          <span className="text-gradient-primary">World-Class</span>{" "}
          Certification Training
        </h1>
        <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
          We bridge the gap between academic knowledge and industry requirements, delivering expert-led training that prepares you to excel.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-primary hover:bg-teal-dark text-primary-foreground font-semibold px-8 text-base gap-2">
            <Link to="/courses">Explore Courses <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/5 font-semibold px-8 text-base">
            <Link to="/contact">Talk to Us</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHero;
