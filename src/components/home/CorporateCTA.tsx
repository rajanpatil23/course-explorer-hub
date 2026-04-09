import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import corporateModel from "@/assets/corporate-model.png";

const CorporateCTA = () => (
  <section className="py-10 md:py-16 bg-background">
    <div className="container">
      <div className="relative bg-hero text-hero-foreground rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero/95 to-primary/20" />
        <div
          className="absolute -top-6 -left-4 w-[110%] h-[90%] pointer-events-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1.2px, transparent 1.2px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-10 px-5 md:px-10 lg:px-14">
          <div className="hidden md:block shrink-0 self-end">
            <img
              src={corporateModel}
              alt="Corporate training professional"
              className="h-[140px] lg:h-[160px] object-contain"
            />
          </div>
          <div className="flex-1 py-5 md:py-8 text-center md:text-left">
            <h3 className="font-heading text-base md:text-xl lg:text-2xl font-bold mb-1">
              Level Up Your Team with Custom Corporate Training
            </h3>
            <p className="text-hero-foreground/70 text-xs md:text-base">
              Volume pricing, dedicated account management & progress dashboards. Get started today!
            </p>
          </div>
          <div className="shrink-0 pb-5 md:pb-0">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 font-semibold px-6 md:px-8"
              asChild
            >
              <Link to="/contact">
                Get a Quote <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
          <div className="md:hidden shrink-0 self-center">
            <img
              src={corporateModel}
              alt="Corporate training professional"
              className="h-[120px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CorporateCTA;
