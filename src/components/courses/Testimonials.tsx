import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/courses";

const Testimonials = () => (
  <section className="py-16 md:py-20 bg-secondary">
    <div className="container">
      <p className="text-center text-sm font-semibold text-primary uppercase tracking-widest mb-2">Testimonials</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Hear From Our Certified Professionals
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        What our learners say about their training experience at The EduEdge.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-lg p-6 border border-border shadow-sm relative">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/15" />
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-amber text-amber" />)}
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed mb-4 italic">"{t.quote}"</p>
            <div>
              <p className="font-semibold text-sm text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.designation}</p>
              <p className="text-xs text-primary font-medium mt-0.5">{t.course}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
