import pmiLogo from "@/assets/partners/pmi-logo.png";
import comptiaLogo from "@/assets/partners/comptia-logo.png";
import awsLogo from "@/assets/partners/aws-logo.png";
import microsoftLogo from "@/assets/partners/microsoft-logo.png";
import safeLogo from "@/assets/partners/safe-logo.png";
import isc2Logo from "@/assets/partners/isc2-logo.png";

const logos = [
  { name: "PMI", src: pmiLogo, imageClassName: "max-h-6 md:max-h-8 max-w-[3.5rem] md:max-w-[5rem]" },
  { name: "CompTIA", src: comptiaLogo, imageClassName: "max-h-8 md:max-h-10 max-w-[6.5rem] md:max-w-[8rem]" },
  { name: "AWS", src: awsLogo, imageClassName: "max-h-8 md:max-h-10 max-w-[6.5rem] md:max-w-[8rem]" },
  { name: "Microsoft", src: microsoftLogo, imageClassName: "max-h-8 md:max-h-10 max-w-[6.5rem] md:max-w-[8rem]" },
  { name: "Scaled Agile", src: safeLogo, imageClassName: "max-h-8 md:max-h-10 max-w-[6.5rem] md:max-w-[8rem]" },
  { name: "ISC2", src: isc2Logo, imageClassName: "max-h-8 md:max-h-10 max-w-[6.5rem] md:max-w-[8rem]" },
];

const PartnersStrip = () => (
  <section className="py-8 md:py-14 bg-secondary border-y border-border">
    <div className="container">
      <p className="text-center text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-5 md:mb-8">
        Official Certification Partners
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16">
        {logos.map((l) => (
          <div key={l.name} className="flex h-10 md:h-14 w-24 md:w-32 items-center justify-center">
            <img
              src={l.src}
              alt={l.name}
              className={`${l.imageClassName} h-auto w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersStrip;
