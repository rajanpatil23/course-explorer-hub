import { Link, useNavigate } from "react-router-dom";
import { LogIn, UserPlus, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/courses";
import CurrencyToggle from "@/components/CurrencyToggle";
import { useState, useMemo } from "react";

const allCourses = categories.flatMap(c => c.courses);

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const searchResults = useMemo(() => {
    if (searchQuery.trim().length < 2) return [];
    const q = searchQuery.toLowerCase();
    return allCourses.filter(c =>
      c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [searchQuery]);

  return (
    <div className="md:hidden bg-card border-t border-border pb-4 px-4">
      {/* Mobile search */}
      <div className="relative py-3 border-b border-border">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search courses…"
          value={searchQuery}
          onChange={e => { setSearchQuery(e.target.value); setSearchOpen(true); }}
          className="w-full pl-9 pr-8 py-2 rounded-md border border-border bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
        />
        {searchQuery && (
          <button
            onClick={() => { setSearchQuery(""); setSearchOpen(false); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        {searchOpen && searchQuery.trim().length >= 2 && (
          <div className="absolute left-0 right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-lg py-2 max-h-60 overflow-y-auto z-50">
            {searchResults.length > 0 ? searchResults.map(course => (
              <button
                key={course.code}
                onClick={() => { navigate(`/course/${course.slug}`); onClose(); setSearchQuery(""); setSearchOpen(false); }}
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
      <Link to="/" onClick={onClose} className="block py-3 text-sm font-medium text-foreground border-b border-border">Home</Link>
      <div className="border-b border-border">
        <Link to="/courses" onClick={onClose} className="block py-3 text-sm font-semibold text-foreground">All Courses</Link>
        <div className="pl-4 pb-2 space-y-1">
          {categories.map(cat => (
            <Link
              key={cat.slug}
              to={`/${cat.slug}`}
              onClick={onClose}
              className="block py-1.5 text-sm text-muted-foreground"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
      <Link to="/about" onClick={onClose} className="block py-3 text-sm font-medium text-foreground border-b border-border">About</Link>
      <Link to="/blog" onClick={onClose} className="block py-3 text-sm font-medium text-foreground border-b border-border">Blog</Link>
      <Link to="/contact" onClick={onClose} className="block py-3 text-sm font-medium text-foreground border-b border-border">Contact</Link>
      <div className="flex gap-2 mt-4">
        <Link to="/login" onClick={onClose} className="flex-1">
          <Button variant="outline" size="sm" className="w-full text-sm font-medium gap-1.5">
            <LogIn className="w-4 h-4" /> Login
          </Button>
        </Link>
        <Link to="/signup" onClick={onClose} className="flex-1">
          <Button size="sm" className="w-full bg-primary hover:bg-teal-dark text-primary-foreground text-sm font-semibold gap-1.5">
            <UserPlus className="w-4 h-4" /> Sign Up
          </Button>
        </Link>
      </div>
      <div className="flex justify-center pt-2">
        <CurrencyToggle />
      </div>
    </div>
  );
};

export default MobileMenu;
