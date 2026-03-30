import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { blogPosts, blogCategories } from "@/data/blogs";
import { blogImages } from "@/data/blogImages";
import { ArrowRight, Clock, Search, ArrowLeft } from "lucide-react";
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

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showSearch, setShowSearch] = useState(false);

  const filtered = useMemo(() => {
    let posts = blogPosts;
    if (activeCategory !== "All Posts") {
      posts = posts.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
    }
    return posts;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paged = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const changeCat = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      <BlogHeroCarousel />

      <section className="py-10 md:py-16 bg-background">
        <div className="container">
          {/* Filter Bar */}
          {showSearch ? (
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => { setShowSearch(false); setSearchQuery(""); setCurrentPage(1); }}
                className="flex items-center gap-1.5 text-sm font-medium text-foreground border border-border rounded-full px-4 py-2 hover:border-primary/40 transition-colors shrink-0"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Categories
              </button>
              <div className="relative flex-1 max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="What do you want to learn today?"
                  className="pl-10 pr-28 rounded-full border-border h-12"
                  value={searchQuery}
                  autoFocus
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                />
                <Button
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-5 py-2"
                >
                  Search
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 mb-8">
              <div className="flex-1 bg-card border border-border rounded-xl px-3 py-1 overflow-x-auto scrollbar-thin">
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
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:border-primary/40 transition-colors shrink-0"
              >
                <Search className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          )}

          {/* Blog Grid */}
          {paged.length === 0 ? (
            <p className="text-center text-muted-foreground py-16">No articles found matching your criteria.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paged.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-4 pb-0">
                    <div className="h-40 rounded-lg overflow-hidden">
                      {blogImages[post.slug] ? (
                        <img src={blogImages[post.slug]} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary to-accent/10 flex items-center justify-center px-4 rounded-lg">
                          <span className="text-primary/30 font-heading font-bold text-sm text-center line-clamp-2">{post.category}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-sm mb-3 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <span className="flex items-center gap-1 text-[10px] text-primary mb-3">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                    <div className="flex items-center gap-2">
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
            <div className="flex justify-center gap-2 mt-10">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className="w-9"
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                Next
              </Button>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
              Ready to Start Your Certification Journey?
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              Don't just read about it — take the first step. Browse our courses and join 10,000+ professionals who've earned their edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link to="/">Explore Courses <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button variant="outline" asChild>
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
