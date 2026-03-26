import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, blogCategories } from "@/data/blogs";
import { ArrowRight, Clock, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const POSTS_PER_PAGE = 9;

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary to-background py-14 md:py-20">
        <div className="container text-center max-w-3xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Blog</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            The EduEdge Insights
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Career guides, certification tips &amp; industry trends to keep you ahead.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-background">
        <div className="container max-w-6xl">
          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => changeCat(cat)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

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
                  <div className="h-40 bg-gradient-to-br from-primary/10 via-secondary to-accent/10 flex items-center justify-center px-4">
                    <span className="text-primary/30 font-heading font-bold text-sm text-center line-clamp-2">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <h3 className="font-heading font-bold text-foreground text-sm mt-3 mb-2 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1">
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </p>
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

      <Footer />
    </div>
  );
};

export default Blog;
