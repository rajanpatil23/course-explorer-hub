import { useEffect, useRef, useState } from "react";
import { BookOpen, CheckCircle, ArrowLeft, TrendingUp, DollarSign, Building2, Clock, Award, Users, ShieldCheck, Target, Zap, GraduationCap, FileText, Layers, BarChart3, Globe, Briefcase } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import type { Course } from "@/data/courses";

const highlightIcons = [Target, Zap, GraduationCap, Award, ShieldCheck, FileText, Layers, BarChart3, Globe, Briefcase, Users, Clock];

const courseStats = [
  { value: 10000, suffix: "+", label: "Professionals Trained" },
  { value: 40, suffix: "+", label: "Workshops Every Month" },
  { value: 30, suffix: "+", label: "Countries Served" },
];

function useCountUp(target: number, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(id); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(id);
  }, [trigger, target, duration]);
  return count;
}

const CourseStatsStrip = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative rounded-2xl bg-primary px-4 py-6 md:px-10 md:py-8 shadow-lg overflow-hidden border border-primary/30 mb-10">
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border-2 border-primary-foreground/10 z-0" />
      <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full border border-primary-foreground/15 z-0" />
      <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full border-2 border-primary-foreground/10 z-0" />
      <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border border-primary-foreground/15 z-0" />
      <div className="absolute top-3 right-12 w-8 h-[2px] bg-primary-foreground/15 rotate-45 z-0" />
      <div className="absolute bottom-4 left-14 w-8 h-[2px] bg-primary-foreground/15 -rotate-45 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-20 rounded-full bg-primary-foreground/5 blur-[80px] z-0" />
      <div className="grid grid-cols-3 gap-4 md:gap-8 relative z-10">
        {courseStats.map((s, i) => {
          const count = useCountUp(s.value, 2000, visible);
          return (
            <div key={i} className="text-center">
              <div className="font-heading text-2xl md:text-4xl font-semibold text-primary-foreground">
                {Math.floor(count).toLocaleString()}<span>{s.suffix}</span>
              </div>
              <p className="text-[10px] md:text-sm text-primary-foreground/70 mt-1 font-medium">{s.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CourseContent = ({ course }: { course: Course }) => (
  <div className="space-y-12">
    {/* Prerequisites */}
    <section>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Prerequisites & Eligibility</h2>
      <ul className="space-y-2.5">
        {course.prerequisites.map((p, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            {p}
          </li>
        ))}
      </ul>
    </section>

    {/* Stats Strip */}
    <CourseStatsStrip />


    {/* Course Highlights */}
    <section>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Course Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {course.courseHighlights.map((h, i) => {
          const Icon = highlightIcons[i % highlightIcons.length];
          return (
            <Card key={i} className="p-4 flex items-start gap-3 border-border/60 bg-card hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-[18px] h-[18px] text-primary" />
              </div>
              <span className="text-sm text-foreground leading-relaxed pt-1.5">{h.text}</span>
            </Card>
          );
        })}
      </div>
    </section>


    {/* Benefits */}
    <section>
      <Card className="bg-secondary/50 border-border p-5 md:p-8">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Why Get Certified</p>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Benefits of This Certification</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          {course.benefits.map((b, i) => {
            const parts = b.split(/[.–:]\s*/);
            const title = parts[0];
            const desc = parts.length > 1 ? parts.slice(1).join('. ').trim() : '';
            return (
              <div key={i} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full border-2 border-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-primary">{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{title}</h4>
                  {desc && <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </section>

    {/* Demand */}
    <section>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Market Demand & Salary Insights</h2>
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span className="font-semibold text-foreground text-sm">{course.demand.jobOpenings}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {course.demand.roles.map((role, i) => (
            <div key={i} className="bg-secondary rounded-lg p-4">
              <h4 className="font-semibold text-foreground text-sm mb-2">{role.title}</h4>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="text-center">
                  <p className="font-bold text-foreground text-base">{role.salaryMin}</p>
                  <p>Min</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-primary text-base">{role.salaryAvg}</p>
                  <p>Average</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-foreground text-base">{role.salaryMax}</p>
                  <p>Max</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="bg-teal-light text-primary font-bold px-3 py-1 rounded-full text-xs">{course.demand.growthPercent} Growth</div>
          <span className="text-muted-foreground text-xs">{course.demand.growthDescription}</span>
        </div>
        {course.demand.hiringCompanies.length > 1 && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Hiring Companies</p>
            <div className="flex flex-wrap gap-2">
              {course.demand.hiringCompanies.map(c => (
                <span key={c} className="bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border">{c}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>

    {/* Curriculum */}
    <section id="curriculum">
      <div className="bg-secondary/50 border border-border rounded-2xl p-5 md:p-8">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Course Curriculum</h2>
        <Accordion type="multiple" defaultValue={["module-0"]} className="space-y-3">
          {course.curriculum.map((mod, i) => (
            <AccordionItem key={i} value={`module-${i}`} className="bg-card border border-border rounded-lg px-5">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                <span className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-teal-light text-primary text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  {mod.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 border-t border-border pt-4">
                <ul className="space-y-2 pl-11">
                  {mod.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* What's Included */}
    <section>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What's Included</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {course.includes.map((item, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-sm text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default CourseContent;
