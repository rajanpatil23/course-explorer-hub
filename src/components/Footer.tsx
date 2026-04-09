import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { submitWeb3Form } from "@/lib/web3forms";
import logoWhite from "@/assets/logo-white.jpg";
import { useContactInfo } from "@/hooks/useContactInfo";

const quickLinks = [
  { label: "All Courses", href: "/courses" },
  { label: "Project Management", href: "/project-management" },
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "Microsoft Azure", href: "/azure" },
  { label: "AWS", href: "/aws" },
  { label: "SAFe® Agile", href: "/safe-agile" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/the-edu-edge/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/theeduedge", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/share/18hSZ3AsYC/", label: "Facebook" },
];

const FooterAccordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Mobile: collapsible */}
      <div className="sm:hidden border-b border-hero-foreground/10">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-3 text-left"
        >
          <h4 className="font-heading font-bold text-sm text-hero-foreground/90">{title}</h4>
          <ChevronDown className={`w-4 h-4 text-hero-foreground/50 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 pb-3" : "max-h-0"}`}>
          {children}
        </div>
      </div>
      {/* Desktop: always open */}
      <div className="hidden sm:block">
        <h4 className="font-heading font-bold text-sm mb-3 text-hero-foreground/90">{title}</h4>
        {children}
      </div>
    </>
  );
};
const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const contact = useContactInfo();

  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    setSubscribing(true);
    const result = await submitWeb3Form({
      subject: "Newsletter Subscription",
      email: email.trim(),
      form_type: "Newsletter",
    });
    if (result.success) {
      toast({ title: "Subscribed!", description: "You'll receive the latest updates from The EduEdge." });
      setEmail("");
    } else {
      toast({ title: "Subscription failed", description: result.message, variant: "destructive" });
    }
    setSubscribing(false);
  };

  return (
    <footer className="bg-hero text-hero-foreground pb-16 md:pb-0">
      <div className="container py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand + contact */}
          <div className="sm:col-span-2 lg:col-span-1 text-center md:text-left">
            <Link to="/" className="inline-block mb-4">
              <img src={logoWhite} alt="The EduEdge" className="h-12 md:h-14 w-auto rounded mx-auto md:mx-0" />
            </Link>
            <p className="text-sm text-hero-foreground/60 leading-relaxed mb-4 max-w-xs mx-auto md:mx-0">
              Accredited certification training for working professionals.
            </p>
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href={contact.phoneHref} className="flex items-center gap-2 text-sm text-hero-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent shrink-0" /> {contact.phone}
              </a>
              <a href="mailto:info@theeduedge.org" className="flex items-center gap-2 text-sm text-hero-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent shrink-0" /> info@theeduedge.org
              </a>
              <div className="flex items-center gap-2 text-sm text-hero-foreground/70">
                <MapPin className="w-4 h-4 text-accent shrink-0" /> India
              </div>
            </div>
          </div>

          {/* Quick links + Company — side by side on mobile */}
          <div className="grid grid-cols-1 gap-0 sm:contents">
            <FooterAccordion title="Courses">
              <ul className="space-y-2">
                {quickLinks.map(link => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-hero-foreground/60 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordion>

            <FooterAccordion title="Company">
              <ul className="space-y-2">
                {companyLinks.map(link => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-hero-foreground/60 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordion>
          </div>

          {/* Newsletter + socials */}
          <div className="text-center md:text-left">
            <h4 className="font-heading font-bold text-sm mb-3 text-hero-foreground/90">Stay Updated</h4>
            <p className="text-sm text-hero-foreground/60 mb-3">Get the latest certification guides, exam tips, and exclusive offers.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2 mb-5 max-w-xs mx-auto md:mx-0">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                maxLength={255}
                required
                className="bg-hero-foreground/10 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/40 text-sm h-10 focus-visible:ring-accent"
              />
              <Button type="submit" size="icon" className="bg-accent hover:bg-primary text-accent-foreground h-10 w-10 shrink-0" disabled={subscribing}>
                <Send className="w-4 h-4" />
              </Button>
            </form>

            <h4 className="font-heading font-bold text-sm mb-3 text-hero-foreground/90">Follow Us</h4>
            <div className="flex gap-3 justify-center md:justify-start">
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
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
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
