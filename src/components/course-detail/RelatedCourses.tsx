import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { categories, type Course, type BadgeType } from "@/data/courses";

const badgeColors: Record<BadgeType, string> = {
  Popular: "bg-primary text-primary-foreground",
  Trending: "bg-amber text-accent-foreground",
  Advance: "bg-badge-purple text-primary-foreground",
};

const RelatedCourses = ({ course }: { course: Course }) => {
  const related = categories
    .flatMap(c => c.courses)
    .filter(c => c.category === course.category && c.slug !== course.slug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-10 bg-secondary">
      <div className="container">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Related Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map(rc => (
            <Link key={rc.slug} to={`/courses/${rc.slug}`} className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow group">
              <Badge className={`${badgeColors[rc.badge]} text-[10px] font-semibold border-0 mb-2`}>{rc.badge}</Badge>
              <h3 className="font-heading font-bold text-sm text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors mb-2">{rc.name}</h3>
              <p className="text-xs text-muted-foreground">{rc.duration}</p>
              <p className="text-xs text-primary font-semibold mt-2">View Details →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCourses;
