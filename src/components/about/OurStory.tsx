import { CheckCircle2 } from "lucide-react";
import storyImg from "@/assets/our-story.jpg";

const partners = ["PMI Partner", "CompTIA Partner", "AWS Partner", "Microsoft Partner", "SAFe Partner"];

const OurStory = () => (
  <section className="py-10 md:py-16 bg-background">
    <div className="container max-w-6xl">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Our Story</p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
          From a Vision to a Global Training Platform
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left — content */}
        <div className="space-y-5">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            The EduEdge was founded with a simple yet powerful mission: to make globally recognized IT certifications accessible, affordable, and achievable for professionals everywhere.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            In a rapidly evolving technology landscape, the gap between academic knowledge and industry requirements continues to widen. We saw an opportunity to bridge that gap with world-class training.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            As an authorized training partner of PMI, CompTIA, Microsoft, AWS, and Scaled Agile, we bring the credibility and structure of world-class certification bodies together with the personalized attention and flexibility that modern learners demand.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3 pt-2">
            {partners.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="rounded-2xl overflow-hidden max-h-[350px]">
          <img
            src={storyImg}
            alt="EduEdge team collaborating in a modern training environment"
            className="w-full h-full object-cover rounded-2xl max-h-[350px]"
            loading="lazy"
            width={800}
            height={400}
          />
        </div>
      </div>
    </div>
  </section>
);

export default OurStory;
