import { useState, useMemo, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, Clock, Users, ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, type BadgeType } from "@/data/courses";
import courseThumbnails from "@/components/courses/courseThumbnails";
import categoryThumbnails from "@/components/courses/categoryThumbnails";
import useEmblaCarousel from "embla-carousel-react";

const badgeConfig: Record<BadgeType, string> = {
  Popular: "bg-primary text-primary-foreground",
  Trending: "bg-amber text-white",
  Advance: "bg-blue-600 text-white",
};

const tabs = [
  { id: "all", label: "All Courses" },
  ...categories.map(c => ({ id: c.slug, label: c.name })),
];

const CourseCard = ({ course }: { course: any }) => (
  <div className="group bg-card rounded-2xl border border-border overflow-hidden flex flex-col relative h-full">
    <div className="relative overflow-hidden rounded-xl m-3 md:m-4 mb-0 h-32 md:h-40 flex-shrink-0">
      <span className={`absolute top-2 left-2 z-10 ${badgeConfig[course.badge]} text-[10px] md:text-[11px] font-bold px-2.5 md:px-3 py-1 rounded-md shadow-sm`}>
        {course.badge}
      </span>
      <img
        src={courseThumbnails[course.slug] || categoryThumbnails[course.category] || ""}
        alt={course.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
        loading="lazy"
        width={768}
        height={512}
      />
    </div>
    <div className="px-4 md:px-5 pt-3 md:pt-4 pb-4 md:pb-5 flex flex-col flex-1">
      <p className="text-[10px] md:text-xs text-primary font-medium">
        {course.category.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())}
      </p>
      <h3 className="font-heading font-bold text-sm md:text-base text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors mt-1.5 md:mt-2">
        {course.name}
      </h3>
      <div className="min-h-3 md:min-h-4 flex-1" />
      <div className="flex items-start justify-between mb-2.5 md:mb-3">
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground"><Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" /> {course.duration.includes("|") ? course.duration.split("|")[1].trim() : course.duration}</span>
          <span className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground"><Users className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" /> {course.learners}</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-amber text-amber" />
            ))}
            <span className="font-semibold text-foreground text-[10px] md:text-xs ml-1">5.0</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="line-through text-muted-foreground text-[10px] md:text-xs">${course.originalPrice}</span>
            <span className="font-heading font-bold text-lg md:text-xl text-foreground">${course.price}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 pt-2.5 md:pt-3 border-t border-border">
        <Link to={`/courses/${course.slug}`} className="flex-1">
          <Button variant="outline" className="w-full text-[10px] md:text-xs font-semibold rounded-lg h-9 md:h-11 border-primary text-primary hover:bg-teal-light">
            View Course
          </Button>
        </Link>
        <Link to={`/courses/${course.slug}`} className="flex-1">
          <Button className="w-full text-[10px] md:text-xs font-semibold rounded-lg bg-primary hover:bg-teal-dark text-primary-foreground gap-1 h-9 md:h-11">
            Enroll Now <ChevronRight className="w-3 h-3" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

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
                  <CourseCard course={course} />
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
            <CourseCard key={course.code} course={course} />
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
