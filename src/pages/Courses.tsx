import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import { categories } from "@/data/courses";

const Courses = () => {
  const [search, setSearch] = useState("");
  const allCourses = useMemo(() => categories.flatMap(c => c.courses), []);

  const filteredCourses = useMemo(() => {
    if (search.trim().length < 2) return [];
    const q = search.toLowerCase();
    return allCourses.filter(c =>
      c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q) || c.skills.some(s => s.toLowerCase().includes(q))
    );
  }, [search, allCourses]);

  const isSearching = search.trim().length >= 2;

  return (
    <div className="min-h-screen pb-14 md:pb-0">
      {/* Hero */}
      <section className="bg-hero text-hero-foreground py-14 md:py-20">
        <div className="container text-center">
          <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3">Choose The Better Course For Your Career</p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Professional Certification & Training Courses
          </h1>
          <p className="text-hero-foreground/70 max-w-2xl mx-auto mb-8">
            Browse our full catalog of accredited certification programs across the most in-demand domains.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search certifications… e.g., PMP, AZ-900, Security+"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          {isSearching ? (
            <>
              <p className="text-sm text-muted-foreground mb-8">
                {filteredCourses.length} result{filteredCourses.length !== 1 ? "s" : ""} for "{search}"
              </p>
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map(course => (
                    <CourseCard key={course.code} course={course} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-12">No courses match your search. Try a different keyword.</p>
              )}
            </>
          ) : (
            <>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">Browse by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map(cat => (
                  <Link
                    key={cat.slug}
                    to={`/courses/category/${cat.slug}`}
                    className="group bg-card rounded-2xl border border-border p-6 md:p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                  >
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {cat.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-primary">{cat.courses.length} Courses</span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
