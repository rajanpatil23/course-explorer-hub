import { useCurrency, type Currency } from "@/contexts/CurrencyContext";

const flags: Record<Currency, { emoji: string; label: string }> = {
  USD: { emoji: "🇺🇸", label: "USD" },
  INR: { emoji: "🇮🇳", label: "INR" },
};

const CurrencyToggle = () => {
  const { currency, setCurrency } = useCurrency();
  const next: Currency = currency === "USD" ? "INR" : "USD";

  return (
    <button
      onClick={() => setCurrency(next)}
      className="flex flex-col items-center gap-1 px-2 py-3 rounded-l-xl border border-r-0 border-border bg-card/95 backdrop-blur-md shadow-lg hover:bg-muted text-foreground transition-colors"
      aria-label={`Switch to ${next}`}
      title={`Show prices in ${next}`}
    >
      <span className="text-lg leading-none">{flags[currency].emoji}</span>
      <span className="text-[10px] font-bold tracking-wide">{flags[currency].label}</span>
    </button>
  );
};

export default CurrencyToggle;
