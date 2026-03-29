import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import { categories } from "@/data/courses";

const INITIAL_SHOW = 9;

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const [activeTab, setActiveTab] = useState(initialCat);
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState<Record<string, boolean>>({});

  const allCourses = useMemo(() => categories.flatMap(c => c.courses), []);

  const tabs = [
    { id: "all", label: "All Courses", count: allCourses.length },
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

  const displayed = showAll[activeTab] ? filteredCourses : filteredCourses.slice(0, INITIAL_SHOW);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setShowAll({});
    if (tabId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: tabId });
    }
  };

  // Sync URL param changes
  useMemo(() => {
    const cat = searchParams.get("category");
    if (cat && cat !== activeTab) {
      setActiveTab(cat);
      setShowAll({});
    }
  }, [searchParams]);

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

      {/* Tabs + Courses */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
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

          {/* Course grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayed.map(course => (
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

      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Courses;
