import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, ChevronRight, ExternalLink } from "lucide-react";
import { categories } from "@/data/courses";
import { blogPosts } from "@/data/blogs";
import courseThumbnails from "@/components/courses/courseThumbnails";
import pmiLogo from "@/assets/partners/pmi-logo-trimmed.png";
import comptiaLogo from "@/assets/partners/comptia-logo-trimmed.png";
import awsLogo from "@/assets/partners/aws-logo-trimmed.png";
import microsoftLogo from "@/assets/partners/microsoft-logo-trimmed.png";
import safeLogo from "@/assets/partners/safe-logo-official.png";

const badgeColors: Record<string, string> = {
  Popular: "bg-destructive/10 text-destructive",
  Trending: "bg-primary/10 text-primary",
  Advance: "bg-badge-purple/10 text-badge-purple",
};

const certPartners = [
  { name: "PMI", logo: pmiLogo },
  { name: "CompTIA", logo: comptiaLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "AWS", logo: awsLogo },
  { name: "Scaled Agile, Inc.", logo: safeLogo },
];

// Map category index to blog category for relevant resources
const catToBlogCategory: Record<number, string> = {
  0: "PMI & Project Management",
  1: "CompTIA & Cybersecurity",
  2: "Microsoft & Azure",
  3: "AWS & Cloud Computing",
  4: "SAFe & Agile Frameworks",
};

const MegaMenu = () => {
  const [open, setOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const activeCourses = categories[activeCat]?.courses || [];

  const relevantBlogs = useMemo(() => {
    const blogCat = catToBlogCategory[activeCat];
    if (!blogCat) return blogPosts.slice(0, 4);
    return blogPosts.filter(b => b.category === blogCat).slice(0, 5);
  }, [activeCat]);

  const close = () => setOpen(false);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md border border-border bg-muted/50 text-foreground hover:bg-muted transition-colors"
      >
        <Menu className="w-4 h-4" />
        All Courses
      </button>

      {open && (
        <div className="fixed left-0 right-0 top-16 w-full bg-card border-b border-x border-border rounded-b-lg shadow-2xl z-40 flex max-h-[75vh]">
          {/* Col 1 — Categories */}
          <div className="w-52 border-r border-border overflow-y-auto py-2 shrink-0">
            <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Domains</p>
            {categories.map((cat, i) => (
              <button
                key={cat.slug}
                onMouseEnter={() => setActiveCat(i)}
                onClick={() => { navigate(`/${cat.slug}`); close(); }}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                  activeCat === i
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground hover:bg-muted/60"
                }`}
              >
                <span className="truncate">{cat.name}</span>
                <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${activeCat === i ? "text-primary" : "text-muted-foreground/40"}`} />
              </button>
            ))}
            <div className="h-px bg-border mx-4 my-2" />
            <Link
              to="/courses"
              onClick={close}
              className="flex items-center px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
            >
              Browse All Courses →
            </Link>
          </div>

          {/* Col 2 — Course strip cards */}
          <div className="flex-1 overflow-y-auto py-2 px-1 border-r border-border">
            <div className="px-3 pb-2">
              <h3 className="text-base font-bold text-foreground">{categories[activeCat]?.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{categories[activeCat]?.description}</p>
            </div>
            <div className="space-y-0.5 px-2">
              {activeCourses.map(course => {
                const thumb = courseThumbnails[course.slug];
                return (
                  <Link
                    key={course.code}
                    to={`/course/${course.slug}`}
                    onClick={close}
                    className="flex items-center gap-3 px-2.5 py-2 rounded-lg hover:bg-muted/60 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-border bg-muted/30 shrink-0 flex items-center justify-center">
                      {thumb ? (
                        <img src={thumb} alt={course.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xs font-bold text-muted-foreground">{course.code.slice(0, 3)}</span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[11px] text-muted-foreground">{course.duration.split("|")[0]?.trim()}</span>
                        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${badgeColors[course.badge] || "bg-muted text-muted-foreground"}`}>
                          {course.badge}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-1">
                        {course.name}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Col 3 — Certification Partners & Resources */}
          <div className="w-56 overflow-y-auto py-2 shrink-0">
            {/* Certification Partners */}
            <p className="px-4 py-2 text-xs font-semibold text-foreground uppercase tracking-wider">Certification Partners</p>
            <div className="px-4 space-y-2.5 pb-3">
              {certPartners.map(partner => (
                <div key={partner.name} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-border bg-muted/20 flex items-center justify-center overflow-hidden shrink-0">
                    <img src={partner.logo} alt={partner.name} className="w-6 h-6 object-contain" />
                  </div>
                  <span className="text-sm text-foreground">{partner.name}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-border mx-4 my-2" />

            {/* Top Resources */}
            <p className="px-4 py-2 text-xs font-semibold text-foreground uppercase tracking-wider">Top Resources</p>
            <div className="px-4 space-y-1">
              {relevantBlogs.map(blog => (
                <Link
                  key={blog.slug}
                  to={`/blog/${blog.slug}`}
                  onClick={close}
                  className="flex items-center gap-1.5 py-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="truncate">{blog.title.length > 30 ? blog.title.slice(0, 30) + "…" : blog.title}</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
