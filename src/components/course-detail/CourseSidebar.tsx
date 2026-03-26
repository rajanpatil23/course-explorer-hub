import { useState } from "react";
import { Clock, Award, CheckCircle, Calendar, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import type { Course } from "@/data/courses";

const upcomingBatches = [
  { date: "Apr 12–15, 2026", format: "Live Online", time: "9:00 AM – 5:00 PM IST", seats: 8 },
  { date: "Apr 26–29, 2026", format: "Weekend Batch", time: "10:00 AM – 6:00 PM IST", seats: 12 },
  { date: "May 10–13, 2026", format: "Live Online", time: "9:00 AM – 5:00 PM IST", seats: 15 },
];

const CourseSidebar = ({ course }: { course: Course }) => {
  const { toast } = useToast();
  const [enrollForm, setEnrollForm] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone } = enrollForm;
    if (!name.trim() || name.trim().length > 100) {
      toast({ title: "Invalid name", description: "Please enter a valid name.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    if (phone && !/^\+?[\d\s-]{7,15}$/.test(phone)) {
      toast({ title: "Invalid phone", description: "Please enter a valid phone number.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Enrollment Request Sent!", description: "Our team will contact you within 24 hours." });
      setEnrollForm({ name: "", email: "", phone: "" });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="sticky top-20 space-y-6">
        {/* Pricing card */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-4xl font-extrabold text-foreground">${course.price}</span>
              <span className="text-sm font-medium text-primary">
                {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
              </span>
            </div>
          </div>
          <Button
            size="lg"
            className="w-full bg-primary hover:bg-teal-dark text-primary-foreground font-semibold mb-3"
            onClick={() => document.getElementById("enrollment-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Enroll Now
          </Button>
          <Button variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-teal-light font-semibold">
            Download Brochure
          </Button>
          <div className="mt-5 pt-5 border-t border-border space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />{course.duration}</div>
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" />{course.certification}</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" />First-attempt pass guarantee</div>
          </div>
        </div>

        {/* Schedule */}
        <div id="schedule-section" className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="font-heading font-bold text-lg text-foreground mb-4">Upcoming Batches</h3>
          <div className="space-y-3">
            {upcomingBatches.map((batch, i) => (
              <div key={i} className="border border-border rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground text-sm">{batch.date}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{batch.format} • {batch.time}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{batch.seats} seats left</span>
                  <Button size="sm" className="bg-primary hover:bg-teal-dark text-primary-foreground font-semibold text-xs h-7">
                    Enroll
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enrollment form */}
        <div id="enrollment-form" className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="font-heading font-bold text-lg text-foreground mb-1">Request Enrollment</h3>
          <p className="text-xs text-muted-foreground mb-5">Fill the form and our advisor will contact you within 24 hours.</p>
          <form onSubmit={handleEnroll} className="space-y-3">
            <Input placeholder="Full Name" value={enrollForm.name} onChange={e => setEnrollForm(p => ({ ...p, name: e.target.value }))} maxLength={100} required className="text-sm" />
            <Input type="email" placeholder="Email Address" value={enrollForm.email} onChange={e => setEnrollForm(p => ({ ...p, email: e.target.value }))} maxLength={255} required className="text-sm" />
            <Input type="tel" placeholder="Phone Number (optional)" value={enrollForm.phone} onChange={e => setEnrollForm(p => ({ ...p, phone: e.target.value }))} maxLength={15} className="text-sm" />
            <Button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-teal-dark text-primary-foreground font-semibold">
              {submitting ? "Submitting…" : "Submit Enrollment Request"}
            </Button>
          </form>
        </div>

        {/* Contact */}
        <div className="bg-teal-light rounded-lg p-5 text-center">
          <p className="text-sm font-semibold text-foreground mb-3">Need Help Choosing?</p>
          <div className="space-y-2">
            <a href="tel:+910000000000" className="flex items-center justify-center gap-2 text-sm text-primary font-medium hover:underline">
              <Phone className="w-4 h-4" /> Call an Advisor
            </a>
            <a href="mailto:info@theeduedge.com" className="flex items-center justify-center gap-2 text-sm text-primary font-medium hover:underline">
              <Mail className="w-4 h-4" /> info@theeduedge.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
