import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import trainerSatyavrat from "@/assets/trainers/trainer-satyavrat.png";
import trainerSmitha from "@/assets/trainers/trainer-smitha.png";
import trainerPratap from "@/assets/trainers/trainer-pratap.png";
import trainerJulie from "@/assets/trainers/trainer-julie.png";
import trainerDavid from "@/assets/trainers/trainer-david.png";

const trainers = [
  { name: "Satyavrat Nirala", title: "Agile & Change Management Coach", tagline: "14+ years | 2,000+ pros trained", workedWith: ["Scrum Alliance", "Fortune 500"], image: trainerSatyavrat },
  { name: "Smitha K", title: "Behavioral Science & Change Facilitator", tagline: "20+ years | Behavioral Science Expert", workedWith: ["Capgemini", "Toyota", "SAP"], image: trainerSmitha },
  { name: "Pratap Kumar", title: "Change Transformation Practitioner", tagline: "8+ years | 2,000+ people trained", workedWith: ["Enterprise Teams", "Multi-org"], image: trainerPratap },
  { name: "Julie Dungate", title: "APMG Accredited Change Trainer", tagline: "11+ years L&D | 20+ years Military", workedWith: ["Royal Air Force", "UK Finance"], image: trainerJulie },
  { name: "Dr. David Griffiths", title: "Executive Change & Leadership Coach", tagline: "125+ engagements | 17 countries", workedWith: ["Global Fortune", "AICPA"], image: trainerDavid },
];

const TrainerCard = ({ t, i }: { t: typeof trainers[0]; i: number }) => {
  const isOdd = i % 2 !== 0;
  return (
    <div className={`${isOdd ? "sm:mt-16" : ""}`}>
      <div
        className="group relative rounded-t-[2.5rem] rounded-b-[50%_20%] border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
        style={{
          background:
            i % 2 === 0
              ? "linear-gradient(180deg, hsl(180 20% 96%) 0%, hsl(182 40% 85%) 40%, hsl(182 98% 22%) 100%)"
              : "linear-gradient(180deg, hsl(180 20% 96%) 0%, hsl(183 45% 80%) 40%, hsl(183 99% 32%) 100%)",
        }}
      >
        <div className="mx-3 mt-3 rounded-2xl bg-background p-4 md:p-5 text-center shadow-sm">
          <h3 className="font-heading font-bold text-foreground text-base md:text-lg leading-tight">{t.name}</h3>
          <p className="text-primary text-xs md:text-sm font-medium mt-1">{t.title}</p>
          <p className="text-[10px] md:text-[11px] text-muted-foreground mt-4 md:mt-5 mb-2 font-semibold">Has worked with</p>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {t.workedWith.map((company) => (
              <span key={company} className="text-[11px] md:text-xs font-bold text-foreground/80">{company}</span>
            ))}
          </div>
        </div>
        <div className="relative h-48 md:h-60 mt-auto flex items-end justify-center overflow-hidden">
          <img src={t.image} alt={t.name} className="relative z-10 w-40 md:w-48 h-44 md:h-56 object-cover object-top" loading="lazy" width={512} height={640} />
        </div>
      </div>
    </div>
  );
};

const TrainersSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="py-12 md:py-24 bg-secondary overflow-hidden rounded-t-[3rem] md:rounded-t-[8rem]">
      <div className="container relative">
        {/* Grid pattern */}
        <div className="absolute inset-0 -inset-x-8 -inset-y-8">
          <div
            className="w-full h-full opacity-[0.07]"
            style={{
              backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage: "radial-gradient(ellipse 70% 60% at center, black 30%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at center, black 30%, transparent 70%)",
            }}
          />
        </div>

        <p className="relative text-center text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Our Trainers</p>
        <h2 className="relative font-heading text-2xl md:text-4xl font-bold text-center text-foreground mb-3 md:mb-4">
          Learn from Industry-Leading Experts
        </h2>
        <p className="relative text-center text-sm md:text-base text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto">
          Our trainers hold active certifications and bring 15+ years of real-world experience to every session.
        </p>

        {/* Mobile: Carousel */}
        <div className="relative lg:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {trainers.map((t, i) => (
                <div key={t.name} className="flex-[0_0_70%] sm:flex-[0_0_48%] min-w-0 pl-4">
                  <TrainerCard t={t} i={0} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-40"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop: Staggered grid */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          <div className="relative flex items-start justify-center gap-5">
            {trainers.map((t, i) => (
              <div key={t.name} className={`w-[18.5%] ${i % 2 !== 0 ? "mt-16" : ""}`}>
                <TrainerCard t={t} i={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
