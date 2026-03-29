import trainerRajiv from "@/assets/trainers/trainer-rajiv.png";
import trainerMeera from "@/assets/trainers/trainer-meera.png";
import trainerVikram from "@/assets/trainers/trainer-vikram.png";
import trainerAnanya from "@/assets/trainers/trainer-ananya.png";

const trainers = [
  {
    name: "Rajiv Sharma",
    title: "Project Management Guru",
    workedWith: ["Cognizant", "Infosys"],
    image: trainerRajiv,
  },
  {
    name: "Meera Nair",
    title: "Cloud Architecture Expert",
    workedWith: ["TCS", "Wipro"],
    image: trainerMeera,
  },
  {
    name: "Vikram Patel",
    title: "Cyber Security Consultant",
    workedWith: ["Deloitte", "HCLTech"],
    image: trainerVikram,
  },
  {
    name: "Ananya Rao",
    title: "Agile Transformation Lead",
    workedWith: ["Accenture", "Capgemini"],
    image: trainerAnanya,
  },
];

const TrainersSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container">
      <p className="text-center text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Our Trainers</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Learn from Industry-Leading Experts
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
        Our trainers hold active certifications and bring 15+ years of real-world experience to every session.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {trainers.map((t, i) => (
          <div
            key={t.name}
            className="group relative bg-card rounded-[2rem] border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Top content area */}
            <div className="px-6 pt-7 pb-4 text-center">
              <h3 className="font-heading font-bold text-foreground text-lg leading-tight">
                {t.name}
              </h3>
              <p className="text-primary text-sm font-medium mt-1">{t.title}</p>

              <p className="text-xs text-muted-foreground mt-4 mb-2 font-semibold uppercase tracking-wider">
                Has worked with
              </p>
              <div className="flex items-center justify-center gap-3">
                {t.workedWith.map((company) => (
                  <span
                    key={company}
                    className="text-xs font-bold text-foreground/70 bg-secondary px-3 py-1 rounded-full"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>

            {/* Photo area with gradient fade */}
            <div className="relative mt-2 h-56 flex items-end justify-center">
              {/* Gradient background behind photo */}
              <div
                className="absolute inset-0 rounded-t-[50%_30%]"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(to bottom, hsl(var(--secondary)), hsl(48 90% 85%), hsl(var(--primary) / 0.35))"
                      : "linear-gradient(to bottom, hsl(var(--secondary)), hsl(48 90% 85%), hsl(170 50% 70% / 0.5))",
                }}
              />
              <img
                src={t.image}
                alt={t.name}
                className="relative z-10 w-44 h-52 object-cover object-top"
                loading="lazy"
                width={512}
                height={640}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrainersSection;
