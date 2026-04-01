import { useState, useMemo, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { categories, type BadgeType } from "@/data/courses";
import PopularCourseCard from "@/components/courses/PopularCourseCard";
import useEmblaCarousel from "embla-carousel-react";

const tabs = [
  { id: "all", label: "All Courses" },
  ...categories.map(c => ({ id: c.slug, label: c.name })),
];

const PopularCourses = () => {
  const [active, setActive] = useState("all");
  const allCourses = useMemo(() => categories.flatMap(c => c.courses), []);

  const courses = useMemo(() => {
    const list = active === "all" ? allCourses : categories.find(c => c.slug === active)?.courses || [];
    return list.slice(0, 6);
  }, [active, allCourses]);

  // Mobile carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    emblaApi?.reInit();
  }, [courses, emblaApi]);

  return (
    <section className="py-12 md:py-24 bg-secondary rounded-t-[3rem] md:rounded-t-[8rem]">
      <div className="container">
        <p className="text-center text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
          Choose The Better Course For Your Career
        </p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-center text-foreground mb-6 md:mb-10">
          Professional Certification & Training Courses
        </h2>

        {/* Tabs - horizontal scroll on mobile */}
        <div className="flex gap-2 justify-start md:justify-center mb-8 md:mb-10 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`whitespace-nowrap px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors border flex-shrink-0 ${
                active === tab.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {courses.map(course => (
                <div key={course.code} className="flex-[0_0_80%] min-w-0 pl-4">
                  <PopularCourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-40"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <PopularCourseCard key={course.code} course={course} />
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-primary hover:bg-teal-dark text-primary-foreground font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg transition-colors text-sm md:text-base"
          >
            View All Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
