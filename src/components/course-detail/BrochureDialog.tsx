import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Download, CheckCircle2 } from "lucide-react";

interface BrochureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  courseName: string;
  brochureUrl?: string;
}

const BrochureDialog = ({ open, onOpenChange, courseName, brochureUrl }: BrochureDialogProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
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
    // Simulate sending
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleDownload = () => {
    if (brochureUrl) {
      window.open(brochureUrl, "_blank");
    }
    toast({ title: "Download started!", description: "Your brochure is being downloaded." });
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset after animation
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "" });
      setSubmitted(false);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-xl">Download Brochure</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Fill in your details to get the <span className="font-medium text-foreground">{courseName}</span> brochure.
              </p>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-3 mt-2">
              <Input
                placeholder="Full Name"
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                maxLength={100}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                maxLength={255}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number (optional)"
                value={form.phone}
                onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                maxLength={15}
              />
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary hover:bg-teal-dark text-primary-foreground font-semibold"
              >
                {submitting ? "Submitting…" : "Get Brochure"}
              </Button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">Brochure Shared!</h3>
              <p className="text-sm text-muted-foreground mt-1">
                The brochure has been sent to <span className="font-medium text-foreground">{form.email}</span>
              </p>
            </div>
            {brochureUrl && (
              <Button
                onClick={handleDownload}
                className="w-full bg-primary hover:bg-teal-dark text-primary-foreground font-semibold gap-2"
              >
                <Download className="w-4 h-4" />
                Download Now
              </Button>
            )}
            <Button variant="outline" onClick={handleClose} className="w-full">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BrochureDialog;
