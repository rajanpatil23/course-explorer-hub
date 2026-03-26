import { Phone, MessageCircle, Send } from "lucide-react";

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border shadow-[0_-4px_12px_rgba(0,0,0,0.08)] h-14 flex items-center justify-around px-4">
    <a href="tel:+910000000000" className="flex flex-col items-center gap-0.5">
      <Phone className="w-5 h-5 text-primary" />
      <span className="text-[10px] font-medium text-foreground">Call Advisor</span>
    </a>
    <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-0.5">
      <MessageCircle className="w-5 h-5 text-primary" />
      <span className="text-[10px] font-medium text-foreground">Chat Now</span>
    </a>
    <button className="flex flex-col items-center gap-0.5">
      <Send className="w-5 h-5 text-primary" />
      <span className="text-[10px] font-medium text-foreground">Enquire</span>
    </button>
  </div>
);

export default MobileCTA;
