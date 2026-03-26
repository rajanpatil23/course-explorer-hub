import { useState, useRef, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "@/data/courses";
import CourseCard from "./CourseCard";

const INITIAL_SHOW = 6;

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState<Record<string, boolean>>({});
  const tabsRef = useRef<HTMLDivElement>(null);

  const allCourses = useMemo(() => categories.flatMap(c => c.courses), []);
  const totalCount = allCourses.length;

  const tabs = [
    { id: "all", label: "All Courses", count: totalCount },
    ...categories.map(c => ({ id: c.slug, label: c.name, count: c.courses.length })),
  ];

  const filteredCourses = useMemo(() => {
    let courses = activeTab === "all" ? allCourses : categories.find(c => c.slug === activeTab)?.courses || [];
    if (search.trim().length >= 2) {
      const q = search.toLowerCase();
      courses = courses.filter(c =>
        c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q) || c.skills.some(s => s.toLowerCase().includes(q))
      );
    }
    return courses;
  }, [activeTab, search, allCourses]);

  const displayedCourses = showAll[activeTab] ? filteredCourses : filteredCourses.slice(0, INITIAL_SHOW);

  const scrollTabs = (dir: number) => {
    tabsRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <section id="courses-section" className="py-16 md:py-20 bg-background">
      <div className="container">
        <p className="text-center text-sm font-semibold text-primary uppercase tracking-widest mb-2">Explore Courses</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Choose Your Career Path
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Find the course right for your goals across our accredited certification programs.
        </p>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search certifications… e.g., PMP, AZ-900, Security+"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="relative mb-10">
          <button onClick={() => scrollTabs(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-card shadow-md border border-border flex items-center justify-center md:hidden">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div ref={tabsRef} className="flex gap-2 overflow-x-auto scrollbar-hide px-8 md:px-0 md:justify-center pb-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setShowAll({}); }}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-colors border ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
          <button onClick={() => scrollTabs(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-card shadow-md border border-border flex items-center justify-center md:hidden">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCourses.map(course => (
            <CourseCard key={course.code} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No courses match your search. Try a different keyword.</p>
        )}

        {filteredCourses.length > INITIAL_SHOW && !showAll[activeTab] && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(prev => ({ ...prev, [activeTab]: true }))}
              className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
            >
              Load More Courses →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryTabs;
