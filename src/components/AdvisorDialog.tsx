import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { submitWeb3Form } from "@/lib/web3forms";
import illustrationCta from "@/assets/illustration-cta.svg";

interface AdvisorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AdvisorDialog = ({ open, onOpenChange }: AdvisorDialogProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ phone: "", email: "" });
  const [whatsapp, setWhatsapp] = useState(true);
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: typeof errors = {};
    if (!form.phone.trim() || !/^\+?[\d\s\-()]{7,15}$/.test(form.phone.trim())) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const result = await submitWeb3Form({
      subject: "Talk to Advisor Request",
      phone: form.phone,
      email: form.email,
      whatsapp_updates: whatsapp ? "Yes" : "No",
      form_type: "Advisor Inquiry",
    });

    if (result.success) {
      toast({ title: "Request sent!", description: "Our advisor will contact you shortly." });
      setForm({ phone: "", email: "" });
      setErrors({});
      onOpenChange(false);
    } else {
      toast({ title: "Submission failed", description: result.message, variant: "destructive" });
    }
    setSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[680px] p-0 overflow-hidden rounded-2xl border-border gap-0">
        <DialogTitle className="sr-only">Talk to an Advisor</DialogTitle>
        <div className="flex flex-col md:flex-row">
          {/* Left — Illustration */}
          <div className="hidden md:flex w-[45%] bg-secondary/50 items-center justify-center p-8">
            <img
              src={illustrationCta}
              alt="Learning illustration"
              className="w-full max-w-[220px] object-contain"
            />
          </div>

          {/* Right — Form */}
          <div className="flex-1 p-6 md:p-8">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-1">
              Talk to an Advisor
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Get expert guidance on the right certification for your career.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">
                    🇮🇳 +91
                  </span>
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={e => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: undefined }); }}
                    className={`pl-16 h-12 text-sm ${errors.phone ? "border-destructive ring-1 ring-destructive/30" : ""}`}
                  />
                </div>
                {errors.phone && (
                  <p className="flex items-center gap-1.5 mt-1.5 text-xs text-destructive animate-fade-in">
                    <span className="w-4 h-4 rounded-full bg-destructive/10 flex items-center justify-center text-[10px] font-bold">!</span>
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
                  className={`h-12 text-sm ${errors.email ? "border-destructive ring-1 ring-destructive/30" : ""}`}
                />
                {errors.email && (
                  <p className="flex items-center gap-1.5 mt-1.5 text-xs text-destructive animate-fade-in">
                    <span className="w-4 h-4 rounded-full bg-destructive/10 flex items-center justify-center text-[10px] font-bold">!</span>
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="whatsapp"
                  checked={whatsapp}
                  onCheckedChange={(v) => setWhatsapp(v === true)}
                  className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label htmlFor="whatsapp" className="text-sm text-muted-foreground cursor-pointer">
                  I want to receive updates directly on WhatsApp
                </label>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full h-12 bg-primary hover:bg-teal-dark text-primary-foreground font-semibold text-sm"
              >
                {submitting ? "Submitting…" : "Get in Touch"}
              </Button>

              <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                By submitting, you agree to The EduEdge{" "}
                <Link to="/privacy" className="text-primary font-medium hover:underline" onClick={() => onOpenChange(false)}>Privacy Policy</Link>
                {" "}and{" "}
                <Link to="/terms" className="text-primary font-medium hover:underline" onClick={() => onOpenChange(false)}>Terms & Conditions</Link>
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdvisorDialog;
