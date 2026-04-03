import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/courses";
import logoFull from "@/assets/logo-full.jpg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="shrink-0">
          <img src={logoFull} alt="The EduEdge" className="h-14 md:h-16 w-auto" />
        </Link>

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
                      to={`/courses/category/${cat.slug}`}
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
          <Link to="/login">
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
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-foreground border-b border-border">Home</Link>
          <div className="border-b border-border">
            <Link to="/courses" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-semibold text-foreground">All Courses</Link>
            <div className="pl-4 pb-2 space-y-1">
              {categories.map(cat => (
                <Link
                  key={cat.slug}
                  to={`/courses/category/${cat.slug}`}
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
            <Link to="/login" onClick={() => setMobileOpen(false)} className="flex-1">
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
