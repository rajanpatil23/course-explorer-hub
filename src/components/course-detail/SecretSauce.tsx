import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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

const SecretSauce = ({ items, courseName }: { items: SecretSauceItem[]; courseName: string }) => (
  <section className="py-10 bg-background">
    <div className="container">
      <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
        Our Secret Sauce for {courseName.split("(")[0].trim()} Success
      </h2>
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {items.map((item, i) => {
            const img = imageMap[item.icon] || sauceGuarantee;
            return (
              <CarouselItem key={i} className="pl-3 basis-1/2 sm:basis-1/3 lg:basis-1/4">
                <div className="bg-card border border-border rounded-xl p-5 text-center hover:shadow-lg transition-shadow h-full flex flex-col items-center">
                  <img
                    src={img}
                    alt={item.title}
                    className="w-20 h-20 object-contain mb-4"
                    loading="lazy"
                    width={80}
                    height={80}
                  />
                  <p className="text-sm font-semibold text-foreground leading-snug">{item.title}</p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="-left-4 bg-card border-border" />
        <CarouselNext className="-right-4 bg-card border-border" />
      </Carousel>
    </div>
  </section>
);

export default SecretSauce;
