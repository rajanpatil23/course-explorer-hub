import { useParams, Link } from "react-router-dom";
import { findCourseBySlug, findCourseFaqs } from "@/data/courses";
import CourseHero from "@/components/course-detail/CourseHero";
import SecretSauce from "@/components/course-detail/SecretSauce";
import CourseContent from "@/components/course-detail/CourseContent";
import CourseSidebar from "@/components/course-detail/CourseSidebar";
import RelatedCourses from "@/components/course-detail/RelatedCourses";
import { Button } from "@/components/ui/button";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = findCourseBySlug(slug || "");
  const courseFaqs = findCourseFaqs(slug || "");

  if (!course) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Course Not Found</h1>
        <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
        <Link to="/">
          <Button className="bg-primary hover:bg-teal-dark text-primary-foreground">← Back to Courses</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <CourseHero course={course} />
      <SecretSauce items={course.secretSauce} courseName={course.name} />

      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <CourseContent course={course} faqs={courseFaqs} />
          </div>
          <div>
            <CourseSidebar course={course} />
          </div>
        </div>
      </div>

      <RelatedCourses course={course} />
    </div>
  );
};

export default CourseDetail;
