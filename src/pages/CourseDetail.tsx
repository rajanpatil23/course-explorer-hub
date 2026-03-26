import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { findCourseBySlug, categories } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Star, Clock, Users, Calendar, ChevronRight, CheckCircle, BookOpen,
  Award, ShieldCheck, ArrowLeft, Phone, Mail
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import categoryThumbnails from "@/components/courses/categoryThumbnails";
import type { BadgeType } from "@/data/courses";

const badgeColors: Record<BadgeType, string> = {
  Popular: "bg-primary text-primary-foreground",
  Trending: "bg-amber text-accent-foreground",
  Advance: "bg-badge-purple text-primary-foreground",
};

const upcomingBatches = [
  { date: "Apr 12–15, 2026", format: "Live Online", time: "9:00 AM – 5:00 PM IST", seats: 8 },
  { date: "Apr 26–29, 2026", format: "Weekend Batch", time: "10:00 AM – 6:00 PM IST", seats: 12 },
  { date: "May 10–13, 2026", format: "Live Online", time: "9:00 AM – 5:00 PM IST", seats: 15 },
];

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = findCourseBySlug(slug || "");
  const { toast } = useToast();
  const [enrollForm, setEnrollForm] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="bg-primary hover:bg-teal-dark text-primary-foreground">← Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Find related courses in the same category
  const relatedCourses = categories
    .flatMap(c => c.courses)
    .filter(c => c.category === course.category && c.slug !== course.slug)
    .slice(0, 3);

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone } = enrollForm;
    if (!name.trim() || name.trim().length > 100) {
      toast({ title: "Invalid name", description: "Please enter a valid name.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    if (phone && !/^\+?[\d\s-]{7,15}$/.test(phone)) {
      toast({ title: "Invalid phone", description: "Please enter a valid phone number.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Enrollment Request Sent!", description: "Our team will contact you within 24 hours." });
      setEnrollForm({ name: "", email: "", phone: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-secondary border-b border-border">
        <div className="container py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/" className="hover:text-primary transition-colors">Courses</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium truncate">{course.name}</span>
        </div>
      </div>

      {/* Hero section */}
      <section className="relative bg-hero text-hero-foreground overflow-hidden">
        <img
          src={categoryThumbnails[course.category] || ""}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/95 to-hero/70" />
        <div className="container relative z-10 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge className={`${badgeColors[course.badge]} text-xs font-semibold border-0`}>{course.badge}</Badge>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber text-amber" />)}
                <span className="text-sm font-semibold ml-1">5.0</span>
              </div>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              {course.name}
            </h1>
            <p className="text-hero-foreground/80 text-lg mb-6 max-w-2xl">{course.description}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" />{course.duration}</div>
              <div className="flex items-center gap-1.5"><Award className="w-4 h-4 text-primary" />{course.level}</div>
              <div className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" />{course.learners} Learners</div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" />{course.code}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Skills */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Skills You'll Gain</h2>
              <div className="flex flex-wrap gap-2">
                {course.skills.map(s => (
                  <span key={s} className="bg-teal-light text-teal-dark text-sm font-medium px-3 py-1.5 rounded-full">{s}</span>
                ))}
              </div>
            </section>

            {/* Curriculum */}
            <section id="curriculum">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Course Curriculum</h2>
              <Accordion type="multiple" defaultValue={["module-0"]} className="space-y-3">
                {course.curriculum.map((mod, i) => (
                  <AccordionItem key={i} value={`module-${i}`} className="bg-card border border-border rounded-lg px-5">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                      <span className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-teal-light text-primary text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                        {mod.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <ul className="space-y-2 pl-11">
                        {mod.topics.map((topic, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <BookOpen className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Schedule */}
            <section id="schedule">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Upcoming Batches</h2>
              <div className="space-y-3">
                {upcomingBatches.map((batch, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-foreground">{batch.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{batch.format} • {batch.time}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-muted-foreground">{batch.seats} seats left</span>
                      <Button size="sm" className="bg-primary hover:bg-teal-dark text-primary-foreground font-semibold">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What's included */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Prerequisites */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Prerequisites</h2>
              <ul className="space-y-2">
                {course.prerequisites.map((p, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <ArrowLeft className="w-4 h-4 text-primary shrink-0 mt-0.5 rotate-180" />
                    {p}
                  </li>
                ))}
              </ul>
            </section>

            {/* Related courses */}
            {relatedCourses.length > 0 && (
              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Related Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedCourses.map(rc => (
                    <Link key={rc.slug} to={`/courses/${rc.slug}`} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow group">
                      <Badge className={`${badgeColors[rc.badge]} text-[10px] font-semibold border-0 mb-2`}>{rc.badge}</Badge>
                      <h3 className="font-heading font-bold text-sm text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">{rc.name}</h3>
                      <p className="text-xs text-muted-foreground mt-2">{rc.duration}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar - Pricing + Enrollment */}
          <div className="space-y-6">
            {/* Pricing card */}
            <div className="sticky top-20 space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-4xl font-extrabold text-foreground">${course.price}</span>
                    <span className="text-sm font-medium text-primary">
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-teal-dark text-primary-foreground font-semibold mb-3"
                  onClick={() => document.getElementById("enrollment-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Enroll Now
                </Button>
                <Button variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-teal-light font-semibold">
                  Download Brochure
                </Button>
                <div className="mt-5 pt-5 border-t border-border space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />{course.duration}</div>
                  <div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" />{course.certification}</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" />First-attempt pass guarantee</div>
                </div>
              </div>

              {/* Enrollment form */}
              <div id="enrollment-form" className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h3 className="font-heading font-bold text-lg text-foreground mb-1">Request Enrollment</h3>
                <p className="text-xs text-muted-foreground mb-5">Fill the form and our advisor will contact you within 24 hours.</p>
                <form onSubmit={handleEnroll} className="space-y-3">
                  <Input
                    placeholder="Full Name"
                    value={enrollForm.name}
                    onChange={e => setEnrollForm(prev => ({ ...prev, name: e.target.value }))}
                    maxLength={100}
                    required
                    className="text-sm"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={enrollForm.email}
                    onChange={e => setEnrollForm(prev => ({ ...prev, email: e.target.value }))}
                    maxLength={255}
                    required
                    className="text-sm"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    value={enrollForm.phone}
                    onChange={e => setEnrollForm(prev => ({ ...prev, phone: e.target.value }))}
                    maxLength={15}
                    className="text-sm"
                  />
                  <Button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-teal-dark text-primary-foreground font-semibold">
                    {submitting ? "Submitting…" : "Submit Enrollment Request"}
                  </Button>
                </form>
              </div>

              {/* Contact */}
              <div className="bg-teal-light rounded-lg p-5 text-center">
                <p className="text-sm font-semibold text-foreground mb-3">Need Help Choosing?</p>
                <div className="space-y-2">
                  <a href="tel:+910000000000" className="flex items-center justify-center gap-2 text-sm text-primary font-medium hover:underline">
                    <Phone className="w-4 h-4" /> Call an Advisor
                  </a>
                  <a href="mailto:info@theeduedge.com" className="flex items-center justify-center gap-2 text-sm text-primary font-medium hover:underline">
                    <Mail className="w-4 h-4" /> info@theeduedge.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
