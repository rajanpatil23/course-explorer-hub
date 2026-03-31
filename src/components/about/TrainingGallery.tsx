import { useState, useEffect } from "react";
import { Rocket, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/about-gallery-1.jpg";
import gallery2 from "@/assets/about-gallery-2.jpg";
import gallery3 from "@/assets/about-gallery-3.jpg";
import gallery4 from "@/assets/about-gallery-4.jpg";
import gallery5 from "@/assets/about-gallery-5.jpg";

const slides = [
  {
    icon: <Rocket className="w-8 h-8 md:w-10 md:h-10" />,
    label: "Our Mission",
    title: "Empowering Professionals Worldwide",
    body: "To make globally recognized IT certifications accessible, affordable, and achievable — accelerating career growth, organizational impact, and lifelong learning for professionals everywhere.",
    accent: "from-primary to-primary/70",
  },
  {
    icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10" />,
    label: "Our Vision",
    title: "The Most Trusted Training Platform",
    body: "To become the world's most trusted platform for IT certification training — known for quality instruction, exceptional pass rates, and measurable career outcomes that transform lives.",
    accent: "from-accent to-accent/70",
  },
];

const Sparkle = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" fill="currentColor" />
  </svg>
);

const FloatingImg = ({ src, alt, className }: { src: string; alt: string; className: string }) => (
  <div className={`absolute hidden md:block rounded-xl overflow-hidden shadow-2xl border-2 border-primary-foreground/10 ${className}`}>
    <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
  </div>
);

const TrainingGallery = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* 3 elliptical rings intersecting at N, S, E, W */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none" fill="none">
          <ellipse cx="500" cy="300" rx="440" ry="200" stroke="hsl(var(--primary-foreground) / 0.22)" strokeWidth="1.5" transform="rotate(-30 500 300)" />
          <ellipse cx="500" cy="300" rx="440" ry="200" stroke="hsl(var(--primary-foreground) / 0.18)" strokeWidth="1.5" transform="rotate(0 500 300)" />
          <ellipse cx="500" cy="300" rx="440" ry="200" stroke="hsl(var(--primary-foreground) / 0.22)" strokeWidth="1.5" transform="rotate(30 500 300)" />
        </svg>
      </div>

      {/* Sparkles */}
      <Sparkle className="absolute w-4 h-4 md:w-5 md:h-5 text-primary-foreground/40 top-[32%] left-[20%]" />
      <Sparkle className="absolute w-3 h-3 md:w-4 md:h-4 text-primary-foreground/30 top-[18%] right-[30%]" />
      <Sparkle className="absolute w-5 h-5 md:w-6 md:h-6 text-primary-foreground/35 bottom-[22%] right-[38%]" />
      <Sparkle className="absolute w-3 h-3 text-primary-foreground/25 bottom-[30%] left-[32%]" />

      <div className="container relative z-10">
        {/* Tagline */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-primary-foreground/70 text-sm md:text-base font-medium italic">
            More freedom to learn the way you want
          </p>
        </div>

        {/* Gallery layout */}
        <div className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center">
          {/* Corner images */}
          <FloatingImg src={gallery1} alt="Team collaboration" className="top-[4%] left-[4%] w-40 h-28 md:w-48 md:h-32" />
          <FloatingImg src={gallery2} alt="Team discussion" className="top-[4%] right-[4%] w-40 h-28 md:w-48 md:h-32" />
          <FloatingImg src={gallery4} alt="Team celebration" className="bottom-[4%] left-[6%] w-40 h-28 md:w-48 md:h-32" />
          <FloatingImg src={gallery5} alt="Professional at work" className="bottom-[4%] right-[4%] w-40 h-28 md:w-48 md:h-32" />

          {/* Mid-left & mid-right */}
          <FloatingImg src={gallery3} alt="Professional handshake" className="top-[38%] left-[1%] w-36 h-24 md:w-40 md:h-28" />
          <FloatingImg src={gallery1} alt="Teamwork" className="top-[38%] right-[1%] w-36 h-24 md:w-40 md:h-28" />

          {/* Central canvas — realistic laptop/screen look */}
          <div className="relative w-[85%] max-w-md md:max-w-lg">
            {/* Outer bezel — dark frame like a real screen */}
            <div className="rounded-2xl bg-[#1a1a1a] p-[6px] md:p-2 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)]">
              {/* Inner bezel highlight */}
              <div className="rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] p-[2px]">
                {/* Screen area */}
                <div className="rounded-[10px] overflow-hidden relative bg-card">
                  {/* Dotted canvas background */}
                  <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--muted-foreground)) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

                  {/* Slide content */}
                  <div className="relative p-8 md:p-12 min-h-[260px] md:min-h-[300px] flex flex-col items-center justify-center text-center">
                    {/* Decorative gradient corner */}
                    <div className={`absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-bl ${slide.accent} opacity-[0.07] rounded-bl-[4rem] pointer-events-none transition-all duration-700`} />
                    <div className={`absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr ${slide.accent} opacity-[0.05] rounded-tr-[3rem] pointer-events-none transition-all duration-700`} />

                    <div key={`icon-${active}`} className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 animate-fade-in-up">
                      {slide.icon}
                    </div>
                    <span key={`label-${active}`} className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2 animate-fade-in-up">
                      {slide.label}
                    </span>
                    <h3 key={`title-${active}`} className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 animate-fade-in-up">
                      {slide.title}
                    </h3>
                    <p key={`body-${active}`} className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm animate-fade-in-up">
                      {slide.body}
                    </p>
                  </div>

                  {/* Bottom bar with nav */}
                  <div className="flex items-center justify-between px-6 py-3 border-t border-border bg-secondary/50">
                    <button onClick={() => setActive((p) => (p - 1 + slides.length) % slides.length)} className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" aria-label="Previous slide">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2">
                      {slides.map((_, i) => (
                        <button key={i} onClick={() => setActive(i)} className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} aria-label={`Go to slide ${i + 1}`} />
                      ))}
                    </div>
                    <button onClick={() => setActive((p) => (p + 1) % slides.length)} className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" aria-label="Next slide">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stand / chin — like a monitor base */}
            <div className="flex justify-center mt-0">
              <div className="w-16 h-3 md:w-20 md:h-4 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-lg" />
            </div>
            <div className="flex justify-center">
              <div className="w-28 h-[3px] md:w-36 md:h-1 bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent rounded-full" />
            </div>

            {/* Reflection under the screen */}
            <div className="flex justify-center mt-1">
              <div className="w-[70%] h-3 bg-primary-foreground/[0.03] rounded-full blur-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingGallery;
