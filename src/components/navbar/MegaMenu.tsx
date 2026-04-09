import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, ChevronRight } from "lucide-react";
import { categories } from "@/data/courses";
import courseThumbnails from "@/components/courses/courseThumbnails";

interface MegaMenuProps {
  onClose?: () => void;
}

const badgeColors: Record<string, string> = {
  Popular: "bg-destructive/10 text-destructive",
  Trending: "bg-primary/10 text-primary",
  Advance: "bg-badge-purple/10 text-badge-purple",
};

const MegaMenu = ({ onClose }: MegaMenuProps) => {
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

  const close = () => {
    setOpen(false);
    onClose?.();
  };

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
        <div className="absolute top-full left-0 mt-2 w-[820px] bg-card border border-border rounded-lg shadow-2xl z-50 flex flex-col max-h-[75vh]">
          {/* Search bar */}
          <div className="px-4 pt-4 pb-3 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="What do you want to learn today?"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 rounded-md border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Left — Categories */}
            <div className="w-56 border-r border-border overflow-y-auto py-2 shrink-0">
              <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Domains</p>
              {categories.map((cat, i) => (
                <button
                  key={cat.slug}
                  onMouseEnter={() => { setActiveCat(i); }}
                  onClick={() => { navigate(`/${cat.slug}`); close(); }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                    activeCat === i && !search
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

            {/* Right — Course strip cards */}
            <div className="flex-1 overflow-y-auto py-2 px-1">
              {!search && (
                <div className="px-3 pb-2">
                  <h3 className="text-base font-bold text-foreground">{categories[activeCat]?.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{categories[activeCat]?.description}</p>
                </div>
              )}
              {search && (
                <p className="px-3 pb-2 text-xs text-muted-foreground">
                  {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
                </p>
              )}
              <div className="grid grid-cols-2 gap-1 px-2">
                {filtered.map(course => {
                  const thumb = courseThumbnails[course.slug];
                  return (
                    <Link
                      key={course.code}
                      to={`/course/${course.slug}`}
                      onClick={close}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-muted/60 transition-colors group"
                    >
                      {/* Logo / Thumbnail */}
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-border bg-muted/30 shrink-0 flex items-center justify-center">
                        {thumb ? (
                          <img src={thumb} alt={course.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-xs font-bold text-muted-foreground">{course.code.slice(0, 3)}</span>
                        )}
                      </div>
                      {/* Details */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[11px] text-muted-foreground">{course.duration.split("|")[0]?.trim()}</span>
                          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${badgeColors[course.badge] || "bg-muted text-muted-foreground"}`}>
                            {course.badge}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
                          {course.name}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              {activeCourses.length === 0 && (
                <p className="text-center text-sm text-muted-foreground py-8">No courses found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
