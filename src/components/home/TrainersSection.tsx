import trainerRajiv from "@/assets/trainers/trainer-rajiv.png";
import trainerMeera from "@/assets/trainers/trainer-meera.png";
import trainerVikram from "@/assets/trainers/trainer-vikram.png";
import trainerAnanya from "@/assets/trainers/trainer-ananya.png";
import trainerArjun from "@/assets/trainers/trainer-arjun.png";

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
  {
    name: "Arjun Desai",
    title: "DevOps & Cloud Specialist",
    workedWith: ["Microsoft", "Amazon"],
    image: trainerArjun,
  },
];

const TrainersSection = () => (
  <section className="py-16 md:py-24 bg-secondary overflow-hidden">
    <div className="container">
      <p className="text-center text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Our Trainers</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Learn from Industry-Leading Experts
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
        Our trainers hold active certifications and bring 15+ years of real-world experience to every session.
      </p>

      {/* Staggered grid — odd cards pushed down */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-5 max-w-6xl mx-auto flex-wrap lg:flex-nowrap">
        {trainers.map((t, i) => {
          const isOdd = i % 2 !== 0;
          return (
            <div
              key={t.name}
              className={`w-full sm:w-[48%] lg:w-[23%] ${isOdd ? "sm:mt-16" : ""}`}
            >
              <div className="group relative bg-card rounded-t-[2.5rem] rounded-b-[50%_20%] border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {/* Top text area in white card */}
                <div className="mx-3 mt-3 rounded-2xl bg-background p-5 text-center shadow-sm">
                  <h3 className="font-heading font-bold text-foreground text-lg leading-tight">
                    {t.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mt-1">{t.title}</p>

                  <p className="text-[11px] text-muted-foreground mt-5 mb-2 font-semibold">
                    Has worked with
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    {t.workedWith.map((company) => (
                      <span
                        key={company}
                        className="text-xs font-bold text-foreground/80"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Photo with warm-to-teal gradient */}
                <div className="relative h-60 mt-auto flex items-end justify-center overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, hsl(var(--card)) 0%, hsl(45 80% 88%) 35%, hsl(160 45% 65%) 100%)",
                    }}
                  />
                  <img
                    src={t.image}
                    alt={t.name}
                    className="relative z-10 w-48 h-56 object-cover object-top"
                    loading="lazy"
                    width={512}
                    height={640}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default TrainersSection;
