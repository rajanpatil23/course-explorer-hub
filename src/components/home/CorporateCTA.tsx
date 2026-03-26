import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, UserCheck, BarChart3 } from "lucide-react";

const CorporateCTA = () => (
  <section className="relative py-16 md:py-24 bg-hero text-hero-foreground overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero/95 to-primary/20" />
    <div className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />

    <div className="container relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3">Corporate Training</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Upskill Your Entire Team
        </h2>
        <p className="text-hero-foreground/70 mb-10 max-w-xl mx-auto">
          Custom corporate training with volume pricing, dedicated account management, and progress dashboards.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { icon: <Building2 className="w-6 h-6" />, text: "Custom Programs" },
            { icon: <UserCheck className="w-6 h-6" />, text: "Dedicated Manager" },
            { icon: <BarChart3 className="w-6 h-6" />, text: "Progress Tracking" },
          ].map((v, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-accent">
                {v.icon}
              </div>
              <span className="text-sm font-semibold">{v.text}</span>
            </div>
          ))}
        </div>

        <Link to="/contact">
          <Button size="lg" className="bg-accent hover:bg-primary text-accent-foreground font-semibold px-10 text-base">
            Request Corporate Quote
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default CorporateCTA;
