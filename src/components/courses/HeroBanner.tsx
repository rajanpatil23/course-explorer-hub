import { useState } from "react";
import { Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import AdvisorDialog from "@/components/AdvisorDialog";

const HeroBanner = () => {
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const scrollToCourses = () => {
    document.getElementById("courses-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-hero text-hero-foreground overflow-hidden">
      {/* Background image */}
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" width={1920} height={800} />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/95 to-hero/60" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container relative z-10 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Build Skills With Industry Experts —{" "}
            <span className="text-gradient-primary">Get Certified, Get Ahead</span>
          </h1>
          <p className="text-lg md:text-xl text-hero-foreground/80 mb-8 max-w-2xl leading-relaxed">
            Master in-demand certifications across Project Management, Cybersecurity, Cloud Computing, and Agile Frameworks. Expert-led, accredited training designed for working professionals.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/60 border-2 border-hero flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">50,000+ Professionals Trained</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber text-amber" />
              <span className="text-sm font-semibold">4.9/5 Average Rating</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToCourses} className="bg-primary hover:bg-teal-dark text-primary-foreground font-semibold px-8 text-base">
              Explore Courses
            </Button>
            <Button size="lg" variant="outline" className="border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10 font-semibold px-8 text-base" onClick={() => setAdvisorOpen(true)}>
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
      <AdvisorDialog open={advisorOpen} onOpenChange={setAdvisorOpen} />
    </section>
  );
};

export default HeroBanner;
