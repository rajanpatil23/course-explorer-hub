import { useParams, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { categories } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";

const CategoryCourses = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const category = useMemo(
    () => categories.find((c) => c.slug === categorySlug),
    [categorySlug]
  );

  if (!category) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="min-h-screen pb-14 md:pb-0">
      {/* Hero */}
      <section className="bg-hero text-hero-foreground py-14 md:py-20">
        <div className="container text-center">
          <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3">
            {category.courses.length} Courses Available
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {category.name} Courses
          </h1>
          <p className="text-hero-foreground/70 max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.courses.map((course) => (
              <CourseCard key={course.code} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryCourses;
