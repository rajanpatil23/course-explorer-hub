import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Professionals Trained" },
  { value: 50, suffix: "+", label: "Certification Programs" },
  { value: 98, suffix: "%", label: "First-Attempt Pass Rate" },
  { value: 4.8, suffix: "/5", label: "Average Rating", decimals: 1 },
  { value: 30, suffix: "+", label: "Countries Served" },
];

function useCountUp(target: number, duration = 2000, decimals = 0, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(parseFloat(start.toFixed(decimals)));
      }
    }, 16);
    return () => clearInterval(id);
  }, [trigger, target, duration, decimals]);
  return count;
}

const StatItem = ({ stat, visible }: { stat: typeof stats[0]; visible: boolean }) => {
  const count = useCountUp(stat.value, 2000, (stat as any).decimals || 0, visible);
  return (
    <div className="text-center">
      <div className="font-heading text-2xl md:text-4xl font-semibold text-primary-foreground">
        {(stat as any).decimals ? count.toFixed((stat as any).decimals) : Math.floor(count).toLocaleString()}
        <span className="text-primary-foreground">{stat.suffix}</span>
      </div>
      <p className="text-[10px] md:text-sm text-primary-foreground/70 mt-1 font-medium">{stat.label}</p>
    </div>
  );
};

const StatsStrip = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-20 -mt-14 md:-mt-24 mb-12 md:mb-24">
      <div className="container">
        <div className="relative max-w-5xl mx-auto border border-primary/30 rounded-2xl bg-primary px-4 py-6 md:px-10 md:py-10 shadow-lg overflow-hidden">
          {/* Decorative — concentric rings */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border-2 border-primary/10 z-0" />
          <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full border border-primary/15 z-0" />
          <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full border-2 border-accent/10 z-0" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border border-accent/15 z-0" />
          {/* Diagonal dashes */}
          <div className="absolute top-3 right-12 w-8 h-[2px] bg-primary/20 rotate-45 z-0" />
          <div className="absolute top-6 right-16 w-5 h-[2px] bg-primary/15 rotate-45 z-0" />
          <div className="absolute bottom-4 left-14 w-8 h-[2px] bg-accent/20 -rotate-45 z-0" />
          <div className="absolute bottom-7 left-10 w-5 h-[2px] bg-accent/15 -rotate-45 z-0" />
          {/* Soft glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-20 rounded-full bg-primary/5 blur-[80px] z-0" />
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 relative z-10">
            {stats.map((s, i) => (
              <div key={i} className={i >= 3 ? "hidden lg:block" : ""}>
                <StatItem stat={s} visible={visible} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
