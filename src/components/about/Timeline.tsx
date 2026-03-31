import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const timeline = [
  { year: "2018", title: "Foundation", desc: "Began with project management training, a focused curriculum, and a small expert trainer network.", position: "top" as const },
  { year: "2019", title: "Digital Expansion", desc: "Shifted into live online learning and started reaching professionals beyond local classroom delivery.", position: "bottom" as const },
  { year: "2020", title: "Global Reach", desc: "Expanded access to international learners, growing our community across 50+ countries worldwide.", position: "top" as const },
  { year: "2021", title: "Portfolio Growth", desc: "Added cloud, cybersecurity, agile, and IT certifications to serve broader career goals.", position: "bottom" as const },
  { year: "2022", title: "Enterprise Training", desc: "Launched corporate training programs, partnering with organizations to upskill their teams at scale.", position: "top" as const },
  { year: "2023", title: "Scale & Impact", desc: "Grew learner outcomes, strengthened enterprise training, and continued scaling high-quality programs.", position: "bottom" as const },
];

const Timeline = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="py-14 md:py-24 bg-secondary rounded-t-[3rem] md:rounded-t-[8rem]">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Our Journey</p>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3">EduEdge Through the Years</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From a small training initiative to a globally recognized certification platform — upholding quality and consistency, training thousands of professionals across multiple countries.
          </p>
        </div>

        {/* Timeline — horizontal scroll */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="relative min-w-[900px] md:min-w-[1100px] px-8">
              {/* Top cards (position: top) */}
              <div className="flex mb-2">
                {timeline.map((item, i) => (
                  <div key={i} className="flex-1 flex justify-center px-2">
                    {item.position === "top" ? (
                      <div className="flex flex-col items-center">
                        <div className="bg-card border border-border rounded-xl p-4 max-w-[180px] shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                          <p className="text-xs text-muted-foreground leading-relaxed text-center">{item.desc}</p>
                        </div>
                        <div className="w-px h-6 bg-primary/40" />
                      </div>
                    ) : (
                      <div className="h-full" />
                    )}
                  </div>
                ))}
              </div>

              {/* The gradient bar with year labels and dots */}
              <div className="relative h-12 flex items-center">
                {/* Gradient bar */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 rounded-full bg-gradient-to-r from-primary via-primary/80 to-accent shadow-lg" />

                {/* Year labels + dots */}
                <div className="relative flex w-full">
                  {timeline.map((item, i) => (
                    <div key={i} className="flex-1 flex justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm md:text-base font-bold text-primary-foreground relative z-10">{item.year}</span>
                        <div className="w-5 h-5 rounded-full bg-background border-[3px] border-primary/30 shadow-md relative z-10" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom cards (position: bottom) */}
              <div className="flex mt-2">
                {timeline.map((item, i) => (
                  <div key={i} className="flex-1 flex justify-center px-2">
                    {item.position === "bottom" ? (
                      <div className="flex flex-col items-center">
                        <div className="w-px h-6 bg-primary/40" />
                        <div className="bg-card border border-border rounded-xl p-4 max-w-[180px] shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                          <p className="text-xs text-muted-foreground leading-relaxed text-center">{item.desc}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-30"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-30"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
