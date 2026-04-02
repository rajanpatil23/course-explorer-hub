import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { SecretSauceItem } from "@/data/courses";

import sauceGuarantee from "@/assets/sauce-guarantee.png";
import sauceQuestionbank from "@/assets/sauce-questionbank.png";
import sauceSimulator from "@/assets/sauce-simulator.png";
import sauceStudyplan from "@/assets/sauce-studyplan.png";
import sauceSelfpaced from "@/assets/sauce-selfpaced.png";
import sauceAssistance from "@/assets/sauce-assistance.png";

const imageMap: Record<string, string> = {
  "shield-check": sauceGuarantee,
  "book-open": sauceQuestionbank,
  "monitor": sauceSimulator,
  "calendar-check": sauceStudyplan,
  "play-circle": sauceSelfpaced,
  "file-text": sauceAssistance,
  "users": sauceQuestionbank,
  "headphones": sauceSelfpaced,
  "target": sauceGuarantee,
  "code": sauceSimulator,
  "layers": sauceQuestionbank,
  "award": sauceGuarantee,
  "check-circle": sauceGuarantee,
  "globe": sauceStudyplan,
  "settings": sauceSimulator,
  "database": sauceQuestionbank,
  "gift": sauceAssistance,
  "layout": sauceSimulator,
  "zap": sauceGuarantee,
  "brain": sauceStudyplan,
  "bar-chart": sauceSimulator,
  "search": sauceQuestionbank,
  "clipboard": sauceAssistance,
  "briefcase": sauceAssistance,
  "refresh-cw": sauceStudyplan,
};

const SecretSauce = ({ items, courseName }: { items: SecretSauceItem[]; courseName: string }) => {
  // Duplicate items to ensure enough slides for smooth infinite looping
  const loopItems = items.length < 8 ? [...items, ...items] : items;

  return (
    <section className="py-10 bg-background">
      <div className="container">
        <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
          Our Secret Sauce for {courseName.split("(")[0].trim()} Success
        </h2>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
          className="w-full px-12"
        >
          <CarouselContent className="-ml-3">
            {loopItems.map((item, i) => {
              const img = imageMap[item.icon] || sauceGuarantee;
              return (
                <CarouselItem key={i} className="pl-3 basis-1/2 sm:basis-1/3 lg:basis-1/4">
                  <div className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-lg transition-shadow h-full flex flex-col items-center">
                    <img
                      src={img}
                      alt={item.title}
                      className="w-16 h-16 object-contain mb-3"
                      loading="lazy"
                      width={64}
                      height={64}
                    />
                    <p className="text-xs font-semibold text-foreground leading-snug">{item.title}</p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="-left-1 bg-card border-border" />
          <CarouselNext className="-right-1 bg-card border-border" />
        </Carousel>
      </div>
    </section>
  );
};

export default SecretSauce;
