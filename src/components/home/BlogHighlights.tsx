import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogs";
import { blogImages } from "@/data/blogImages";

const BlogHighlights = () => {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-background rounded-t-[5rem] md:rounded-t-[8rem]">
      <div className="container">
        <p className="text-center text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Resources</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
          Our Latest Blogs
        </h2>
        <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto mb-14">
          Stay ahead with expert insights, exam tips, and career advice from our certified trainers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featured.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all hover:border-primary/20"
            >
              <div className="p-4 pb-0">
                <div className="h-44 rounded-lg overflow-hidden">
                  {blogImages[post.slug] ? (
                    <img src={blogImages[post.slug]} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  ) : (
                    <div className="w-full h-full bg-secondary flex items-center justify-center">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">{post.category}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground mb-2">{post.date} · {post.readTime}</p>
                <h3 className="font-heading font-bold text-foreground text-sm leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/blog">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg gap-2">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
