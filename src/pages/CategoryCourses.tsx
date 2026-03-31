import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { categories } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";
import NotFound from "./NotFound";

const CategoryCourses = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categories.find(c => c.slug === categorySlug);

  if (!category) return <NotFound />;

  return (
    <div className="min-h-screen pb-14 md:pb-0">
      {/* Hero */}
      <section className="bg-hero text-hero-foreground py-14 md:py-20">
        <div className="container text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-hero-foreground/70 hover:text-hero-foreground text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Categories
          </Link>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {category.name}
          </h1>
          <p className="text-hero-foreground/70 max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Course grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <p className="text-sm text-muted-foreground mb-8">
            Showing {category.courses.length} course{category.courses.length !== 1 ? "s" : ""}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.courses.map(course => (
              <CourseCard key={course.code} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryCourses;
