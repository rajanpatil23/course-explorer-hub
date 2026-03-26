import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/courses";

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <p className="text-center text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Testimonials</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-14">
        What Our Certified Professionals Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-card rounded-xl p-7 border border-border hover:shadow-lg transition-shadow relative group"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(s => (
                <Star key={s} className="w-4 h-4 fill-amber text-amber" />
              ))}
            </div>
            <p className="text-sm text-foreground/85 leading-relaxed mb-5 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                {t.name.split(" ").map(w => w[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.designation}</p>
                <p className="text-xs text-primary font-medium">{t.course}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
