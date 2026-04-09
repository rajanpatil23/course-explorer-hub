import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import pmiLogo from "@/assets/partners/pmi-logo-trimmed.png";
import comptiaLogo from "@/assets/partners/comptia-logo-trimmed.png";
import awsLogo from "@/assets/partners/aws-logo-trimmed.png";
import microsoftLogo from "@/assets/partners/microsoft-logo-trimmed.png";
import safeLogo from "@/assets/partners/safe-logo-official.png";
import isc2Logo from "@/assets/partners/isc2-logo-trimmed.png";

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

      <div className="container relative z-10 py-10 md:py-20 lg:py-24 pb-20 md:pb-32 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold leading-[1.12] mb-4 md:mb-5">
              Enhance Skills With Our Specialists - <span className="text-gradient-primary">Anytime, Anywhere</span>
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Prepare to take the next step in your career with industry-recognized certification training. Begin your
              immersive learning journey with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToCourses}
                className="bg-primary hover:bg-teal-dark text-primary-foreground font-semibold px-8 text-base gap-2 w-full sm:w-auto"
              >
                Explore Courses <ChevronRight className="w-4 h-4" />
              </Button>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/5 font-semibold px-8 text-base w-full sm:w-auto"
                >
                  Talk to an Advisor
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[
                    "https://randomuser.me/api/portraits/women/44.jpg",
                    "https://randomuser.me/api/portraits/men/32.jpg",
                    "https://randomuser.me/api/portraits/women/68.jpg",
                    "https://randomuser.me/api/portraits/men/75.jpg",
                    "https://randomuser.me/api/portraits/women/21.jpg",
                    "https://randomuser.me/api/portraits/men/46.jpg",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Learner"
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-background object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-[10px] md:text-xs font-medium text-muted-foreground">Rated by Learners</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 md:w-3.5 md:h-3.5 fill-amber text-amber" />
                    <span className="text-xs md:text-sm font-bold text-foreground">4.9/5</span>
                    <span className="text-[10px] md:text-xs text-muted-foreground">· 10,000+ Reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trusted By - partner logos */}
            <div className="mt-5 md:mt-6">
              <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Official Certification Partner
              </p>
              <div className="relative overflow-hidden max-w-md mx-auto lg:mx-0">
                <div className="flex animate-marquee items-center gap-5 sm:gap-6 md:gap-8 w-max">
                  {[...partners, ...partners].map((p, i) => (
                    <div
                      key={`${p.name}-${i}`}
                      className="flex h-8 sm:h-10 md:h-12 items-center justify-center flex-shrink-0"
                    >
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="h-5 sm:h-6 md:h-7 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-1">and 6,000+ companies across the globe</p>
            </div>
          </div>

          {/* Right - Hero image card */}
          <div className="relative hidden lg:block">
            {/* Dots pattern - top right */}
            <div className="absolute -top-6 -right-6 w-28 h-28 grid grid-cols-5 gap-2.5 z-0">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={`tr-${i}`} className="w-2 h-2 rounded-full bg-primary/40" />
              ))}
            </div>
            {/* Dots pattern - bottom left */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 grid grid-cols-5 gap-2.5 z-0">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={`bl-${i}`} className="w-2 h-2 rounded-full bg-accent/40" />
              ))}
            </div>
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-[3px] border-l-[3px] border-primary/30 rounded-tl-2xl z-0" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-[3px] border-r-[3px] border-accent/30 rounded-br-2xl z-0" />
            <div className="absolute -top-10 left-1/3 z-0">
              <div className="w-4 h-[3px] bg-primary/25 rounded-full" />
              <div className="w-[3px] h-4 bg-primary/25 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="absolute -bottom-10 right-1/4 z-0">
              <div className="w-4 h-[3px] bg-accent/25 rounded-full" />
              <div className="w-[3px] h-4 bg-accent/25 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border z-10">
              <img
                src={heroHome}
                alt="Professional certification training at The EduEdge"
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
};

export default HeroSection;
