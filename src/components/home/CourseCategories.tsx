import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import logoPmi from "@/assets/partners/pmi-logo.png";
import logoComptia from "@/assets/partners/comptia-logo.png";
import logoAzure from "@/assets/partners/microsoft-logo.png";
import logoAws from "@/assets/partners/aws-logo.png";
import logoSafe from "@/assets/partners/safe-logo.png";

const categoryCards = [
  {
    title: "PMI Certifications",
    desc: "PMP, CAPM, PMI-ACP, PMI-RMP and more project management credentials.",
    logo: logoPmi,
    slug: "project-management",
  },
  {
    title: "CompTIA Certifications",
    desc: "Security+, Network+, A+, CySA+ and IT infrastructure certifications.",
    logo: logoComptia,
    slug: "cybersecurity",
  },
  {
    title: "Microsoft Azure",
    desc: "AZ-900, AZ-104, AZ-305, AZ-500 and cloud platform certifications.",
    logo: logoAzure,
    slug: "azure",
  },
  {
    title: "AWS Certifications",
    desc: "Cloud Practitioner, Solutions Architect, DevOps and more AWS paths.",
    logo: logoAws,
    slug: "aws",
  },
  {
    title: "SAFe® Agile",
    desc: "Leading SAFe, SSM, POPM, SPC and scaled agile certifications.",
    logo: logoSafe,
    slug: "safe-agile",
  },
];

const CourseCategories = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 1 },
    },
  });

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
    <section id="courses-section" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">
              Explore Courses
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Popular Course Categories
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Browse certifications across the most in-demand domains in technology and management.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-40"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-40"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-5">
            {categoryCards.map((cat) => (
              <div
                key={cat.slug}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_25%] min-w-0 pl-5"
              >
                <Link
                  to={`/courses/category/${cat.slug}`}
                  className="group block h-full"
                >
                  <div className="relative bg-card rounded-2xl border border-border p-6 h-full flex flex-col items-center text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    {/* Inner rounded container for logo */}
                    <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={cat.logo}
                        alt={cat.title}
                        className="w-10 h-10 object-contain"
                        loading="lazy"
                        width={512}
                        height={512}
                      />
                    </div>

                    <h3 className="font-heading font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
