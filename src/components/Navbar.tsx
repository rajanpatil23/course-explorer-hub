import { useState, useRef, useEffect, useMemo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, LogIn, UserPlus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/courses";
import logoFull from "@/assets/logo-full.jpg";

const allCourses = categories.flatMap(c => c.courses);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const searchResults = useMemo(() => {
    if (searchQuery.trim().length < 2) return [];
    const q = searchQuery.toLowerCase();
    return allCourses.filter(c =>
      c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [searchQuery]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="shrink-0">
          <img src={logoFull} alt="The EduEdge" className="h-14 md:h-16 w-auto" />
        </Link>

        {/* Course Search */}
        <div ref={searchRef} className="hidden md:block relative ml-4 mr-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search courses…"
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setSearchOpen(true); }}
              onFocus={() => setSearchOpen(true)}
              className="w-48 lg:w-64 pl-9 pr-3 py-2 rounded-md border border-border bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 text-sm transition-all"
            />
          </div>
          {searchOpen && searchQuery.trim().length >= 2 && (
            <div className="absolute top-full left-0 mt-1 w-80 bg-card border border-border rounded-lg shadow-lg py-2 max-h-80 overflow-y-auto z-50">
              {searchResults.length > 0 ? (
                searchResults.map(course => (
                  <button
                    key={course.code}
                    onClick={() => {
                      navigate(`/course/${course.slug}`);
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-muted/60 transition-colors"
                  >
                    <p className="text-sm font-medium text-foreground">{course.name}</p>
                    <p className="text-xs text-muted-foreground">{course.code}</p>
                  </button>
                ))
              ) : (
                <p className="px-4 py-3 text-sm text-muted-foreground">No courses found</p>
              )}
            </div>
          )}
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" end className={({ isActive }) => `px-3 py-2 text-sm font-medium transition-colors rounded-md ${isActive ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}>
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <NavLink
              to="/courses"
              className={({ isActive }) => `flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${isActive ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
            >
              Courses <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </NavLink>
            {dropdownOpen && (
              <div className="absolute top-full left-0 pt-1 w-64">
                <div className="bg-card border border-border rounded-lg shadow-lg py-2">
                  <Link
                    to="/courses"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-teal-light hover:text-primary transition-colors"
                  >
                    All Courses
                  </Link>
                  <div className="h-px bg-border mx-4 my-1" />
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/${cat.slug}`}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-teal-light hover:text-primary transition-colors"
                    >
                      {cat.name}
                      <span className="ml-1.5 text-xs text-muted-foreground/60">({cat.courses.length})</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/about" className={({ isActive }) => `px-3 py-2 text-sm font-medium transition-colors rounded-md ${isActive ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}>
            About
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => `px-3 py-2 text-sm font-medium transition-colors rounded-md ${isActive ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `px-3 py-2 text-sm font-medium transition-colors rounded-md ${isActive ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-sm font-medium text-foreground gap-1.5">
              <LogIn className="w-4 h-4" /> Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="bg-primary hover:bg-teal-dark text-primary-foreground text-sm font-semibold gap-1.5">
              <UserPlus className="w-4 h-4" /> Sign Up
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border pb-4 px-4">
          {/* Mobile search */}
          <div className="relative py-3 border-b border-border">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses…"
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setSearchOpen(true); }}
              className="w-full pl-9 pr-3 py-2 rounded-md border border-border bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
            />
            {searchOpen && searchQuery.trim().length >= 2 && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-lg py-2 max-h-60 overflow-y-auto z-50">
                {searchResults.length > 0 ? searchResults.map(course => (
                  <button
                    key={course.code}
                    onClick={() => { navigate(`/course/${course.slug}`); setMobileOpen(false); setSearchQuery(""); setSearchOpen(false); }}
                    className="w-full text-left px-4 py-2.5 hover:bg-muted/60 transition-colors"
                  >
                    <p className="text-sm font-medium text-foreground">{course.name}</p>
                    <p className="text-xs text-muted-foreground">{course.code}</p>
                  </button>
                )) : (
                  <p className="px-4 py-3 text-sm text-muted-foreground">No courses found</p>
                )}
              </div>
            )}
          </div>
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-foreground border-b border-border">Home</Link>
          <div className="border-b border-border">
            <Link to="/courses" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-semibold text-foreground">All Courses</Link>
            <div className="pl-4 pb-2 space-y-1">
              {categories.map(cat => (
                <Link
                  key={cat.slug}
                  to={`/${cat.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-1.5 text-sm text-muted-foreground"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-foreground border-b border-border">About</Link>
          <Link to="/blog" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-foreground border-b border-border">Blog</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-foreground border-b border-border">Contact</Link>
          <div className="flex gap-2 mt-4">
            <Link to="/login" onClick={() => setMobileOpen(false)} className="flex-1">
              <Button variant="outline" size="sm" className="w-full text-sm font-medium gap-1.5">
                <LogIn className="w-4 h-4" /> Login
              </Button>
            </Link>
            <Link to="/signup" onClick={() => setMobileOpen(false)} className="flex-1">
              <Button size="sm" className="w-full bg-primary hover:bg-teal-dark text-primary-foreground text-sm font-semibold gap-1.5">
                <UserPlus className="w-4 h-4" /> Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
