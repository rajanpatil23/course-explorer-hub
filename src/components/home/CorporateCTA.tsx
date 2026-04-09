import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, UserCheck, BarChart3 } from "lucide-react";
import corporateCta from "@/assets/corporate-model.png";

const CorporateCTA = () => (
  <section className="relative pt-8 md:pt-16 pb-0 bg-hero text-hero-foreground overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero/95 to-primary/20" />
    <div className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />

    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Left – Image */}
        <div className="relative flex items-end justify-center lg:justify-start self-end order-2 lg:order-1">
          <div
            className="absolute -top-6 -left-4 w-[110%] h-[90%] pointer-events-none opacity-20 hidden md:block"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1.2px, transparent 1.2px)",
              backgroundSize: "18px 18px",
            }}
          />
          <img
            src={corporateCta}
            alt="Corporate training – Upskill your team"
            className="relative z-10 w-full max-w-[250px] md:max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* Right – Content */}
        <div className="relative text-center lg:text-left self-center -mt-0 lg:-mt-12 order-1 lg:order-2">
          <div
            className="absolute top-1/2 left-1/3 w-[80%] h-[70%] -translate-y-1/2 pointer-events-none opacity-[0.08] hidden md:block"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(var(--accent)) 1.2px, transparent 1.2px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10">
            <p className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-[0.2em] mb-2 md:mb-3">Corporate Training</p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              Level Up Your Team
            </h2>
            <p className="text-hero-foreground/70 mb-6 md:mb-10 max-w-xl text-sm md:text-base mx-auto lg:mx-0">
              Custom corporate training with volume pricing, dedicated account management, and progress dashboards.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-6 md:mb-8">
              {[
                { icon: <Building2 className="w-4 h-4 md:w-5 md:h-5" />, text: "Custom Programs" },
                { icon: <UserCheck className="w-4 h-4 md:w-5 md:h-5" />, text: "Dedicated Manager" },
                { icon: <BarChart3 className="w-4 h-4 md:w-5 md:h-5" />, text: "Progress Tracking" },
              ].map((v, i) => (
                <div key={i} className="flex items-center gap-1.5 md:gap-2">
                  <span className="text-hero-foreground">{v.icon}</span>
                  <span className="text-xs md:text-sm font-semibold">{v.text}</span>
                </div>
              ))}
            </div>

            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-primary text-accent-foreground font-semibold px-8 md:px-10 text-sm md:text-base">
                Request Corporate Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CorporateCTA;
