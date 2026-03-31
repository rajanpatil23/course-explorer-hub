import { CheckCircle2 } from "lucide-react";

const partners = ["PMI Partner", "CompTIA Partner", "AWS Partner", "Microsoft Partner", "SAFe Partner"];

const OurStory = () => (
  <section className="py-14 md:py-24 bg-background">
    <div className="container max-w-6xl">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Our Story</p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
          From a Vision to a Global Training Platform
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
          The EduEdge was founded with a simple yet powerful mission: to make globally recognized IT certifications accessible, affordable, and achievable for professionals everywhere.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-5">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
            In a rapidly evolving technology landscape, the gap between academic knowledge and industry requirements continues to widen. We saw an opportunity to bridge that gap with world-class training.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            As an authorized training partner of PMI, CompTIA, Microsoft, AWS, and Scaled Agile, we bring the credibility and structure of world-class certification bodies together with the personalized attention and flexibility that modern learners demand.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {partners.map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full">
              <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OurStory;
