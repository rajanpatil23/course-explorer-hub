import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogs";
import { blogImages } from "@/data/blogImages";
import { ChevronLeft, ChevronRight } from "lucide-react";

const latestPosts = blogPosts.slice(0, 5);

const authorDetails: Record<string, { role: string }> = {
  "Rajiv Sharma": { role: "Project Management Expert" },
  "Vikram Patel": { role: "Cybersecurity Specialist" },
  "Meera Nair": { role: "Cloud Solutions Architect" },
  "Ananya Rao": { role: "Agile Coach" },
  "Chaitanya Gaikwad": { role: "Data Analyst" },
};

const BlogHeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % latestPosts.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + latestPosts.length) % latestPosts.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const post = latestPosts[current];
  const image = blogImages[post.slug];
  const author = authorDetails[post.author] || { role: "Contributor" };

  return (
    <section className="bg-background pt-4 md:pt-6 pb-0">
      <div className="container">
        <div className="bg-secondary/40 rounded-2xl md:rounded-3xl overflow-hidden border border-border shadow-sm">
          <Link
            to={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="grid md:grid-cols-2 gap-0 items-stretch">
              {/* Left — Content */}
              <div className="flex flex-col justify-between p-6 md:p-10 lg:p-12">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-md">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="font-heading text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-3">
                  {post.title}
                </h2>

                <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                <p className="text-xs text-muted-foreground mb-6">{post.readTime}</p>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    {post.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-tight">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{author.role}</p>
                  </div>
                </div>
              </div>

              {/* Right — Image */}
              <div className="hidden md:flex items-center p-4 md:py-10 md:pr-10 lg:py-12 lg:pr-12">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                  {image ? (
                    <img
                      src={image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary to-accent/10 flex items-center justify-center">
                      <span className="text-primary/20 font-heading font-bold text-2xl text-center px-8">
                        {post.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>

          {/* Navigation — bottom of card, no divider */}
          <div className="flex items-center justify-center gap-3 px-6 pb-5 pt-1">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border border-border bg-background flex items-center justify-center hover:border-primary/40 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
            </button>

            <div className="flex items-center gap-1.5">
              {latestPosts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2.5 bg-primary"
                      : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="w-9 h-9 rounded-full border border-border bg-background flex items-center justify-center hover:border-primary/40 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroCarousel;
