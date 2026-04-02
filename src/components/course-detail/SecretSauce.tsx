import { ShieldCheck, BookOpen, Monitor, CalendarCheck, PlayCircle, FileText, Users, Headphones, Target, Code, Layers, Award, CheckCircle, Globe, Settings, AlertTriangle, Database, Gift, Layout, Zap, GitBranch, Activity, Brain, BarChart, Search, Clipboard, Eye, List, Map, DollarSign, Briefcase, RefreshCw, Train } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { SecretSauceItem } from "@/data/courses";

const iconMap: Record<string, React.ElementType> = {
  "shield-check": ShieldCheck, "book-open": BookOpen, "monitor": Monitor, "calendar-check": CalendarCheck,
  "play-circle": PlayCircle, "file-text": FileText, "users": Users, "headphones": Headphones,
  "target": Target, "code": Code, "layers": Layers, "award": Award, "check-circle": CheckCircle,
  "globe": Globe, "settings": Settings, "alert-triangle": AlertTriangle, "database": Database,
  "gift": Gift, "layout": Layout, "zap": Zap, "git-branch": GitBranch, "activity": Activity,
  "brain": Brain, "bar-chart": BarChart, "search": Search, "clipboard": Clipboard, "eye": Eye,
  "list": List, "map": Map, "dollar-sign": DollarSign, "briefcase": Briefcase,
  "refresh-cw": RefreshCw, "train": Train, "ticket": Award, "terminal": Code, "presentation": BookOpen,
  "building": Layout, "arrow-right-left": GitBranch,
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
            const Icon = iconMap[item.icon] || CheckCircle;
            return (
              <CarouselItem key={i} className="pl-3 basis-1/2 sm:basis-1/3 lg:basis-1/4">
                <div className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow h-full">
                  <div className="w-12 h-12 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs font-semibold text-foreground leading-snug">{item.title}</p>
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
