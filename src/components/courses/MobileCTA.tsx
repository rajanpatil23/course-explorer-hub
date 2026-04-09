import { useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";
import { useContactInfo } from "@/hooks/useContactInfo";
import AdvisorDialog from "@/components/AdvisorDialog";

const MobileCTA = () => {
  const contact = useContactInfo();
  const [advisorOpen, setAdvisorOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border shadow-[0_-4px_12px_rgba(0,0,0,0.08)] h-14 flex items-center justify-around px-4">
        <a href={contact.phoneHref} className="flex flex-col items-center gap-0.5">
          <Phone className="w-5 h-5 text-primary" />
          <span className="text-[10px] font-medium text-foreground">Call Advisor</span>
        </a>
        <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-0.5">
          <MessageCircle className="w-5 h-5 text-primary" />
          <span className="text-[10px] font-medium text-foreground">Chat Now</span>
        </a>
        <button className="flex flex-col items-center gap-0.5" onClick={() => setAdvisorOpen(true)}>
          <Send className="w-5 h-5 text-primary" />
          <span className="text-[10px] font-medium text-foreground">Enquire</span>
        </button>
      </div>
      <AdvisorDialog open={advisorOpen} onOpenChange={setAdvisorOpen} />
    </>
  );
};

export default MobileCTA;
