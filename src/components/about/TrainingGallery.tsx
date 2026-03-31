import galleryMain from "@/assets/about-gallery-main.jpg";
import gallery1 from "@/assets/about-gallery-1.jpg";
import gallery2 from "@/assets/about-gallery-2.jpg";
import gallery3 from "@/assets/about-gallery-3.jpg";
import gallery4 from "@/assets/about-gallery-4.jpg";
import gallery5 from "@/assets/about-gallery-5.jpg";

const floatingImages = [
  { src: gallery1, alt: "Team collaboration", className: "top-[8%] left-[5%] w-36 h-24 md:w-44 md:h-28 -rotate-6" },
  { src: gallery2, alt: "Team discussion", className: "top-[5%] right-[6%] w-32 h-22 md:w-40 md:h-26 rotate-3" },
  { src: gallery3, alt: "Professional handshake", className: "top-[45%] left-[2%] w-28 h-20 md:w-36 md:h-24 rotate-2" },
  { src: gallery4, alt: "Team celebration", className: "bottom-[8%] left-[8%] w-32 h-22 md:w-40 md:h-26 -rotate-3" },
  { src: gallery5, alt: "Professional at work", className: "bottom-[10%] right-[5%] w-30 h-20 md:w-38 md:h-24 rotate-6" },
];

const Sparkle = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" fill="currentColor" />
  </svg>
);

const TrainingGallery = () => (
  <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
    {/* Elliptical orbit lines */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[90%] h-[80%] border border-primary-foreground/10 rounded-[50%] absolute" />
      <div className="w-[110%] h-[90%] border border-primary-foreground/10 rounded-[50%] absolute rotate-[15deg]" />
      <div className="w-[105%] h-[75%] border border-primary-foreground/10 rounded-[50%] absolute -rotate-[10deg]" />
    </div>

    {/* Sparkles */}
    <Sparkle className="absolute w-4 h-4 md:w-5 md:h-5 text-primary-foreground/40 top-[30%] left-[18%]" />
    <Sparkle className="absolute w-3 h-3 md:w-4 md:h-4 text-primary-foreground/30 top-[20%] right-[25%]" />
    <Sparkle className="absolute w-5 h-5 md:w-6 md:h-6 text-primary-foreground/35 bottom-[20%] right-[35%]" />
    <Sparkle className="absolute w-3 h-3 text-primary-foreground/25 bottom-[35%] left-[30%]" />

    <div className="container relative z-10">
      {/* Tagline */}
      <div className="text-center mb-8 md:mb-12">
        <p className="text-primary-foreground/70 text-sm md:text-base font-medium italic">
          More freedom to learn the way you want
        </p>
      </div>

      {/* Gallery layout */}
      <div className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center">
        {/* Floating side images - hidden on mobile */}
        {floatingImages.map((img, i) => (
          <div
            key={i}
            className={`absolute hidden md:block rounded-xl overflow-hidden shadow-2xl border-2 border-primary-foreground/10 transition-transform duration-500 hover:scale-105 ${img.className}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Central main image */}
        <div className="relative w-[85%] max-w-lg md:max-w-xl rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-foreground/15">
          <img
            src={galleryMain}
            alt="Professional training session"
            loading="lazy"
            width={800}
            height={512}
            className="w-full h-auto object-cover"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary-foreground/90 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-primary ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TrainingGallery;
