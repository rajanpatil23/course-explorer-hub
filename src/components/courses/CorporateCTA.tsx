import { Button } from "@/components/ui/button";
import { Building2, UserCheck, CalendarClock, BarChart3, FileCheck } from "lucide-react";

const values = [
  { icon: <Building2 className="w-5 h-5" />, title: "Volume Discounts", desc: "Significant savings for teams of 5+" },
  { icon: <UserCheck className="w-5 h-5" />, title: "Dedicated Account Manager", desc: "Single point of contact for your program" },
  { icon: <CalendarClock className="w-5 h-5" />, title: "Custom Scheduling", desc: "Flexible timings aligned to your projects" },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Progress Dashboards", desc: "Real-time tracking of completion & scores" },
  { icon: <FileCheck className="w-5 h-5" />, title: "Certificate Management", desc: "Centralised tracking and renewal alerts" },
];

const CorporateCTA = () => (
  <section className="py-16 md:py-20 bg-hero text-hero-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/20 to-transparent" />
    <div className="container relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Upskill Your Entire Team with Custom Corporate Training
        </h2>
        <p className="text-hero-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          The EduEdge partners with organisations of all sizes to deliver tailored certification training programs. Volume pricing, dedicated account management, and progress tracking dashboards.
        </p>
      </div>
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
      <div className="text-center flex flex-wrap justify-center gap-4">
        <Button size="lg" className="bg-primary hover:bg-teal-dark text-primary-foreground font-semibold px-8">
          Request Corporate Training Quote
        </Button>
        <Button size="lg" variant="outline" className="border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10 font-semibold px-8">
          Download Corporate Brochure
        </Button>
      </div>
    </div>
  </section>
);

export default CorporateCTA;
