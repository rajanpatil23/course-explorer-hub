import galleryMain from "@/assets/about-gallery-main.jpg";
import gallery1 from "@/assets/about-gallery-1.jpg";
import gallery2 from "@/assets/about-gallery-2.jpg";
import gallery3 from "@/assets/about-gallery-3.jpg";
import gallery4 from "@/assets/about-gallery-4.jpg";
import gallery5 from "@/assets/about-gallery-5.jpg";

const Sparkle = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" fill="currentColor" />
  </svg>
);

const FloatingImg = ({ src, alt, className }: { src: string; alt: string; className: string }) => (
  <div className={`absolute hidden md:block rounded-xl overflow-hidden shadow-2xl border-2 border-primary-foreground/10 ${className}`}>
    <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
  </div>
);

const TrainingGallery = () => (
  <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
    {/* 3 elliptical rings intersecting at N, S, E, W */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg className="absolute w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ring 1: tilted left — passes through top & bottom center, left & right sides */}
        <ellipse cx="500" cy="300" rx="440" ry="200" stroke="hsl(var(--primary-foreground) / 0.13)" strokeWidth="1.2" transform="rotate(-30 500 300)" />
        {/* Ring 2: horizontal / slight tilt — widest ring */}
        <ellipse cx="500" cy="300" rx="440" ry="200" stroke="hsl(var(--primary-foreground) / 0.10)" strokeWidth="1.2" transform="rotate(0 500 300)" />
        {/* Ring 3: tilted right — mirror of ring 1 */}
        <ellipse cx="500" cy="300" rx="440" ry="200" stroke="hsl(var(--primary-foreground) / 0.13)" strokeWidth="1.2" transform="rotate(30 500 300)" />
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
        {/* Corner images — same size rectangles */}
        <FloatingImg src={gallery1} alt="Team collaboration"   className="top-[4%] left-[4%] w-40 h-28 md:w-48 md:h-32" />
        <FloatingImg src={gallery2} alt="Team discussion"       className="top-[4%] right-[4%] w-40 h-28 md:w-48 md:h-32" />
        <FloatingImg src={gallery4} alt="Team celebration"      className="bottom-[4%] left-[6%] w-40 h-28 md:w-48 md:h-32" />
        <FloatingImg src={gallery5} alt="Professional at work"  className="bottom-[4%] right-[4%] w-40 h-28 md:w-48 md:h-32" />

        {/* Mid-left & mid-right — slightly smaller */}
        <FloatingImg src={gallery3} alt="Professional handshake" className="top-[38%] left-[1%] w-36 h-24 md:w-40 md:h-28" />
        <FloatingImg src={gallery1} alt="Teamwork"               className="top-[38%] right-[1%] w-36 h-24 md:w-40 md:h-28" />

        {/* Central main image */}
        <div className="relative w-[80%] max-w-md md:max-w-lg rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-foreground/15">
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
