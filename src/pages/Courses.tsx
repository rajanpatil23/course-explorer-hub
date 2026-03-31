import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import { categories } from "@/data/courses";
import heroCourses from "@/assets/hero-courses.jpg";

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

      {/* Hero — matches Home & About hero style */}
      <section className="relative bg-muted/40 text-foreground overflow-hidden rounded-b-[3rem] md:rounded-b-[8rem] shadow-sm">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-background via-background/80 to-transparent z-[1]" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-background via-background/80 to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-background via-background/80 to-transparent z-[1]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-background via-background/80 to-transparent z-[1]" />
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[180px] z-[2]" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] z-[2]" />

        <div className="container relative z-10 py-10 md:py-20 lg:py-24 pb-20 md:pb-32 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">
                Choose The Better Course For Your Career
              </p>
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold leading-[1.12] mb-4 md:mb-5">
                Professional Certification &{" "}
                <span className="text-gradient-primary">Training Courses</span>
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6 md:mb-8">
                Browse our full catalog of accredited certification programs across the most in-demand domains.
              </p>

              {/* Search */}
              <div className="max-w-md mx-auto lg:mx-0">
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

            {/* Right - Hero image */}
            <div className="relative hidden lg:block">
              <div className="absolute -top-6 -right-6 w-28 h-28 grid grid-cols-5 gap-2.5 z-0">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={`tr-${i}`} className="w-2 h-2 rounded-full bg-primary/40" />
                ))}
              </div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 grid grid-cols-5 gap-2.5 z-0">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={`bl-${i}`} className="w-2 h-2 rounded-full bg-accent/40" />
                ))}
              </div>
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-[3px] border-l-[3px] border-primary/30 rounded-tl-2xl z-0" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-[3px] border-r-[3px] border-accent/30 rounded-br-2xl z-0" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border z-10">
                <img
                  src={heroCourses}
                  alt="Professional certification training classroom"
                  className="w-full h-[420px] object-cover"
                  width={1920}
                  height={1080}
                />
              </div>
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

    </div>
  );
};

export default Courses;
