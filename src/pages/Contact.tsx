import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, MessageSquare, Send, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "Email Us",
    desc: "Drop us an email and we'll respond within 24 hours.",
    detail: "contact@theeduedge.org",
    href: "mailto:contact@theeduedge.org",
  },
  {
    icon: Phone,
    title: "Call / WhatsApp",
    desc: "Speak directly with our training advisors.",
    detail: "+91 88514 67220",
    href: "tel:+918851467220",
  },
  {
    icon: Clock,
    title: "Business Hours",
    desc: "We're available during the following hours.",
    detail: "Mon – Sat, 9 AM – 7 PM IST",
    href: null,
  },
];

const benefits = [
  "Free course consultation",
  "Custom corporate training plans",
  "Response within 24 hours",
  "No-obligation assessment",
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", enquiryType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Enquiry Submitted!", description: "Our team will contact you within 24 hours." });
    setForm({ name: "", email: "", phone: "", course: "", enquiryType: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 py-16 md:py-24 text-center max-w-3xl">
          <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-5">
            <Headphones className="w-7 h-7 text-primary" />
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-hero-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-hero-foreground/70 max-w-xl mx-auto">
            Have questions about certifications? Our training advisors are here to help you choose the right path.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Cards */}
      <section className="relative -mt-8 z-20 pb-6">
        <div className="container max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="group bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <card.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-base mb-1">{card.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{card.desc}</p>
                {card.href ? (
                  <a href={card.href} className="text-sm font-semibold text-primary hover:underline">
                    {card.detail}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-primary">{card.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-foreground">Send Your Enquiry</h2>
                    <p className="text-muted-foreground text-sm">Fill in the form and we'll get back to you shortly.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Phone Number *"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                    <Select value={form.course} onValueChange={(v) => setForm({ ...form, course: v })}>
                      <SelectTrigger><SelectValue placeholder="Course Interested In" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pmi">PMI Certifications</SelectItem>
                        <SelectItem value="comptia">CompTIA Certifications</SelectItem>
                        <SelectItem value="microsoft">Microsoft Azure</SelectItem>
                        <SelectItem value="aws">AWS Certifications</SelectItem>
                        <SelectItem value="safe">SAFe® Agile</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Select value={form.enquiryType} onValueChange={(v) => setForm({ ...form, enquiryType: v })}>
                    <SelectTrigger><SelectValue placeholder="Enquiry Type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual Training</SelectItem>
                      <SelectItem value="corporate">Corporate Training</SelectItem>
                      <SelectItem value="general">General Query</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Tell us more about your requirements..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Enquiry
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* What you get */}
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-foreground text-base mb-4">What You'll Get</h3>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick CTA */}
              <div className="bg-hero rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full blur-2xl" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-heading font-bold text-hero-foreground text-base mb-2">
                    Prefer to talk now?
                  </h3>
                  <p className="text-hero-foreground/70 text-sm mb-4">
                    Call or WhatsApp our advisor for an instant consultation.
                  </p>
                  <Button asChild variant="outline" size="sm" className="border-primary text-primary bg-primary/10 hover:bg-primary/20">
                    <a href="tel:+918851467220">
                      <Phone className="w-4 h-4 mr-2" />
                      +91 88514 67220
                    </a>
                  </Button>
                </div>
              </div>

              {/* Social links */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-heading font-bold text-foreground text-base mb-3">Follow Us</h3>
                <div className="flex flex-wrap gap-2">
                  {["LinkedIn", "Instagram", "Facebook", "YouTube"].map((s) => (
                    <span
                      key={s}
                      className="inline-block text-xs font-semibold bg-secondary text-muted-foreground px-3 py-1.5 rounded-full hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </div>
  );
};

export default Contact;
