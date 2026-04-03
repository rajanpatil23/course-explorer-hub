import { Link } from "react-router-dom";
import { Star, Clock, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Course, BadgeType } from "@/data/courses";
import { findCategorySlugForCourse } from "@/data/courses";
import courseThumbnails from "@/components/courses/courseThumbnails";
import categoryThumbnails from "@/components/courses/categoryThumbnails";

const badgeConfig: Record<BadgeType, string> = {
  Popular: "bg-primary text-primary-foreground",
  Trending: "bg-amber text-white",
  Advance: "bg-blue-600 text-white",
};

const PopularCourseCard = ({ course }: { course: Course }) => {
  const catSlug = findCategorySlugForCourse(course.slug) || "courses";
  const courseUrl = `/${catSlug}/${course.slug}`;
  return (
  <div className="group bg-card rounded-2xl border border-border overflow-hidden flex flex-col relative h-full">
    <div className="relative overflow-hidden rounded-xl m-3 md:m-4 mb-0 h-32 md:h-40 flex-shrink-0">
      <span className={`absolute top-2 left-2 z-10 ${badgeConfig[course.badge]} text-[10px] md:text-[11px] font-bold px-2.5 md:px-3 py-1 rounded-md shadow-sm`}>
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
    <div className="px-4 md:px-5 pt-3 md:pt-4 pb-4 md:pb-5 flex flex-col flex-1">
      <p className="text-[10px] md:text-xs text-primary font-medium">
        {course.category.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())}
      </p>
      <h3 className="font-heading font-bold text-sm md:text-base text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors mt-1.5 md:mt-2">
        {course.name}
      </h3>
      <div className="min-h-3 md:min-h-4 flex-1" />
      <div className="flex items-start justify-between mb-2.5 md:mb-3">
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground"><Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" /> {course.duration.includes("|") ? course.duration.split("|")[1].trim() : course.duration}</span>
          <span className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground"><Users className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" /> {course.learners}</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-amber text-amber" />
            ))}
            <span className="font-semibold text-foreground text-[10px] md:text-xs ml-1">5.0</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="line-through text-muted-foreground text-[10px] md:text-xs">${course.originalPrice}</span>
            <span className="font-heading font-bold text-lg md:text-xl text-foreground">${course.price}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 pt-2.5 md:pt-3 border-t border-border">
        <Link to={courseUrl} className="flex-1">
          <Button variant="outline" className="w-full text-[10px] md:text-xs font-semibold rounded-lg h-9 md:h-11 border-primary text-primary hover:bg-teal-light">
            View Course
          </Button>
        </Link>
        <Link to={courseUrl} className="flex-1">
          <Button className="w-full text-[10px] md:text-xs font-semibold rounded-lg bg-primary hover:bg-teal-dark text-primary-foreground gap-1 h-9 md:h-11">
            Enroll Now <ChevronRight className="w-3 h-3" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PopularCourseCard;
