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
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border bg-muted/50 hover:bg-muted text-sm font-medium text-foreground transition-colors"
      aria-label={`Switch to ${next}`}
      title={`Show prices in ${next}`}
    >
      <span className="text-base leading-none">{flags[currency].emoji}</span>
      <span className="text-xs font-semibold">{flags[currency].label}</span>
    </button>
  );
};

export default CurrencyToggle;
