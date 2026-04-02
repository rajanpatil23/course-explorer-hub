import { Link } from "react-router-dom";
import { Star, Clock, Award, Users, ShieldCheck, ChevronRight, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Course, BadgeType } from "@/data/courses";
import categoryThumbnails from "@/components/courses/categoryThumbnails";
import courseThumbnails from "@/components/courses/courseThumbnails";

const badgeColors: Record<BadgeType, string> = {
  Popular: "bg-primary text-primary-foreground",
  Trending: "bg-amber text-accent-foreground",
  Advance: "bg-badge-purple text-primary-foreground",
};

const CourseHero = ({ course }: { course: Course }) => (
  <>
    {/* Hero — light theme matching category pages */}
    <section className="relative bg-muted/40 text-foreground overflow-hidden rounded-b-[3rem] md:rounded-b-[8rem] shadow-sm">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-background via-background/80 to-transparent z-[1]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-background via-background/80 to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-background via-background/80 to-transparent z-[1]" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-background via-background/80 to-transparent z-[1]" />
      <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[180px] z-[2]" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] z-[2]" />

      <div className="container relative z-10 py-8 md:py-14 lg:py-16 pb-14 md:pb-20 lg:pb-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/courses" className="hover:text-primary transition-colors">Courses</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium truncate">{course.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
              <Badge className={`${badgeColors[course.badge]} text-xs font-semibold border-0`}>{course.badge}</Badge>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{course.code}</span>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold leading-[1.12] mb-4 md:mb-5">
              {course.name}
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6 md:mb-8">
              {course.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-teal-dark text-primary-foreground font-semibold px-8 text-base gap-2 w-full sm:w-auto"
                onClick={() => document.getElementById("schedule-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Schedules <ChevronRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 font-semibold px-8 text-base w-full sm:w-auto">
                Download Brochure
              </Button>
            </div>

            {/* Rated by Learners */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center lg:justify-start mb-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[
                    "https://randomuser.me/api/portraits/women/44.jpg",
                    "https://randomuser.me/api/portraits/men/32.jpg",
                    "https://randomuser.me/api/portraits/women/68.jpg",
                    "https://randomuser.me/api/portraits/men/75.jpg",
                    "https://randomuser.me/api/portraits/women/21.jpg",
                    "https://randomuser.me/api/portraits/men/46.jpg",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Learner"
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-background object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-[10px] md:text-xs font-medium text-muted-foreground">Rated by Learners</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 md:w-3.5 md:h-3.5 fill-amber text-amber" />
                    <span className="text-xs md:text-sm font-bold text-foreground">{course.rating}/5</span>
                    <span className="text-[10px] md:text-xs text-muted-foreground">· {course.reviewCount} Reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero highlights */}
            <div className="space-y-2 md:space-y-3 max-w-lg mx-auto lg:mx-0">
              {course.heroHighlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-left">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-xs md:text-[15px] text-foreground leading-relaxed font-medium">{h}</p>
                </div>
              ))}
            </div>

            {/* Meta bar */}
            <div className="flex flex-wrap gap-4 md:gap-6 mt-6 md:mt-8 pt-5 border-t border-border text-xs md:text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" />{course.duration}</div>
              <div className="flex items-center gap-1.5"><Award className="w-4 h-4 text-primary" />{course.level}</div>
              <div className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" />{course.contactHours} Contact Hrs</div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" />{course.certification}</div>
            </div>
          </div>

          {/* Right - Hero image */}
          <div className="relative hidden lg:block">
            <div className="absolute -top-6 -right-6 w-28 h-28 grid grid-cols-5 gap-2.5 z-0">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={`tr-${i}`} className="w-2 h-2 rounded-full bg-primary/40" />
              ))}
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 grid grid-cols-5 gap-2.5 z-0">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={`bl-${i}`} className="w-2 h-2 rounded-full bg-accent/40" />
              ))}
            </div>
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-[3px] border-l-[3px] border-primary/30 rounded-tl-2xl z-0" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-[3px] border-r-[3px] border-accent/30 rounded-br-2xl z-0" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border z-10">
              <img
                src={courseThumbnails[course.slug] || categoryThumbnails[course.category] || ""}
                alt={course.name}
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default CourseHero;
