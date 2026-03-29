import pmiLogo from "@/assets/partners/pmi-logo.png";
import comptiaLogo from "@/assets/partners/comptia-logo.png";
import awsLogo from "@/assets/partners/aws-logo.png";
import microsoftLogo from "@/assets/partners/microsoft-logo.png";
import safeLogo from "@/assets/partners/safe-logo.png";
import isc2Logo from "@/assets/partners/isc2-logo.png";

const logos = [
  { name: "PMI", src: pmiLogo, className: "h-7 md:h-10 w-auto" },
  { name: "CompTIA", src: comptiaLogo, className: "h-8 md:h-12 w-auto" },
  { name: "AWS", src: awsLogo, className: "h-8 md:h-12 w-auto" },
  { name: "Microsoft", src: microsoftLogo, className: "h-8 md:h-12 w-auto" },
  { name: "Scaled Agile", src: safeLogo, className: "h-8 md:h-12 w-auto" },
  { name: "ISC2", src: isc2Logo, className: "h-8 md:h-12 w-auto" },
];

const PartnersStrip = () => (
  <section className="py-8 md:py-14 bg-secondary border-y border-border">
    <div className="container">
      <p className="text-center text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-5 md:mb-8">
        Official Certification Partners
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16">
        {logos.map(l => (
          <img
            key={l.name}
            src={l.src}
            alt={l.name}
            className="h-8 md:h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  </section>
);

export default PartnersStrip;
