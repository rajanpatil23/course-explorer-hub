import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/courses";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent(i => (i + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(i => (i - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const getVisible = () => {
    const cards = [];
    for (let j = 0; j < 3; j++) {
      cards.push(testimonials[(current + j) % total]);
    }
    return cards;
  };

  const visible = getVisible();

  return (
    <section className="py-12 md:py-24 bg-background overflow-hidden">
      <div className="container">
        <p className="text-center text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Testimonials</p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-center text-foreground mb-10 md:mb-14">
          What Our Certified Professionals Say
        </h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {visible.map((t, i) => (
              <div
                key={`${current}-${i}`}
                className={`group/card relative bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 border border-border shadow-sm
                  animate-fade-slide-in hover:border-primary transition-colors
                  ${i >= 1 ? "hidden md:block" : ""}`}
              >
                <div className="absolute -top-5 md:-top-6 left-5 md:left-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card flex items-center justify-center shadow-sm">
                  <Quote className="w-5 h-5 md:w-6 md:h-6 text-border fill-border group-hover/card:text-primary group-hover/card:fill-primary transition-colors" />
                </div>

                <div className="flex gap-1 mb-4 md:mb-5 mt-3 md:mt-4">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-amber text-amber" />
                  ))}
                </div>

                <p className="text-xs md:text-sm text-foreground/85 leading-relaxed mb-4 md:mb-6 italic min-h-[60px] md:min-h-[80px]">
                  "{t.quote}"
                </p>

                <div className="h-px bg-border mb-4 md:mb-5" />

                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-heading font-bold text-xs md:text-sm shrink-0 shadow-md">
                    {t.name.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-xs md:text-sm text-foreground">{t.name}</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">{t.designation}</p>
                    <p className="text-[10px] md:text-xs text-primary font-medium mt-0.5">{t.course}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-primary/[0.03] rounded-tl-[3rem] rounded-br-2xl md:rounded-br-3xl pointer-events-none" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 md:gap-4 mt-8 md:mt-10">
            <button
              onClick={prev}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <div className="flex gap-1.5 md:gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-primary w-5 md:w-7"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
