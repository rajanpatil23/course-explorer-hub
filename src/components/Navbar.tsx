import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, LogIn, UserPlus, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/courses";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-none">
            <span className="font-heading font-extrabold text-lg text-foreground tracking-tight">
              The EduEdge
            </span>
            <span className="block text-[10px] text-muted-foreground font-medium -mt-0.5 tracking-wider">
              SHARPEN YOUR PROFESSIONAL EDGE
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md">
            Home
          </Link>

          {/* Courses dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md">
              Courses <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 pt-1 w-64">
                <div className="bg-card border border-border rounded-lg shadow-lg py-2">
                  <Link
                    to="/"
                    className="block px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-teal-light hover:text-primary transition-colors"
                  >
                    All Courses
                  </Link>
                  <div className="h-px bg-border mx-4 my-1" />
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/?category=${cat.slug}`}
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

          <Link to="/corporate" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md">
            Corporate Training
          </Link>
          <Link to="/blog" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md">
            Blog
          </Link>
          <Link to="/contact" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md">
            Contact
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-sm font-medium text-foreground gap-1.5">
            <LogIn className="w-4 h-4" /> Login
          </Button>
          <Button size="sm" className="bg-primary hover:bg-teal-dark text-primary-foreground text-sm font-semibold gap-1.5">
            <UserPlus className="w-4 h-4" /> Sign Up
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border pb-4 px-4">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-foreground border-b border-border">Home</Link>
          <div className="border-b border-border">
            <p className="py-3 text-sm font-semibold text-foreground">Courses</p>
            <div className="pl-4 pb-2 space-y-1">
              {categories.map(cat => (
                <Link
                  key={cat.slug}
                  to={`/?category=${cat.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-1.5 text-sm text-muted-foreground"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/corporate" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-foreground border-b border-border">Corporate Training</Link>
          <Link to="/blog" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-foreground border-b border-border">Blog</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-foreground border-b border-border">Contact</Link>
          <div className="flex gap-2 mt-4">
            <Button variant="outline" size="sm" className="flex-1 text-sm font-medium gap-1.5">
              <LogIn className="w-4 h-4" /> Login
            </Button>
            <Button size="sm" className="flex-1 bg-primary hover:bg-teal-dark text-primary-foreground text-sm font-semibold gap-1.5">
              <UserPlus className="w-4 h-4" /> Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
