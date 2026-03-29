import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/courses";
import { blogImages } from "@/data/blogImages";
import { Link } from "react-router-dom";

const BlogHighlights = () => (
  <section className="py-16 md:py-20 bg-background">
    <div className="container">
      <p className="text-center text-sm font-semibold text-primary uppercase tracking-widest mb-2">Blog</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        From The EduEdge Blog
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Stay ahead with the latest certification guides, exam tips, and career advice.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {blogPosts.map((post, i) => (
          <Link key={i} to={post.slug ? `/blog/${post.slug}` : "#"} className="bg-card border border-border rounded-lg overflow-hidden group hover:shadow-md transition-shadow">
            <div className="p-4 pb-0">
              <div className="h-40 rounded-lg overflow-hidden">
                {post.slug && blogImages[post.slug] ? (
                  <img src={blogImages[post.slug]} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-teal-light via-secondary to-primary/10 flex items-center justify-center">
                    <span className="text-primary/30 font-heading font-bold text-lg">Blog</span>
                  </div>
                )}
              </div>
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold text-primary bg-teal-light px-2 py-0.5 rounded-full">{post.category}</span>
              <h3 className="font-heading font-bold text-foreground text-sm mt-3 mb-2 leading-snug line-clamp-2">{post.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{post.date}</p>
              <span className="text-xs font-semibold text-primary group-hover:underline inline-flex items-center gap-1">
                Read More <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/blog" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
          Visit The EduEdge Blog <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default BlogHighlights;
