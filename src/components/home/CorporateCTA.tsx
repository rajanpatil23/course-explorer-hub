import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, UserCheck, CalendarClock, BarChart3, FileCheck } from "lucide-react";
import corporateModel from "@/assets/corporate-model.png";

const values = [
  { icon: <Building2 className="w-5 h-5" />, title: "Volume Discounts", desc: "Savings for teams of 5+" },
  { icon: <UserCheck className="w-5 h-5" />, title: "Dedicated Manager", desc: "Single point of contact" },
  { icon: <CalendarClock className="w-5 h-5" />, title: "Custom Scheduling", desc: "Flexible timings" },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Progress Tracking", desc: "Real-time dashboards" },
  { icon: <FileCheck className="w-5 h-5" />, title: "Cert Management", desc: "Renewal alerts" },
];

const CorporateCTA = () => (
  <section className="py-16 md:py-20 bg-hero text-hero-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/20 to-transparent" />
    <div className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />

    <div className="container relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-[0.2em] mb-2 md:mb-3">Corporate Training</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Level Up Your Team
        </h2>
        <p className="text-hero-foreground/80 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          Custom corporate training with volume pricing, dedicated account management, and progress dashboards.
        </p>
      </div>

      {/* Model image — centered accent */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div
            className="absolute -top-4 -left-6 w-[110%] h-[90%] pointer-events-none opacity-15 hidden md:block"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1.2px, transparent 1.2px)",
              backgroundSize: "18px 18px",
            }}
          />
          <img
            src={corporateModel}
            alt="Corporate training professional"
            className="relative z-10 w-40 md:w-56 lg:w-64 object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Feature icons grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto mb-10">
        {values.map((v, i) => (
          <div key={i} className="text-center">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2 text-primary">
              {v.icon}
            </div>
            <p className="text-sm font-semibold">{v.title}</p>
            <p className="text-xs text-hero-foreground/60 mt-1">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="text-center flex flex-wrap justify-center gap-4">
        <Link to="/contact">
          <Button size="lg" className="bg-accent hover:bg-primary text-accent-foreground font-semibold px-8 md:px-10">
            Request Corporate Quote
          </Button>
        </Link>
        <Link to="/contact">
          <Button size="lg" variant="outline" className="border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10 font-semibold px-8">
            Download Corporate Brochure
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default CorporateCTA;
