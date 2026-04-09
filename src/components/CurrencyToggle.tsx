import { useCurrency, type Currency } from "@/contexts/CurrencyContext";
import flagUS from "@/assets/flag-us.png";
import flagIN from "@/assets/flag-in.png";

const CurrencyToggle = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex flex-col items-center bg-card/95 backdrop-blur-md border border-r-0 border-border rounded-l-2xl shadow-xl overflow-hidden">
      {/* USD option */}
      <button
        onClick={() => setCurrency("USD")}
        className={`flex flex-col items-center gap-0.5 px-2.5 py-2.5 transition-all duration-200 w-full ${
          currency === "USD"
            ? "bg-primary/10 ring-inset ring-2 ring-primary/30"
            : "hover:bg-muted/60 opacity-50 hover:opacity-80"
        }`}
        aria-label="Show prices in USD"
        title="US Dollar"
      >
        <img src={flagUS} alt="US Flag" className="w-7 h-7 rounded-full object-cover ring-1 ring-border" />
        <span className={`text-[9px] font-bold tracking-wider ${currency === "USD" ? "text-primary" : "text-muted-foreground"}`}>USD</span>
      </button>

      <div className="w-6 h-px bg-border" />

      {/* INR option */}
      <button
        onClick={() => setCurrency("INR")}
        className={`flex flex-col items-center gap-0.5 px-2.5 py-2.5 transition-all duration-200 w-full ${
          currency === "INR"
            ? "bg-primary/10 ring-inset ring-2 ring-primary/30"
            : "hover:bg-muted/60 opacity-50 hover:opacity-80"
        }`}
        aria-label="Show prices in INR"
        title="Indian Rupee"
      >
        <img src={flagIN} alt="India Flag" className="w-7 h-7 rounded-full object-cover ring-1 ring-border" />
        <span className={`text-[9px] font-bold tracking-wider ${currency === "INR" ? "text-primary" : "text-muted-foreground"}`}>INR</span>
      </button>
    </div>
  );
};

export default CurrencyToggle;
