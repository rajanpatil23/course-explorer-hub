import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/courses";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent(i => (i + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(i => (i - 1 + total) % total), [total]);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Show 2 cards on md+, 1 on mobile
  const getVisible = () => {
    const cards = [];
    for (let j = 0; j < 3; j++) {
      cards.push(testimonials[(current + j) % total]);
    }
    return cards;
  };

  const visible = getVisible();

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container">
        <p className="text-center text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-14">
          What Our Certified Professionals Say
        </h2>

        <div className="relative">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visible.map((t, i) => (
              <div
                key={`${current}-${i}`}
                className={`group/card relative bg-card rounded-3xl p-8 border border-border shadow-sm
                  animate-fade-slide-in hover:border-primary transition-colors
                  ${i >= 1 ? "hidden md:block" : ""}`}
              >
                {/* Decorative quote icon - circle, straddling top border */}
                <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-sm">
                  <Quote className="w-6 h-6 text-border fill-border group-hover/card:text-primary group-hover/card:fill-primary transition-colors" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5 mt-4">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-4 h-4 fill-amber text-amber" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-sm text-foreground/85 leading-relaxed mb-6 italic min-h-[80px]">
                  "{t.quote}"
                </p>

                {/* Divider */}
                <div className="h-px bg-border mb-5" />

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-heading font-bold text-sm shrink-0 shadow-md">
                    {t.name.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.designation}</p>
                    <p className="text-xs text-primary font-medium mt-0.5">{t.course}</p>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/[0.03] rounded-tl-[3rem] rounded-br-3xl pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-primary w-7"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
