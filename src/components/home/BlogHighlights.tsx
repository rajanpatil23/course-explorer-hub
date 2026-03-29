import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogs";

const BlogHighlights = () => {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <p className="text-center text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Resources</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-14">
          Our Latest Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featured.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all hover:border-primary/20"
            >
              <div className="p-4 pb-0">
                <div className="h-44 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{post.category}</span>
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
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
