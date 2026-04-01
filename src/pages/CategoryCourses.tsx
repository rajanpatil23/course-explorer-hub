import { useParams, Navigate, Link } from "react-router-dom";
import { useMemo } from "react";
import { Star, CheckCircle, ShieldCheck, Users, CalendarCheck, ChevronRight, ArrowRight } from "lucide-react";
import { categories } from "@/data/courses";
import { blogPosts } from "@/data/blogs";
import { blogImages } from "@/data/blogImages";
import CourseCard from "@/components/courses/CourseCard";
import { Button } from "@/components/ui/button";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroCourses from "@/assets/hero-courses.jpg";
import advisorModel from "@/assets/advisor-model.png";

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
      <section className="relative bg-muted/40 text-foreground overflow-hidden rounded-b-[3rem] md:rounded-b-[8rem] shadow-sm">
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
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold leading-[1.12] mb-4 md:mb-5">
                {category.name}{" "}
                <span className="text-gradient-primary">Courses</span>
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6">
                {category.description}
              </p>

              {/* Rated by Learners */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center lg:justify-start mb-6">
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

              {/* Short highlights */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center lg:justify-start mb-6">
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

              {/* 3 Category-specific points */}
              <div className="space-y-3 mb-7 max-w-lg mx-auto lg:mx-0">
                {category.heroPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-left">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm md:text-[15px] text-foreground leading-relaxed font-medium">{point}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button size="lg" className="font-semibold px-8" asChild>
                  <a href="#courses-grid">Explore Courses</a>
                </Button>
                <Button size="lg" variant="outline" className="font-semibold px-8" asChild>
                  <Link to="/contact">Talk to an Advisor</Link>
                </Button>
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
                  alt={`${category.name} certification training`}
                  className="w-full h-[420px] object-cover"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses-grid" className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.courses.map((course) => (
              <CourseCard key={course.code} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Advisor CTA Banner */}
      <section className="pb-14 md:pb-0">
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

            <div className="relative z-10 flex items-center gap-6 md:gap-10 px-6 md:px-10 lg:px-14">
              {/* Model image */}
              <div className="hidden md:block shrink-0 self-end">
                <img
                  src={advisorModel}
                  alt="Learning advisor"
                  className="h-[140px] lg:h-[160px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 py-6 md:py-8">
                <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-bold mb-1">
                  Talk to Our Expert Learning Advisor Today
                </h3>
                <p className="text-hero-foreground/70 text-sm md:text-base">
                  and Earn your {category.name} success. Call Now!
                </p>
              </div>

              {/* CTA */}
              <div className="shrink-0">
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
                {category.name} FAQs
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                Everything you need to know about our {category.name} certification training programs.
              </p>
            </div>

            <div>
              <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
                {category.faqs.map((faq, i) => (
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
    </div>
  );
};

export default CategoryCourses;
