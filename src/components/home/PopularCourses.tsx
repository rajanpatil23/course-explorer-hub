import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Star, Clock, Users, ArrowRight, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categories, type BadgeType } from "@/data/courses";
import courseThumbnails from "@/components/courses/courseThumbnails";
import categoryThumbnails from "@/components/courses/categoryThumbnails";

const badgeConfig: Record<BadgeType, string> = {
  Popular: "bg-primary text-primary-foreground",
  Trending: "bg-amber text-white",
  Advance: "bg-blue-600 text-white",
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
            <div
              key={course.code}
              className="group bg-card rounded-2xl border border-border overflow-hidden flex flex-col relative"
            >
              {/* Image with padding */}
              <div className="relative overflow-hidden rounded-xl m-4 mb-0 h-40 flex-shrink-0">
                {/* Badge - inside image, top left */}
                <span className={`absolute top-2 left-2 z-10 ${badgeConfig[course.badge]} text-[11px] font-bold px-3 py-1 rounded-md shadow-sm`}>
                  {course.badge}
                </span>
                <img
                  src={courseThumbnails[course.slug] || categoryThumbnails[course.category] || ""}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  loading="lazy"
                  width={768}
                  height={512}
                />
              </div>

              {/* Content */}
              <div className="px-5 pt-4 pb-5 flex flex-col flex-1 gap-3">
                {/* Category / type */}
                <p className="text-xs text-primary font-medium">
                  {course.category.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                </p>

                <h3 className="font-heading font-bold text-base text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {course.name}
                </h3>

                {/* Stats on left, rating + price on right */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1.5">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3.5 h-3.5 text-primary" /> {course.duration.includes("|") ? course.duration.split("|")[1].trim() : course.duration}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Users className="w-3.5 h-3.5 text-primary" /> {course.learners}</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber text-amber" />
                      ))}
                      <span className="font-semibold text-foreground text-xs ml-1">5.0</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="line-through text-muted-foreground text-xs">₹{course.originalPrice}</span>
                      <span className="font-heading font-bold text-xl text-foreground">₹{course.price}</span>
                    </div>
                  </div>
                </div>

                {/* Buttons — taller */}
                <div className="flex gap-2 mt-auto pt-3 border-t border-border">
                  <Link to={`/courses/${course.slug}`} className="flex-1">
                    <Button variant="outline" className="w-full text-xs font-semibold rounded-lg h-11 border-primary text-primary hover:bg-teal-light">
                      View Course
                    </Button>
                  </Link>
                  <Link to={`/courses/${course.slug}`} className="flex-1">
                    <Button className="w-full text-xs font-semibold rounded-lg bg-primary hover:bg-teal-dark text-primary-foreground gap-1 h-11">
                      Enroll Now <ChevronRight className="w-3 h-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
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
