import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import logoWhite from "@/assets/logo-white.jpg";

const quickLinks = [
  { label: "All Courses", href: "/" },
  { label: "Project Management", href: "/?category=project-management" },
  { label: "Cybersecurity", href: "/?category=cybersecurity" },
  { label: "Microsoft Azure", href: "/?category=azure" },
  { label: "AWS", href: "/?category=aws" },
  { label: "SAFe® Agile", href: "/?category=safe-agile" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    toast({ title: "Subscribed!", description: "You'll receive the latest updates from The EduEdge." });
    setEmail("");
  };

  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="container py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand + contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img src={logoWhite} alt="The EduEdge" className="h-14 w-auto rounded" />
            </Link>
            <p className="text-sm text-hero-foreground/60 leading-relaxed mb-5">
              Accredited certification training for working professionals. Expert-led programs across Project Management, Cybersecurity, Cloud, and Agile.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+918851467220" className="flex items-center gap-2.5 text-sm text-hero-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent shrink-0" /> +91 88514 67220
              </a>
              <a href="mailto:contact@theeduedge.org" className="flex items-center gap-2.5 text-sm text-hero-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent shrink-0" /> contact@theeduedge.org
              </a>
              <div className="flex items-start gap-2.5 text-sm text-hero-foreground/70">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" /> India
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-hero-foreground/90">Courses</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-hero-foreground/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-hero-foreground/90">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-hero-foreground/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + socials */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-hero-foreground/90">Stay Updated</h4>
            <p className="text-sm text-hero-foreground/60 mb-4">Get the latest certification guides, exam tips, and exclusive offers.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                maxLength={255}
                required
                className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/40 text-sm h-10 focus-visible:ring-accent"
              />
              <Button type="submit" size="icon" className="bg-accent hover:bg-primary text-accent-foreground h-10 w-10 shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </form>

            <h4 className="font-heading font-bold text-sm mb-3 text-hero-foreground/90">Follow Us</h4>
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-hero-foreground/10 flex items-center justify-center text-hero-foreground/60 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hero-foreground/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-hero-foreground/40">© 2026 The EduEdge. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-xs text-hero-foreground/40 hover:text-accent transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-hero-foreground/40 hover:text-accent transition-colors">Terms</Link>
            <Link to="/sitemap" className="text-xs text-hero-foreground/40 hover:text-accent transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
