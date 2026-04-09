import { useCurrency, type Currency } from "@/contexts/CurrencyContext";
import flagUS from "@/assets/flag-us.png";
import flagIN from "@/assets/flag-in.png";

const CurrencyToggle = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex flex-col items-center rounded-l-2xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] overflow-hidden border-2 border-r-0 border-border bg-card">
      {/* USD option */}
      <button
        onClick={() => setCurrency("USD")}
        className={`flex flex-col items-center gap-0.5 px-3 py-3 transition-all duration-200 w-full ${
          currency === "USD"
            ? "bg-primary/10"
            : "hover:bg-muted opacity-50 hover:opacity-80"
        }`}
        aria-label="Show prices in USD"
        title="US Dollar"
      >
        <img src={flagUS} alt="US Flag" className="w-7 h-7 rounded-full object-cover border-2 border-border" />
        <span className={`text-[9px] font-bold tracking-wider ${currency === "USD" ? "text-primary" : "text-muted-foreground"}`}>USD</span>
      </button>

      <div className="w-8 h-[2px] bg-border" />

      {/* INR option */}
      <button
        onClick={() => setCurrency("INR")}
        className={`flex flex-col items-center gap-0.5 px-3 py-3 transition-all duration-200 w-full ${
          currency === "INR"
            ? "bg-primary/10"
            : "hover:bg-muted opacity-50 hover:opacity-80"
        }`}
        aria-label="Show prices in INR"
        title="Indian Rupee"
      >
        <img src={flagIN} alt="India Flag" className="w-7 h-7 rounded-full object-cover border-2 border-border" />
        <span className={`text-[9px] font-bold tracking-wider ${currency === "INR" ? "text-primary" : "text-muted-foreground"}`}>INR</span>
      </button>
    </div>
  );
};

export default CurrencyToggle;
