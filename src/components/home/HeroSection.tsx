import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle, Star, Users, Play } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import pmiLogo from "@/assets/partners/pmi-logo.png";
import comptiaLogo from "@/assets/partners/comptia-logo.png";
import awsLogo from "@/assets/partners/aws-logo.png";
import microsoftLogo from "@/assets/partners/microsoft-logo.png";
import safeLogo from "@/assets/partners/safe-logo.png";
import isc2Logo from "@/assets/partners/isc2-logo.png";

const partners = [
  { name: "PMI", logo: pmiLogo },
  { name: "CompTIA", logo: comptiaLogo },
  { name: "AWS", logo: awsLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "SAFe", logo: safeLogo },
  { name: "ISC2", logo: isc2Logo },
];

const HeroSection = () => {
  const scrollToCourses = () => {
    document.getElementById("courses-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50" />
      <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[180px]" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container relative z-10 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold tracking-wide text-foreground">Authorized Partner — PMI · CompTIA · AWS · Microsoft · SAFe</span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold leading-[1.12] mb-5">
              Enhance Skills With Our Specialists —{" "}
              <span className="text-gradient-primary">Anytime, Anywhere</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Prepare to take the next step in your career with industry-recognized certification training. Begin your immersive learning journey with us.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                size="lg"
                onClick={scrollToCourses}
                className="bg-primary hover:bg-teal-dark text-primary-foreground font-semibold px-8 text-base gap-2"
              >
                Explore Courses <ChevronRight className="w-4 h-4" />
              </Button>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10 font-semibold px-8 text-base"
                >
                  Talk to an Advisor
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["R", "M", "V", "A"].map((initial, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/70 border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground"
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Rated by Learners</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber text-amber" />
                    <span className="text-sm font-bold text-foreground">4.9/5</span>
                    <span className="text-xs text-muted-foreground">· 10,000+ Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Hero image card */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={heroHome}
                alt="Professional certification training at The EduEdge"
                className="w-full h-[420px] object-cover"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors shadow-lg">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" />
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex justify-between text-primary-foreground">
                <div>
                  <p className="text-2xl font-bold">10,000+</p>
                  <p className="text-xs opacity-80">Professionals Trained</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-xs opacity-80">Certifications</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">98%</p>
                  <p className="text-xs opacity-80">Pass Rate</p>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-accent" />
              ))}
            </div>
          </div>
        </div>

        {/* Partner logos */}
        <div className="border-t border-hero-foreground/10 mt-14 pt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-hero-foreground/40 mb-5">Trusted By</p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {partners.map(p => (
              <img
                key={p.name}
                src={p.logo}
                alt={p.name}
                className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                loading="lazy"
              />
            ))}
            <span className="text-xs text-hero-foreground/40">and 6,000+ companies across the globe</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
