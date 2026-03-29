import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

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
    <div className="min-h-screen">

      <section className="bg-gradient-to-br from-primary/10 via-secondary to-background py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Contact Us</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground">Have questions? Our team is here to help you choose the right certification path.</p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-5 gap-10">
            {/* Form */}
            <div className="md:col-span-3">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6">Send Your Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <Input type="email" placeholder="Email Address *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <Input placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                <Select value={form.course} onValueChange={(v) => setForm({ ...form, course: v })}>
                  <SelectTrigger><SelectValue placeholder="Course Interested In" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pmi">PMI</SelectItem>
                    <SelectItem value="comptia">CompTIA</SelectItem>
                    <SelectItem value="microsoft">Microsoft</SelectItem>
                    <SelectItem value="aws">AWS</SelectItem>
                    <SelectItem value="safe">SAFe</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={form.enquiryType} onValueChange={(v) => setForm({ ...form, enquiryType: v })}>
                  <SelectTrigger><SelectValue placeholder="Enquiry Type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual Training</SelectItem>
                    <SelectItem value="corporate">Corporate Training</SelectItem>
                    <SelectItem value="general">General Query</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                <Button type="submit" className="w-full">Send Your Enquiry</Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">Contact Details</h2>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <a href="mailto:contact@theeduedge.org" className="text-sm text-muted-foreground hover:text-primary">contact@theeduedge.org</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Phone / WhatsApp</p>
                    <a href="tel:+918851467220" className="text-sm text-muted-foreground hover:text-primary">+91 88514 67220</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Monday – Saturday, 9:00 AM – 7:00 PM IST</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Social Media</p>
                    <div className="flex gap-3 mt-1 text-sm text-muted-foreground">
                      <span>LinkedIn</span>
                      <span>Instagram</span>
                      <span>Facebook</span>
                      <span>YouTube</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
