import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogs";
import { blogImages } from "@/data/blogImages";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all hover:border-primary/20 flex flex-col h-full"
  >
    <div className="p-3 md:p-4 pb-0">
      <div className="h-36 md:h-44 rounded-lg overflow-hidden">
        {blogImages[post.slug] ? (
          <img src={blogImages[post.slug]} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">{post.category}</span>
          </div>
        )}
      </div>
    </div>
    <div className="p-4 md:p-5 flex flex-col flex-1">
      <p className="text-[10px] md:text-xs text-muted-foreground mb-1.5 md:mb-2">{post.date} · {post.readTime}</p>
      <h3 className="font-heading font-bold text-foreground text-xs md:text-sm leading-snug mb-2 md:mb-3 group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-[10px] md:text-xs text-muted-foreground line-clamp-2 mb-2 md:mb-3">{post.excerpt}</p>
      <span className="inline-flex items-center gap-1 text-[10px] md:text-xs font-semibold text-primary mt-auto">
        Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </Link>
);

const BlogHighlights = () => {
  const featured = blogPosts.slice(0, 3);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="py-12 md:py-24 bg-background rounded-t-[3rem] md:rounded-t-[8rem]">
      <div className="container">
        <p className="text-center text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Resources</p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-center text-foreground mb-2 md:mb-3">
          Our Latest Blogs
        </h2>
        <p className="text-center text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto mb-10 md:mb-14">
          Stay ahead with expert insights, exam tips, and career advice from our certified trainers.
        </p>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {featured.map((post) => (
                <div key={post.slug} className="flex-[0_0_82%] min-w-0 pl-4">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-40"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featured.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <Link to="/blog">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-lg gap-2 text-sm md:text-base">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
