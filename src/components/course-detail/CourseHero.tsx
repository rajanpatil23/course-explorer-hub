import { Link } from "react-router-dom";
import { Star, Clock, Award, Users, ShieldCheck, ChevronRight, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Course, BadgeType } from "@/data/courses";
import categoryThumbnails from "@/components/courses/categoryThumbnails";

const badgeColors: Record<BadgeType, string> = {
  Popular: "bg-primary text-primary-foreground",
  Trending: "bg-amber text-accent-foreground",
  Advance: "bg-badge-purple text-primary-foreground",
};

const CourseHero = ({ course }: { course: Course }) => (
  <>
    {/* Breadcrumb */}
    <div className="bg-secondary border-b border-border">
      <div className="container py-3 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/" className="hover:text-primary transition-colors">Courses</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-foreground font-medium truncate">{course.name}</span>
      </div>
    </div>

    {/* Hero */}
    <section className="relative bg-hero text-hero-foreground overflow-hidden">
      <img
        src={categoryThumbnails[course.category] || ""}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/95 to-hero/80" />
      <div className="container relative z-10 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-3">
              <Badge className={`${badgeColors[course.badge]} text-xs font-semibold border-0`}>{course.badge}</Badge>
              <span className="text-xs text-hero-foreground/60 uppercase tracking-wider font-semibold">{course.code}</span>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-3">
              {course.name}
            </h1>
            <p className="text-hero-foreground/70 text-base mb-5">{course.subtitle}</p>

            <div className="flex items-center gap-4 mb-5 flex-wrap">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className={`w-4 h-4 ${i <= Math.floor(Number(course.rating)) ? 'fill-amber text-amber' : 'text-hero-foreground/30'}`} />
                ))}
                <span className="text-sm font-bold ml-1">{course.rating}/5</span>
              </div>
              <span className="text-sm text-hero-foreground/60">{course.reviewCount} Reviews</span>
              <span className="text-sm text-hero-foreground/60">•</span>
              <span className="text-sm text-hero-foreground/60">{course.learners} Enrolled</span>
            </div>

            <ul className="space-y-2.5 mb-6">
              {course.heroHighlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-hero-foreground/85">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-teal-dark text-primary-foreground font-semibold"
                onClick={() => document.getElementById("schedule-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Schedules
              </Button>
              <Button size="lg" variant="outline" className="border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10 font-semibold">
                Download Brochure
              </Button>
            </div>

            <p className="text-xs text-hero-foreground/50 mt-4">
              Want to Train Your Team? <a href="#" className="text-primary hover:underline font-medium">Get a Quote</a>
            </p>
          </div>

          <div className="lg:col-span-2 hidden lg:block">
            <img
              src={categoryThumbnails[course.category] || ""}
              alt={course.name}
              className="w-full rounded-xl shadow-2xl object-cover aspect-[4/3]"
            />
          </div>
        </div>

        {/* Meta bar */}
        <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-hero-foreground/10 text-sm text-hero-foreground/70">
          <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" />{course.duration}</div>
          <div className="flex items-center gap-1.5"><Award className="w-4 h-4 text-primary" />{course.level}</div>
          <div className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" />{course.contactHours} Contact Hours</div>
          <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" />{course.certification}</div>
        </div>
      </div>
    </section>
  </>
);

export default CourseHero;
