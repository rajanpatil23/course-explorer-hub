import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogPosts, blogCategories } from "@/data/blogs";
import { blogImages } from "@/data/blogImages";
import { ArrowRight, Clock, Search, ArrowLeft, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BlogHeroCarousel from "@/components/blog/BlogHeroCarousel";

const authorDetails: Record<string, { role: string }> = {
  "Rajiv Sharma": { role: "Project Management Expert" },
  "Vikram Patel": { role: "Cybersecurity Specialist" },
  "Meera Nair": { role: "Cloud Solutions Architect" },
  "Ananya Rao": { role: "Agile Coach" },
  "Chaitanya Gaikwad": { role: "Data Analyst" },
};

const POSTS_PER_PAGE = 9;

const MobileCategoryDropdown = ({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-card border border-border rounded-xl px-3.5 py-2.5 text-xs font-medium text-foreground"
      >
        {active}
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-lg z-50 py-1 max-h-60 overflow-y-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { onChange(cat); setOpen(false); }}
              className={`w-full text-left px-3.5 py-2 text-xs transition-colors ${
                active === cat
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showSearch, setShowSearch] = useState(false);

  const heroSlugs = useMemo(() => new Set(blogPosts.slice(0, 5).map(p => p.slug)), []);

  const filtered = useMemo(() => {
    let posts = blogPosts.filter(p => !heroSlugs.has(p.slug));
    if (activeCategory !== "All Posts") {
      posts = posts.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
    }
    return posts;
  }, [activeCategory, searchQuery, heroSlugs]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paged = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const changeCat = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      <BlogHeroCarousel />

      <section className="py-6 md:py-16 bg-background">
        <div className="container px-3 md:px-4">
          {/* Filter Bar */}
          {showSearch ? (
            <div className="flex items-center gap-2 md:gap-4 mb-6 md:mb-8">
              <button
                onClick={() => { setShowSearch(false); setSearchQuery(""); setCurrentPage(1); }}
                className="flex items-center gap-1 text-xs md:text-sm font-medium text-foreground border border-border rounded-full px-3 py-1.5 md:px-4 md:py-2 hover:border-primary/40 transition-colors shrink-0"
              >
                <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" /> Back
              </button>
              <div className="relative flex-1 max-w-xl mx-auto">
                <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-9 md:pl-10 pr-20 md:pr-28 rounded-full border-border h-10 md:h-12 text-sm"
                  value={searchQuery}
                  autoFocus
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                />
                <Button
                  size="sm"
                  className="absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 rounded-full px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm"
                >
                  Search
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
              {/* Mobile: Dropdown */}
              <div className="md:hidden flex-1 relative">
                <MobileCategoryDropdown
                  categories={blogCategories}
                  active={activeCategory}
                  onChange={changeCat}
                />
              </div>
              {/* Desktop: Scrollable pills */}
              <div className="hidden md:flex flex-1 bg-card border border-border rounded-xl px-3 py-2 overflow-x-auto scrollbar-thin">
                <div className="flex items-center gap-2 min-w-max">
                  {blogCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => changeCat(cat)}
                      className={`text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                        activeCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setShowSearch(true)}
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-border flex items-center justify-center hover:border-primary/40 transition-colors shrink-0"
              >
                <Search className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          )}

          {/* Blog Grid */}
          {paged.length === 0 ? (
            <p className="text-center text-muted-foreground py-12 md:py-16 text-sm">No articles found matching your criteria.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {paged.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-2 md:p-4 pb-0">
                    <div className="h-24 md:h-40 rounded-md md:rounded-lg overflow-hidden">
                      {blogImages[post.slug] ? (
                        <img src={blogImages[post.slug]} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary to-accent/10 flex items-center justify-center px-2 md:px-4 rounded-lg">
                          <span className="text-primary/30 font-heading font-bold text-[10px] md:text-sm text-center line-clamp-2">{post.category}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-2.5 md:p-5">
                    <div className="flex items-center justify-between mb-1.5 md:mb-3">
                      <span className="text-[8px] md:text-[10px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 md:px-2 rounded-full truncate max-w-[60%]">
                        {post.category}
                      </span>
                      <span className="text-[8px] md:text-[10px] text-muted-foreground shrink-0">
                        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-[11px] md:text-sm mb-1.5 md:mb-3 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <span className="flex items-center gap-1 text-[8px] md:text-[10px] text-primary mb-1.5 md:mb-3">
                      <Clock className="w-2.5 h-2.5 md:w-3 md:h-3" /> {post.readTime}
                    </span>
                    <div className="hidden md:flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px] shrink-0">
                        {post.author.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-foreground leading-tight">{post.author}</p>
                        <p className="text-[10px] text-muted-foreground">{(authorDetails[post.author] || { role: "Contributor" }).role}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-1.5 md:gap-2 mt-8 md:mt-10">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="text-xs md:text-sm px-2.5 md:px-3"
              >
                Prev
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className="w-8 md:w-9 text-xs md:text-sm"
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="text-xs md:text-sm px-2.5 md:px-3"
              >
                Next
              </Button>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-10 md:mt-16 bg-primary/5 border border-primary/20 rounded-xl p-5 md:p-12 text-center">
            <h2 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-3">
              Ready to Start Your Certification Journey?
            </h2>
            <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6 max-w-lg mx-auto">
              Don't just read about it — take the first step. Browse our courses and join 10,000+ professionals who've earned their edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
              <Button asChild size="sm" className="md:size-default">
                <Link to="/">Explore Courses <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button variant="outline" asChild size="sm" className="md:size-default">
                <Link to="/contact">Talk to an Advisor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
