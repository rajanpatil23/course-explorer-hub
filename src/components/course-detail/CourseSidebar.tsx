import { useState } from "react";
import { Clock, Award, CheckCircle, Calendar, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { Course } from "@/data/courses";
import BrochureDialog from "./BrochureDialog";

const upcomingBatches = [
  { date: "Apr 12–15, 2026", format: "Live Online", time: "9:00 AM – 5:00 PM IST", seats: 8 },
  { date: "Apr 26–29, 2026", format: "Weekend Batch", time: "10:00 AM – 6:00 PM IST", seats: 12 },
  { date: "May 10–13, 2026", format: "Live Online", time: "9:00 AM – 5:00 PM IST", seats: 15 },
];

type FormData = { name: string; email: string; phone: string };

const EnrollmentForm = ({
  course,
  batch,
  onClose,
}: {
  course: Course;
  batch: (typeof upcomingBatches)[number] | null;
  onClose: () => void;
}) => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone } = form;
    if (!name.trim() || name.trim().length > 100) {
      toast({ title: "Invalid name", description: "Please enter a valid name.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      toast({ title: "Invalid email", description: "Please enter a valid email.", variant: "destructive" });
      return;
    }
    if (phone && !/^\+?[\d\s-]{7,15}$/.test(phone)) {
      toast({ title: "Invalid phone", description: "Please enter a valid phone number.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    const batchInfo = batch
      ? `\nPreferred Batch: ${batch.date} (${batch.format}, ${batch.time})`
      : "\nNo specific batch selected";
    const subject = encodeURIComponent(`Enrollment Inquiry – ${course.name}`);
    const body = encodeURIComponent(
      `Hi EduEdge Team,\n\nI would like to enroll in the following course:\n\nCourse: ${course.name}\nCourse Code: ${course.code}${batchInfo}\n\nMy Details:\nName: ${name.trim()}\nEmail: ${email.trim()}${phone ? `\nPhone: ${phone.trim()}` : ""}\n\nPlease share next steps.\n\nThank you.`
    );
    window.open(`mailto:contact@theeduedge.org?subject=${subject}&body=${body}`, "_self");

    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Enrollment Request Opened!", description: "Your email client should open with the inquiry." });
      setForm({ name: "", email: "", phone: "" });
      onClose();
    }, 1000);
  };

  return (
    <div className="mt-4 pt-4 border-t border-border">
      {batch && (
        <div className="mb-3 p-2.5 rounded-md bg-primary/5 border border-primary/20">
          <p className="text-xs font-semibold text-primary mb-0.5">Selected Batch</p>
          <p className="text-sm text-foreground font-medium">{batch.date}</p>
          <p className="text-xs text-muted-foreground">{batch.format} • {batch.time}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input placeholder="Full Name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} maxLength={100} required className="text-sm" />
        <Input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} maxLength={255} required className="text-sm" />
        <Input type="tel" placeholder="Phone (optional)" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} maxLength={15} className="text-sm" />
        <Button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-teal-dark text-primary-foreground font-semibold text-sm">
          {submitting ? "Submitting…" : "Submit Enrollment Request"}
        </Button>
      </form>
    </div>
  );
};

const CourseSidebar = ({ course }: { course: Course }) => {
  // Card 1 state
  const [enrollStep, setEnrollStep] = useState<"idle" | "select">("idle");
  const [enrollBatchIdx, setEnrollBatchIdx] = useState<number | null>(null);

  // Card 2 state
  const [card2SelectedBatch, setCard2SelectedBatch] = useState<number | null>(null);
  const [card2ShowForm, setCard2ShowForm] = useState(false);

  // Card 3 state (general enquiry - no batch)
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [batchesOpen, setBatchesOpen] = useState(false);

  return (
    <div className="h-full">
      <div className="sticky top-20 space-y-4 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin pr-1">

        {/* Card 1: Pricing + Quick Enroll */}
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

          {enrollStep === "idle" && (
            <>
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-teal-dark text-primary-foreground font-semibold mb-3"
                onClick={() => setEnrollStep("select")}
              >
                Enroll Now
              </Button>
              {course.brochureUrl ? (
                <Button
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  onClick={() => window.open(course.brochureUrl, "_blank")}
                >
                  Download Brochure
                </Button>
              ) : (
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Download Brochure
                </Button>
              )}
            </>
          )}

          {enrollStep === "select" && enrollBatchIdx === null && (
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Select a batch to enroll:</p>
              {upcomingBatches.map((batch, i) => (
                <div
                  key={i}
                  className="border border-border hover:border-primary/40 rounded-lg p-3 cursor-pointer transition-all duration-200"
                  onClick={() => setEnrollBatchIdx(i)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-foreground text-sm">{batch.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{batch.format} • {batch.time}</p>
                  <p className="text-xs text-muted-foreground mt-1">{batch.seats} seats left</p>
                </div>
              ))}
              <button
                type="button"
                className="flex items-center gap-1 mt-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                onClick={() => setEnrollStep("idle")}
              >
                <ChevronDown className="w-3 h-3 rotate-90" />
                Back
              </button>
            </div>
          )}

          {enrollStep === "select" && enrollBatchIdx !== null && (
            <div>
              <EnrollmentForm
                course={course}
                batch={upcomingBatches[enrollBatchIdx]}
                onClose={() => { setEnrollStep("idle"); setEnrollBatchIdx(null); }}
              />
              <button
                type="button"
                className="flex items-center gap-1 mt-3 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                onClick={() => setEnrollBatchIdx(null)}
              >
                <ChevronDown className="w-3 h-3 rotate-90" />
                Change batch
              </button>
            </div>
          )}

          <div className="mt-5 pt-5 border-t border-border space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />{course.duration}</div>
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" />{course.certification}</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" />First-attempt pass guarantee</div>
          </div>
        </div>

        {/* Card 2: Upcoming Batches (Collapsible) */}
        <Collapsible open={batchesOpen} onOpenChange={setBatchesOpen}>
          <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
            <CollapsibleTrigger className="w-full flex items-center justify-between p-5 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <h3 className="font-heading font-bold text-base text-foreground">Upcoming Batches</h3>
              </div>
              <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${batchesOpen ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-5 pb-5 space-y-3">
                {!card2ShowForm ? (
                  <>
                    {upcomingBatches.map((batch, i) => (
                      <div
                        key={i}
                        className={`border rounded-lg p-3 cursor-pointer transition-all duration-200 ${
                          card2SelectedBatch === i
                            ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                            : "border-border hover:border-primary/40"
                        }`}
                        onClick={() => setCard2SelectedBatch(card2SelectedBatch === i ? null : i)}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-foreground text-sm">{batch.date}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{batch.format} • {batch.time}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{batch.seats} seats left</span>
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-teal-dark text-primary-foreground font-semibold text-xs h-7"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCard2SelectedBatch(i);
                              setCard2ShowForm(true);
                            }}
                          >
                            Enroll
                          </Button>
                        </div>
                      </div>
                    ))}
                  </>
                ) : card2SelectedBatch !== null ? (
                  <div>
                    <EnrollmentForm
                      course={course}
                      batch={upcomingBatches[card2SelectedBatch]}
                      onClose={() => { setCard2ShowForm(false); setCard2SelectedBatch(null); }}
                    />
                    <button
                      type="button"
                      className="flex items-center gap-1 mt-3 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                      onClick={() => { setCard2ShowForm(false); setCard2SelectedBatch(null); }}
                    >
                      <ChevronDown className="w-3 h-3 rotate-90" />
                      Change batch
                    </button>
                  </div>
                ) : null}
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>

        {/* Card 3: General Enquiry */}
        <div className="bg-teal-light rounded-lg p-5">
          <p className="text-sm font-semibold text-foreground mb-3 text-center">Need Help Choosing?</p>
          {!showEnquiryForm ? (
            <div className="space-y-2 text-center">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-sm font-medium"
                onClick={() => setShowEnquiryForm(true)}
              >
                <Mail className="w-4 h-4 mr-2" /> Send an Enquiry
              </Button>
              <a href="tel:+910000000000" className="flex items-center justify-center gap-2 text-sm text-primary font-medium hover:underline">
                <Phone className="w-4 h-4" /> Call an Advisor
              </a>
            </div>
          ) : (
            <EnrollmentForm
              course={course}
              batch={null}
              onClose={() => setShowEnquiryForm(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
