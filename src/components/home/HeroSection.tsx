import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle } from "lucide-react";
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
    <section className="relative bg-hero text-hero-foreground overflow-hidden">
      <img
        src={heroHome}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-hero via-hero/90 to-hero/70" />

      {/* Decorative glow */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container relative z-10 pt-16 pb-10 md:pt-24 md:pb-14 lg:pt-32 lg:pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-8">
          <CheckCircle className="w-4 h-4 text-accent" />
          <span className="text-xs font-semibold tracking-wide">Authorized Partner — PMI · CompTIA · AWS · Microsoft · SAFe</span>
        </div>

        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] mb-6">
            Your Certification.
            <br />
            Your Career.
            <br />
            <span className="text-gradient-primary">Your Edge.</span>
          </h1>
          <p className="text-lg md:text-xl text-hero-foreground/75 mb-10 max-w-2xl leading-relaxed">
            Industry-recognized IT certification training delivered by expert instructors.
            <br className="hidden md:block" />
            Gain the credentials that top employers demand.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
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
        </div>

        {/* Partner logos */}
        <div className="border-t border-hero-foreground/10 pt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
