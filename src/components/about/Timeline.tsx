import { useState, useRef } from "react";

const timeline = [
  { year: "2018", desc: "Founded with project management training, focused curriculum, and a growing expert network.", position: "top" as const },
  { year: "2020", desc: "Expanded our global reach to learners, growing professional communities across all nations.", position: "bottom" as const },
  { year: "2022", desc: "Launched corporate training programs and partnered with top organizations to upskill teams.", position: "top" as const },
  { year: "2024", desc: "Hit major learner milestones and deepened ties with leading accreditation bodies worldwide.", position: "bottom" as const },
  { year: "2026", desc: "Redefining professional education through bold innovation, emerging technologies, and a learner-first focus.", position: "top" as const },
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
    <section className="py-10 md:py-24 bg-secondary rounded-b-[3rem] md:rounded-b-[8rem]">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Our Journey</p>
          <h2 className="font-heading text-xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">EduEdge Through the Years</h2>
          <p className="text-[11px] md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From a small training initiative to a globally recognized certification platform — upholding quality and consistency, training thousands of professionals across multiple countries.
          </p>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative px-2">
          {/* Continuous vertical line */}
          <div className="absolute left-[calc(0.5rem+1rem)] top-4 bottom-4 w-[2px] bg-primary/30" />
          
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-3 items-start relative">
                {/* Left: year circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-[9px] font-bold text-primary-foreground">{item.year}</span>
                  </div>
                </div>
                {/* Right: card */}
                <div className="bg-card border border-border/60 rounded-xl p-3 flex-1 border-l-[3px] border-l-primary">
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="relative min-w-[900px] md:min-w-[1100px] px-8">
              {/* Top cards */}
              <div className="flex">
                {timeline.map((item, i) => (
                  <div key={i} className="flex-1 flex justify-center px-2">
                    {item.position === "top" ? (
                      <div className="flex flex-col items-center">
                        <div className="bg-card border border-border/60 rounded-xl p-5 max-w-[190px] shadow-sm border-l-[3px] border-l-primary transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/10">
                          <p className="text-xs text-muted-foreground leading-relaxed text-center font-medium">{item.desc}</p>
                        </div>
                        <div className="w-[3px] h-8 bg-primary/50 rounded-full" />
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                ))}
              </div>

              {/* The gradient bar */}
              <div className="relative h-10 flex items-center">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 rounded-full bg-gradient-to-r from-primary via-primary/80 to-accent shadow-lg" />
                <div className="relative flex w-full h-full">
                  {timeline.map((item, i) => (
                    <div key={i} className="flex-1 relative flex items-center justify-center">
                      <span className="absolute right-[calc(50%+14px)] text-sm md:text-base font-bold text-primary-foreground z-10 whitespace-nowrap">{item.year}</span>
                      <div className="w-6 h-6 rounded-full bg-background border-[3px] border-background/80 shadow-lg z-20" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom cards */}
              <div className="flex">
                {timeline.map((item, i) => (
                  <div key={i} className="flex-1 flex justify-center px-2">
                    {item.position === "bottom" ? (
                      <div className="flex flex-col items-center">
                        <div className="w-[3px] h-8 bg-primary/50 rounded-full" />
                        <div className="bg-card border border-border/60 rounded-xl p-5 max-w-[190px] shadow-sm border-l-[3px] border-l-primary transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/10">
                          <p className="text-xs text-muted-foreground leading-relaxed text-center font-medium">{item.desc}</p>
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
        </div>
      </div>
    </section>
  );
};

export default Timeline;
