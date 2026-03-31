import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const timeline = [
  { year: "2018", desc: "Founded with a focus on project management training and a small expert trainer network.", position: "top" as const },
  { year: "2020", desc: "Expanded access to international learners, growing our community across 50+ countries.", position: "bottom" as const },
  { year: "2022", desc: "Launched corporate training programs, partnering with organizations to upskill teams.", position: "top" as const },
  { year: "2024", desc: "Crossed major learner milestones and deepened partnerships with global accreditation bodies.", position: "bottom" as const },
  { year: "2026", desc: "Continuing to redefine professional education with innovation and learner-first thinking.", position: "top" as const },
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
              {/* Top cards (position: top) — aligned to dot center */}
              <div className="flex">
                {timeline.map((item, i) => (
                  <div key={i} className="flex-1 flex justify-center px-2">
                    {item.position === "top" ? (
                      <div className="flex flex-col items-center">
                        <div className="bg-gradient-to-br from-card to-secondary/50 border border-border/60 rounded-xl p-5 max-w-[190px] shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300 border-l-[3px] border-l-primary">
                          <p className="text-xs text-foreground/70 leading-relaxed text-center font-medium">{item.desc}</p>
                        </div>
                        <div className="w-px h-8 bg-primary/40" />
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                ))}
              </div>

              {/* The gradient bar with dots centered per column, year inside bar */}
              <div className="relative h-10 flex items-center">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 rounded-full bg-gradient-to-r from-primary via-primary/80 to-accent shadow-lg" />

                <div className="relative flex w-full h-full">
                  {timeline.map((item, i) => (
                    <div key={i} className="flex-1 relative flex items-center justify-center">
                      {/* Year label positioned to the left of center */}
                      <span className="absolute right-[calc(50%+14px)] text-sm md:text-base font-bold text-primary-foreground z-10 whitespace-nowrap">{item.year}</span>
                      {/* Dot at exact center */}
                      <div className="w-6 h-6 rounded-full bg-background border-[3px] border-background/80 shadow-lg z-20" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom cards (position: bottom) — aligned to dot center */}
              <div className="flex">
                {timeline.map((item, i) => (
                  <div key={i} className="flex-1 flex justify-center px-2">
                    {item.position === "bottom" ? (
                      <div className="flex flex-col items-center">
                        <div className="w-px h-8 bg-primary/40" />
                        <div className="bg-gradient-to-br from-card to-secondary/50 border border-border/60 rounded-xl p-5 max-w-[190px] shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300 border-l-[3px] border-l-primary">
                          <p className="text-xs text-foreground/70 leading-relaxed text-center font-medium">{item.desc}</p>
                        </div>
                      </div>
                    ) : (
                      <div />
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
