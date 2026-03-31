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
    <section className="bg-background pt-3 md:pt-6 pb-0">
      <div className="container px-3 md:px-4">
        <div className="bg-secondary/50 rounded-xl md:rounded-3xl overflow-hidden">
          <Link to={`/blog/${post.slug}`} className="group block">
            <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr,1fr] gap-0">
              {/* Content — below image on mobile, left on desktop */}
              <div className="flex flex-col p-4 md:p-6 lg:p-8">
                <div className="flex items-center justify-between mb-1.5 md:mb-2">
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-primary-foreground bg-primary px-2.5 py-0.5 md:px-3 md:py-1 rounded-md">
                    {post.category}
                  </span>
                  <span className="text-[10px] md:text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="font-heading text-lg sm:text-xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] font-bold text-foreground leading-[1.15] mb-1.5 md:mb-2 group-hover:text-primary transition-colors line-clamp-3 md:line-clamp-4">
                  {post.title}
                </h2>

                <p className="text-muted-foreground text-xs md:text-[15px] leading-relaxed line-clamp-2 md:line-clamp-3 mb-1.5 md:mb-2">
                  {post.excerpt}
                </p>

                <p className="text-[10px] md:text-xs text-muted-foreground mb-3 md:mb-4">{post.readTime}</p>

                <div className="flex items-center gap-2.5 md:gap-3 mt-auto">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px] md:text-sm shrink-0">
                    {post.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-foreground leading-tight">{post.author}</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">{author.role}</p>
                  </div>
                </div>
              </div>

              {/* Image — above content on mobile, right on desktop */}
              <div className="flex items-center px-4 pt-4 pb-0 md:p-5 md:py-6 md:pr-6 lg:py-8 lg:pr-8 md:pl-0">
                <div className="relative w-full aspect-[2/1] md:aspect-[3/2] rounded-lg md:rounded-xl overflow-hidden">
                  {image ? (
                    <img
                      src={image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary to-accent/10 flex items-center justify-center">
                      <span className="text-primary/20 font-heading font-bold text-lg md:text-2xl text-center px-8">
                        {post.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 pb-3 md:pb-4 pt-0">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-border bg-background flex items-center justify-center hover:border-primary/40 transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
            </button>

            <div className="flex items-center gap-1 md:gap-1.5">
              {latestPosts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-5 h-2 md:w-6 md:h-2.5 bg-primary"
                      : "w-2 h-2 md:w-2.5 md:h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-border bg-background flex items-center justify-center hover:border-primary/40 transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroCarousel;
