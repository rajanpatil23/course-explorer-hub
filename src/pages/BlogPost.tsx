import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { findBlogBySlug, blogPosts } from "@/data/blogs";
import { blogImages } from "@/data/blogImages";
import { ArrowLeft, Clock, Calendar, ArrowRight, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
      <section className="bg-background pt-4 md:pt-6 pb-0">
        <div className="container">
          <div className="bg-secondary/50 rounded-2xl md:rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="flex flex-col p-5 md:p-6 lg:p-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-md">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                </div>
                <h1 className="font-heading text-2xl sm:text-3xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] font-bold text-foreground leading-[1.15] mb-2">
                  {post.title}
                </h1>
                <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed line-clamp-3 mb-2">
                  {post.excerpt}
                </p>
                <p className="text-xs text-primary mb-4">{post.readTime} read</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    {post.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-tight">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{(authorDetails[post.author] || { role: "Contributor" }).role}</p>
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

      <article className="py-10 md:py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-[3fr_1fr] gap-8">
            {/* Left Column — Content */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <div className="prose prose-sm dark:prose-invert prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary max-w-none">
                {post.content.split("\n\n").map((block, i) => {
                  if (block.startsWith("## ")) {
                    return <h2 key={i}>{block.replace("## ", "")}</h2>;
                  }
                  if (block.startsWith("### ")) {
                    return <h3 key={i}>{block.replace("### ", "")}</h3>;
                  }
                  if (block.startsWith("- ")) {
                    return (
                      <ul key={i}>
                        {block.split("\n").map((li, j) => (
                          <li key={j} dangerouslySetInnerHTML={{ __html: li.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                        ))}
                      </ul>
                    );
                  }
                  if (block.match(/^\d+\./)) {
                    return (
                      <ol key={i}>
                        {block.split("\n").map((li, j) => (
                          <li key={j} dangerouslySetInnerHTML={{ __html: li.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                        ))}
                      </ol>
                    );
                  }
                  if (block.startsWith("|")) {
                    const rows = block.split("\n").filter((r) => !r.match(/^\|[\s-|]+$/));
                    if (rows.length < 2) return null;
                    const headers = rows[0].split("|").filter(Boolean).map((h) => h.trim());
                    const body = rows.slice(1);
                    return (
                      <div key={i} className="overflow-x-auto">
                        <table>
                          <thead>
                            <tr>{headers.map((h, hi) => <th key={hi}>{h}</th>)}</tr>
                          </thead>
                          <tbody>
                            {body.map((row, ri) => (
                              <tr key={ri}>
                                {row.split("|").filter(Boolean).map((cell, ci) => (
                                  <td key={ci}>{cell.trim()}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  return <p key={i} dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
                })}
              </div>

              {/* CTA */}
              <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Ready to Get Certified?</h3>
                <p className="text-sm text-muted-foreground mb-4">Explore our expert-led training programs and take the next step in your career.</p>
                <Button asChild>
                  <Link to="/">Explore Courses <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>

            </div>

            {/* Right Column — Sidebar */}
            <aside className="hidden md:block">
              <div className="sticky top-24 space-y-6">
                {/* Consultation Form */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1">Get Free Consultation</h4>
                  <p className="text-sm text-muted-foreground mb-4">Talk to an expert to plan your next move.</p>
                  <div className="space-y-3">
                    <Input placeholder="Your name" className="rounded-lg" />
                    <Input placeholder="Phone number" className="rounded-lg" />
                    <Button className="w-full rounded-lg">Submit</Button>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-3 text-center">
                    By submitting, you accept our{" "}
                    <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                  </p>
                </div>

                {/* Download Guide */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1">Ready to learn more?</h4>
                  <p className="text-sm text-muted-foreground mb-4">Download our quick guide to get started.</p>
                  <Button variant="outline" className="rounded-lg text-primary border-primary/30 hover:bg-primary/5" onClick={() => setGuideOpen(true)}>
                    <Download className="w-4 h-4 mr-2" /> Download Guide
                  </Button>
                </div>
              </div>
            </aside>

            {/* Download Guide Dialog */}
            <Dialog open={guideOpen} onOpenChange={setGuideOpen}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-heading text-xl font-bold text-foreground">Get Your Free Guide</DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    Enter your details and we'll send it right over.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 pt-2">
                  <Input placeholder="Your name" className="rounded-lg" />
                  <Input placeholder="Email address" type="email" className="rounded-lg" />
                  <Button className="w-full rounded-lg">Send me the guide</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Related Articles — Full Width */}
          {related.length > 0 && (
            <div className="mt-10">
              <h3 className="font-heading text-lg font-bold text-foreground mb-6">Related Articles</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
                  >
                    {blogImages[r.slug] && (
                      <img src={blogImages[r.slug]} alt={r.title} className="w-full h-28 object-cover" loading="lazy" />
                    )}
                    <div className="p-4">
                      <span className="text-[10px] font-semibold text-primary">{r.category}</span>
                      <h4 className="font-heading font-bold text-foreground text-xs mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {r.title}
                      </h4>
                      <p className="text-[10px] text-muted-foreground mt-2">{r.readTime} · {r.author}</p>
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
