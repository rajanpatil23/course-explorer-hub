import { Award, Users, Target, CalendarDays, Headphones, CheckCircle } from "lucide-react";
import { whyChooseUs } from "@/data/courses";

const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="w-7 h-7" />,
  users: <Users className="w-7 h-7" />,
  target: <Target className="w-7 h-7" />,
  calendar: <CalendarDays className="w-7 h-7" />,
  headphones: <Headphones className="w-7 h-7" />,
  "check-circle": <CheckCircle className="w-7 h-7" />,
};

const WhyChoose = () => (
  <section className="py-16 md:py-20 bg-background">
    <div className="container">
      <p className="text-center text-sm font-semibold text-primary uppercase tracking-widest mb-2">Why Us</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        Why 50,000+ Professionals Choose The EduEdge
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {whyChooseUs.map((item, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center text-primary mb-4">
              {iconMap[item.icon]}
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
