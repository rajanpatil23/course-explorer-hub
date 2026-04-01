import { useState, useMemo } from "react";
import { Star, ChevronRight, ArrowRight, ShieldCheck, Users, CalendarCheck } from "lucide-react";
import { useSearchParams, Link } from "react-router-dom";
import PopularCourseCard from "@/components/courses/PopularCourseCard";
import { categories } from "@/data/courses";
import { blogPosts } from "@/data/blogs";
import { Button } from "@/components/ui/button";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogCarouselSection from "@/components/courses/BlogCarouselSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroCourses from "@/assets/hero-courses.jpg";
import advisorModel from "@/assets/advisor-model.png";

const INITIAL_SHOW = 9;

const generalFaqs = [
  { q: "What certifications does The EduEdge offer?", a: "We offer accredited certifications across Project Management (PMP, CAPM, PMI-ACP), Cybersecurity (CompTIA Security+, CySA+, CASP+), Microsoft Azure, AWS Cloud Computing, and SAFe Agile frameworks." },
  { q: "Are the courses instructor-led or self-paced?", a: "All our courses are live, instructor-led sessions conducted by certified industry experts. You also get access to recorded sessions and self-paced study materials for revision." },
  { q: "How do I choose the right course for my career?", a: "Our learning advisors can help you select the best certification based on your experience, career goals, and industry demand. Contact us for a free consultation." },
  { q: "Do you offer corporate training programs?", a: "Yes, we offer customized corporate training solutions for teams of all sizes. Our programs can be tailored to your organization's specific needs and schedule." },
  { q: "What is the refund policy?", a: "We offer a full refund if you cancel 7 days before the course start date. For details, please review our terms and conditions or contact our support team." },
  { q: "Will I receive a certificate after completing the course?", a: "Yes, upon successful completion of each course, you'll receive an industry-recognized certificate that you can share on LinkedIn and with employers." },
];

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

  const recentBlogs = useMemo(() => blogPosts.slice(0, 3), []);

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
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Browse our full catalog of accredited certification programs across the most in-demand domains.
              </p>

              {/* Short highlights */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center lg:justify-start mt-6 mb-6">
                {[
                  { icon: ShieldCheck, label: "Accredited Certification" },
                  { icon: Users, label: "Expert Instructors" },
                  { icon: CalendarCheck, label: "Flexible Schedule" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 text-sm text-foreground font-medium">
                    <Icon className="w-4 h-4 text-primary" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              {/* Rated by Learners */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[
                      "https://randomuser.me/api/portraits/women/44.jpg",
                      "https://randomuser.me/api/portraits/men/32.jpg",
                      "https://randomuser.me/api/portraits/women/68.jpg",
                      "https://randomuser.me/api/portraits/men/75.jpg",
                      "https://randomuser.me/api/portraits/women/21.jpg",
                      "https://randomuser.me/api/portraits/men/46.jpg",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="Learner"
                        className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-background object-cover"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-medium text-muted-foreground">Rated by Learners</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 md:w-3.5 md:h-3.5 fill-amber text-amber" />
                      <span className="text-xs md:text-sm font-bold text-foreground">4.9/5</span>
                      <span className="text-[10px] md:text-xs text-muted-foreground">· 10,000+ Reviews</span>
                    </div>
                  </div>
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
          {/* Category tabs — horizontal scroll on mobile */}
          <div className="flex gap-2 justify-start md:justify-center mb-10 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`whitespace-nowrap px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors border shrink-0 ${
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
              <PopularCourseCard key={course.code} course={course} />
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

      {/* Testimonials */}
      <div className="bg-secondary rounded-t-[3rem] md:rounded-t-[8rem] overflow-hidden [&>section]:bg-secondary">
        <TestimonialsSection />
      </div>

      {/* Advisor CTA Banner */}
      <section className="bg-secondary pb-14 md:pb-0">
        <div className="container">
          <div className="relative bg-hero text-hero-foreground rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero/95 to-primary/20" />
            <div
              className="absolute -top-6 -left-4 w-[110%] h-[90%] pointer-events-none opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1.2px, transparent 1.2px)",
                backgroundSize: "18px 18px",
              }}
            />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[120px]" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-10 px-5 md:px-10 lg:px-14">
              <div className="hidden md:block shrink-0 self-end">
                <img
                  src={advisorModel}
                  alt="Learning advisor"
                  className="h-[140px] lg:h-[160px] object-contain"
                />
              </div>
              <div className="flex-1 py-5 md:py-8 text-center md:text-left">
                <h3 className="font-heading text-base md:text-xl lg:text-2xl font-bold mb-1">
                  Talk to Our Expert Learning Advisor Today
                </h3>
                <p className="text-hero-foreground/70 text-xs md:text-base">
                  and kickstart your certification journey. Call Now!
                </p>
              </div>
              <div className="shrink-0 pb-5 md:pb-0">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 font-semibold px-6 md:px-8"
                  asChild
                >
                  <Link to="/contact">
                    Contact Us <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
              <div className="md:hidden shrink-0 self-center">
                <img
                  src={advisorModel}
                  alt="Learning advisor"
                  className="h-[120px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-secondary rounded-b-[3rem] md:rounded-b-[8rem]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="lg:sticky lg:top-24 text-center lg:text-left">
              <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">FAQ</p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                Everything you need to know about our professional certification training programs.
              </p>
            </div>

            <div>
              <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
                {generalFaqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-card border border-border rounded-xl px-4 md:px-6 data-[state=open]:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-xs md:text-sm font-semibold text-foreground text-left py-4 md:py-5 hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed pb-4 md:pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <BlogCarouselSection
        blogs={recentBlogs}
        title="Insights & Career Guides"
        subtitle="Expert articles, exam tips, and career advice to support your professional certification journey."
      />
    </div>
  );
};

export default Courses;
