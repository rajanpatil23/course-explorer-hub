import { useParams, Link, Navigate } from "react-router-dom";
import { findBlogBySlug, blogPosts } from "@/data/blogs";
import { findBlogBySlug, blogPosts } from "@/data/blogs";
import { ArrowLeft, Clock, User, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? findBlogBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="container py-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span>/</span>
          <span className="text-foreground line-clamp-1">{post.title}</span>
        </div>
      </div>

      <article className="py-10 md:py-16 bg-background">
        <div className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-8 pb-8 border-b border-border">
            <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {post.author}</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime} read</span>
          </div>

          {/* Content */}
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

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="mt-14">
              <h3 className="font-heading text-lg font-bold text-foreground mb-6">Related Articles</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow group"
                  >
                    <span className="text-[10px] font-semibold text-primary">{r.category}</span>
                    <h4 className="font-heading font-bold text-foreground text-xs mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {r.title}
                    </h4>
                    <p className="text-[10px] text-muted-foreground mt-2">{r.readTime} · {r.author}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
