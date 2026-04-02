import { categories, type Course } from "@/data/courses";
import PopularCourseCard from "@/components/courses/PopularCourseCard";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {related.map(rc => (
            <PopularCourseCard key={rc.slug} course={rc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCourses;
