import { Star, Clock, Users, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Course, BadgeType } from "@/data/courses";
import categoryThumbnails from "./categoryThumbnails";

const badgeColors: Record<BadgeType, string> = {
  Popular: "bg-primary text-primary-foreground",
  Trending: "bg-amber text-accent-foreground",
  Advance: "bg-badge-purple text-primary-foreground",
};

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="group bg-card rounded-lg border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Thumbnail area */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={categoryThumbnails[course.category] || ""}
          alt={course.category}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={768}
          height={512}
        />
        <Badge className={`absolute top-3 left-3 ${badgeColors[course.badge]} text-xs font-semibold px-2.5 py-0.5 border-0`}>
          {course.badge}
        </Badge>
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full px-2 py-0.5">
          <Star className="w-3.5 h-3.5 fill-amber text-amber" />
          <span className="text-xs font-semibold text-foreground">5.0</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Schedule pill */}
        <div className="flex items-center gap-1.5 mb-3">
          <Calendar className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium text-primary">Live Classes — Request Schedule</span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-base text-foreground leading-snug mb-3 line-clamp-2">
          {course.name}
        </h3>

        {/* Skills */}
        <div className="mb-3">
          <span className="text-xs text-muted-foreground">Skills you'll gain:</span>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {course.skills.map((skill) => (
              <span key={skill} className="text-xs bg-teal-light text-teal-dark px-2 py-0.5 rounded-full font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>{course.learners} Learners</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 text-xs font-semibold border-primary text-primary hover:bg-teal-light">
            View Course
          </Button>
          <Button size="sm" className="flex-1 text-xs font-semibold bg-primary hover:bg-teal-dark text-primary-foreground">
            View Schedule
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
