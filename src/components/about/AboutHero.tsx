import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutHero = () => (
  <section className="relative bg-hero overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
    </div>
    <div className="container relative z-10 py-16 md:py-28">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">About The EduEdge</p>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-hero-foreground mb-5 leading-tight">
          Empowering Careers Through{" "}
          <span className="text-gradient-primary">World-Class</span>{" "}
          Certification Training
        </h1>
        <p className="text-sm md:text-base text-hero-foreground/70 leading-relaxed max-w-xl mx-auto mb-8">
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
);

export default AboutHero;
