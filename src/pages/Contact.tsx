import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitWeb3Form } from "@/lib/web3forms";
import { Mail, Phone, Clock, MessageSquare, Send, ArrowRight, CheckCircle2 } from "lucide-react";

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
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const result = await submitWeb3Form({
      subject: "Contact Page Enquiry",
      name: form.name,
      email: form.email,
      phone: form.phone,
      course_interested: form.course || "Not specified",
      enquiry_type: form.enquiryType || "Not specified",
      message: form.message || "No message provided",
      form_type: "Contact Enquiry",
    });
    if (result.success) {
      toast({ title: "Enquiry Submitted!", description: "Our team will contact you within 24 hours." });
      setForm({ name: "", email: "", phone: "", course: "", enquiryType: "", message: "" });
    } else {
      toast({ title: "Submission failed", description: result.message, variant: "destructive" });
    }
    setSubmitting(false);
  };

  return (
    <div>
      {/* Hero — light theme matching home/about */}
      <section className="relative bg-muted/40 text-foreground overflow-hidden rounded-b-[3rem] md:rounded-b-[8rem] shadow-sm">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-background via-background/80 to-transparent z-[1]" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-background via-background/80 to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-background via-background/80 to-transparent z-[1]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-background via-background/80 to-transparent z-[1]" />
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[180px] z-[2]" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] z-[2]" />

        <div className="container relative z-10 py-10 md:py-24 pb-20 md:pb-36 text-center">
          <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">
            Contact Us
          </p>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl font-extrabold leading-[1.12] mb-3 md:mb-5">
            Let's Start a{" "}
            <span className="text-gradient-primary">Conversation</span>
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Have questions about certifications? Our training advisors are here to help you choose the right path.
          </p>
        </div>
      </section>

      {/* Contact Cards — floating overlap */}
      <section className="relative -mt-12 md:-mt-20 z-20 pb-6">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-3 gap-2 md:gap-6">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="group bg-card border border-border rounded-xl md:rounded-2xl p-3 md:p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <card.icon className="w-4 h-4 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-xs md:text-base mb-0.5 md:mb-1">{card.title}</h3>
                <p className="text-muted-foreground text-[10px] md:text-sm mb-1 md:mb-3 hidden sm:block">{card.desc}</p>
                {card.href ? (
                  <a href={card.href} className="text-[10px] md:text-sm font-semibold text-primary hover:underline break-all">
                    {card.detail}
                  </a>
                ) : (
                  <p className="text-[10px] md:text-sm font-semibold text-primary break-all">{card.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-10 md:py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-8 md:mb-14">
            <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Enquiry Form</p>
            <h2 className="font-heading text-xl md:text-4xl font-bold text-foreground">Send Us Your Query</h2>
            <p className="text-xs md:text-base text-muted-foreground mt-2 md:mt-3 max-w-2xl mx-auto">
              Fill in the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 md:gap-10 items-stretch">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-5 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">Send Your Enquiry</h3>
                    <p className="text-muted-foreground text-sm">We'll respond within one business day.</p>
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
                  <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {submitting ? "Submitting…" : "Submit Enquiry"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar — stretch to match form height */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* What you get */}
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex-1">
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
              <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden flex-1">
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/[0.04] rounded-tl-[3rem] pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="font-heading font-bold text-foreground text-base mb-2">
                    Prefer to talk now?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Call or WhatsApp our advisor for an instant consultation.
                  </p>
                  <Button asChild variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/5">
                    <a href="tel:+918851467220">
                      <Phone className="w-4 h-4 mr-2" />
                      +91 88514 67220
                    </a>
                  </Button>
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
