import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Star, Clock, Users, ArrowRight, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categories, type BadgeType } from "@/data/courses";
import courseThumbnails from "@/components/courses/courseThumbnails";
import categoryThumbnails from "@/components/courses/categoryThumbnails";

const badgeColors: Record<BadgeType, string> = {
  Popular: "bg-primary text-primary-foreground",
  Trending: "bg-amber text-accent-foreground",
  Advance: "bg-badge-purple text-primary-foreground",
};

const tabs = [
  { id: "all", label: "All Courses" },
  ...categories.map(c => ({ id: c.slug, label: c.name })),
];

const PopularCourses = () => {
  const [active, setActive] = useState("all");
  const allCourses = useMemo(() => categories.flatMap(c => c.courses), []);

  const courses = useMemo(() => {
    const list = active === "all" ? allCourses : categories.find(c => c.slug === active)?.courses || [];
    return list.slice(0, 6);
  }, [active, allCourses]);

  return (
    <section className="py-16 md:py-24 bg-secondary rounded-t-[5rem] md:rounded-t-[8rem]">
      <div className="container">
        <p className="text-center text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
          Choose The Better Course For Your Career
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
          Professional Certification & Training Courses
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                active === tab.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course cards - compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <Link
              key={course.code}
              to={`/courses/${course.slug}`}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 aspect-square flex flex-col"
            >
              <div className="relative overflow-hidden rounded-xl m-3 h-48 flex-shrink-0">
                <img
                  src={courseThumbnails[course.slug] || categoryThumbnails[course.category] || ""}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  loading="lazy"
                  width={768}
                  height={512}
                />
                <Badge className={`absolute top-2 left-2 ${badgeColors[course.badge]} text-xs font-semibold px-2.5 py-0.5 border-0`}>
                  {course.badge}
                </Badge>
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full px-2 py-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber text-amber" />
                  <span className="text-xs font-semibold text-foreground">5.0</span>
                </div>
              </div>
              <div className="px-4 pb-4 pt-1 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-sm text-foreground leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {course.name}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {course.skills.slice(0, 2).map(s => (
                    <span key={s} className="text-[10px] bg-teal-light text-teal-dark px-2 py-0.5 rounded-full font-medium">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {course.learners}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-primary hover:bg-teal-dark text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            View All Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
