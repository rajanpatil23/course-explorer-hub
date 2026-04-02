import { BookOpen, CheckCircle, ArrowLeft, TrendingUp, DollarSign, Building2, Clock, Award, Users, ShieldCheck, Target, Zap, GraduationCap, FileText, Layers, BarChart3, Globe, Briefcase } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import type { Course } from "@/data/courses";

const highlightIcons = [Target, Zap, GraduationCap, Award, ShieldCheck, FileText, Layers, BarChart3, Globe, Briefcase, Users, Clock];

const CourseContent = ({ course }: { course: Course }) => (
  <div className="space-y-12">
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

    {/* About */}
    <section>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-4">About This Course</h2>
      <p className="text-sm text-muted-foreground leading-relaxed">{course.aboutCourse}</p>
    </section>

    {/* Prerequisites */}
    <section>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Prerequisites & Eligibility</h2>
      <ul className="space-y-2.5">
        {course.prerequisites.map((p, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <ArrowLeft className="w-4 h-4 text-primary shrink-0 mt-0.5 rotate-180" />
            {p}
          </li>
        ))}
      </ul>
    </section>

    {/* Skills */}
    <section>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Key Skills You'll Gain</h2>
      <div className="flex flex-wrap gap-2">
        {course.skills.map(s => (
          <span key={s} className="bg-teal-light text-teal-dark text-sm font-medium px-3 py-1.5 rounded-full">{s}</span>
        ))}
      </div>
    </section>

    {/* Benefits */}
    <section>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Benefits of This Certification</h2>
      <div className="space-y-3">
        {course.benefits.map((b, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-teal-light flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary">{i + 1}</span>
            </div>
            <p className="text-sm text-muted-foreground">{b}</p>
          </div>
        ))}
      </div>
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
            <AccordionContent className="pb-4">
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
