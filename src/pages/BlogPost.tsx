import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { findBlogBySlug, blogPosts } from "@/data/blogs";
import { blogImages } from "@/data/blogImages";
import { ArrowLeft, Clock, Calendar, ArrowRight, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import BlogContent from "@/components/blog/BlogContent";

const authorDetails: Record<string, { role: string }> = {
  "Rajiv Sharma": { role: "Project Management Expert" },
  "Vikram Patel": { role: "Cybersecurity Specialist" },
  "Meera Nair": { role: "Cloud Solutions Architect" },
  "Ananya Rao": { role: "Agile Coach" },
  "Chaitanya Gaikwad": { role: "Data Analyst" },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? findBlogBySlug(slug) : undefined;
  const [guideOpen, setGuideOpen] = useState(false);

  // Consultation form
  const [consultName, setConsultName] = useState("");
  const [consultPhone, setConsultPhone] = useState("");
  const [consultErrors, setConsultErrors] = useState<{ name?: string; phone?: string }>({});

  // Guide form
  const [guideName, setGuideName] = useState("");
  const [guideEmail, setGuideEmail] = useState("");
  const [guideErrors, setGuideErrors] = useState<{ name?: string; email?: string }>({});

  const handleConsultSubmit = () => {
    const errors: { name?: string; phone?: string } = {};
    if (!consultName.trim()) errors.name = "Name is required";
    if (!consultPhone.trim()) errors.phone = "Phone number is required";
    else if (!/^[0-9+\-\s()]{7,15}$/.test(consultPhone.trim())) errors.phone = "Enter a valid phone number";
    setConsultErrors(errors);
    if (Object.keys(errors).length === 0) {
      // TODO: handle submission
      setConsultName("");
      setConsultPhone("");
    }
  };

  const handleGuideSubmit = () => {
    const errors: { name?: string; email?: string } = {};
    if (!guideName.trim()) errors.name = "Name is required";
    if (!guideEmail.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guideEmail.trim())) errors.email = "Enter a valid email";
    setGuideErrors(errors);
    if (Object.keys(errors).length === 0) {
      // TODO: handle submission
      setGuideName("");
      setGuideEmail("");
      setGuideOpen(false);
    }
  };

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-background pt-3 md:pt-6 pb-0">
        <div className="container px-3 md:px-4">
          <div className="bg-secondary/50 rounded-xl md:rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="flex flex-col p-4 md:p-6 lg:p-8">
                <div className="flex items-center justify-between mb-1.5 md:mb-2">
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-primary-foreground bg-primary px-2.5 py-0.5 md:px-3 md:py-1 rounded-md">
                    {post.category}
                  </span>
                  <span className="text-[10px] md:text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                </div>
                <h1 className="font-heading text-xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] font-bold text-foreground leading-[1.15] mb-1.5 md:mb-2">
                  {post.title}
                </h1>
                <p className="text-muted-foreground text-xs md:text-[15px] leading-relaxed line-clamp-2 md:line-clamp-3 mb-1.5 md:mb-2">
                  {post.excerpt}
                </p>
                <p className="text-[10px] md:text-xs text-primary mb-3 md:mb-4">{post.readTime} read</p>
                <div className="flex items-center gap-2.5 md:gap-3 mt-auto">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px] md:text-sm shrink-0">
                    {post.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-foreground leading-tight">{post.author}</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">{(authorDetails[post.author] || { role: "Contributor" }).role}</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center p-5 md:py-6 md:pr-6 lg:py-8 lg:pr-8 md:pl-0">
                <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden">
                  {slug && blogImages[slug] ? (
                    <img src={blogImages[slug]} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary to-accent/10 flex items-center justify-center">
                      <span className="text-primary/20 font-heading font-bold text-2xl text-center px-8">{post.category}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-6 md:py-16 bg-background">
        <div className="container px-3 md:px-4">
          <div className="grid md:grid-cols-[3fr_1fr] gap-6 md:gap-8">
            {/* Left Column — Content */}
            <div className="bg-card border border-border rounded-xl p-4 md:p-10">
              <BlogContent content={post.content} />

              {/* CTA */}
              <div className="mt-8 md:mt-12 bg-primary/5 border border-primary/20 rounded-xl p-4 md:p-8 text-center">
                <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-1.5 md:mb-2">Ready to Get Certified?</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">Explore our expert-led training programs and take the next step in your career.</p>
                <Button asChild size="sm" className="md:size-default">
                  <Link to="/">Explore Courses <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </div>

            {/* Sidebar — visible on all screens */}
            <aside>
              <div className="md:sticky md:top-24 space-y-4 md:space-y-6">
                {/* Consultation Form */}
                <div className="bg-card border border-border rounded-xl p-4 md:p-6">
                  <h4 className="font-heading font-bold text-foreground text-base md:text-lg mb-1">Get Free Consultation</h4>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">Talk to an expert to plan your next move.</p>
                  <div className="space-y-2.5 md:space-y-3">
                    <div>
                      <Input
                        placeholder="Your name"
                        value={consultName}
                        onChange={(e) => { setConsultName(e.target.value); setConsultErrors((p) => ({ ...p, name: undefined })); }}
                        className={`rounded-lg transition-colors text-sm ${consultErrors.name ? "border-destructive ring-2 ring-destructive/20 placeholder:text-destructive/60" : ""}`}
                      />
                      {consultErrors.name && (
                        <p className="flex items-center gap-1 text-[11px] text-destructive mt-1.5 animate-in slide-in-from-top-1 fade-in duration-200">
                          <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-destructive/10 text-destructive text-[9px] font-bold shrink-0">!</span>
                          {consultErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Input
                        placeholder="Phone number"
                        value={consultPhone}
                        onChange={(e) => { setConsultPhone(e.target.value); setConsultErrors((p) => ({ ...p, phone: undefined })); }}
                        className={`rounded-lg transition-colors text-sm ${consultErrors.phone ? "border-destructive ring-2 ring-destructive/20 placeholder:text-destructive/60" : ""}`}
                      />
                      {consultErrors.phone && (
                        <p className="flex items-center gap-1 text-[11px] text-destructive mt-1.5 animate-in slide-in-from-top-1 fade-in duration-200">
                          <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-destructive/10 text-destructive text-[9px] font-bold shrink-0">!</span>
                          {consultErrors.phone}
                        </p>
                      )}
                    </div>
                    <Button className="w-full rounded-lg text-sm" onClick={handleConsultSubmit}>Submit</Button>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-2.5 md:mt-3 text-center">
                    By submitting, you accept our{" "}
                    <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                  </p>
                </div>

                {/* Download Guide */}
                <div className="bg-card border border-border rounded-xl p-4 md:p-6">
                  <h4 className="font-heading font-bold text-foreground text-base md:text-lg mb-1">Ready to learn more?</h4>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">Download our quick guide to get started.</p>
                  <Button variant="outline" className="rounded-lg text-primary border-primary/30 hover:bg-primary/5 text-sm" onClick={() => setGuideOpen(true)}>
                    <Download className="w-4 h-4 mr-2" /> Download Guide
                  </Button>
                </div>
              </div>
            </aside>

            {/* Download Guide Dialog */}
            <Dialog open={guideOpen} onOpenChange={setGuideOpen}>
              <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-heading text-lg md:text-xl font-bold text-foreground">Get Your Free Guide</DialogTitle>
                  <DialogDescription className="text-xs md:text-sm text-muted-foreground">
                    Enter your details and we'll send it right over.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3 md:space-y-4 pt-2">
                  <div>
                    <Input
                      placeholder="Your name"
                      value={guideName}
                      onChange={(e) => { setGuideName(e.target.value); setGuideErrors((p) => ({ ...p, name: undefined })); }}
                      className={`rounded-lg transition-colors text-sm ${guideErrors.name ? "border-destructive ring-2 ring-destructive/20 placeholder:text-destructive/60" : ""}`}
                    />
                    {guideErrors.name && (
                      <p className="flex items-center gap-1 text-[11px] text-destructive mt-1.5 animate-in slide-in-from-top-1 fade-in duration-200">
                        <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-destructive/10 text-destructive text-[9px] font-bold shrink-0">!</span>
                        {guideErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Email address"
                      type="email"
                      value={guideEmail}
                      onChange={(e) => { setGuideEmail(e.target.value); setGuideErrors((p) => ({ ...p, email: undefined })); }}
                      className={`rounded-lg transition-colors text-sm ${guideErrors.email ? "border-destructive ring-2 ring-destructive/20 placeholder:text-destructive/60" : ""}`}
                    />
                    {guideErrors.email && (
                      <p className="flex items-center gap-1 text-[11px] text-destructive mt-1.5 animate-in slide-in-from-top-1 fade-in duration-200">
                        <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-destructive/10 text-destructive text-[9px] font-bold shrink-0">!</span>
                        {guideErrors.email}
                      </p>
                    )}
                  </div>
                  <Button className="w-full rounded-lg text-sm" onClick={handleGuideSubmit}>Send me the guide</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Related Articles — Full Width */}
          {related.length > 0 && (
            <div className="mt-8 md:mt-10">
              <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-4 md:mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow group flex sm:flex-col"
                  >
                    {blogImages[r.slug] && (
                      <img src={blogImages[r.slug]} alt={r.title} className="w-24 h-20 sm:w-full sm:h-28 object-cover shrink-0" loading="lazy" />
                    )}
                    <div className="p-3 md:p-4 flex-1 min-w-0">
                      <span className="text-[9px] md:text-[10px] font-semibold text-primary">{r.category}</span>
                      <h4 className="font-heading font-bold text-foreground text-[11px] md:text-xs mt-0.5 md:mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {r.title}
                      </h4>
                      <p className="text-[9px] md:text-[10px] text-muted-foreground mt-1 md:mt-2">{r.readTime} · {r.author}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

    </div>
  );
};

export default BlogPost;
