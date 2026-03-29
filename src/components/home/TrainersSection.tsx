const trainers = [
  {
    name: "Rajiv Sharma",
    certs: "PMP, PMI-ACP, CSM",
    bio: "18+ years in project management across banking & IT. Former PM Director at Cognizant.",
    color: "bg-primary",
  },
  {
    name: "Meera Nair",
    certs: "AWS SA-Pro, Azure Solutions Architect",
    bio: "15+ years in cloud architecture. Led cloud migration for Fortune 500 companies.",
    color: "bg-accent",
  },
  {
    name: "Vikram Patel",
    certs: "CISSP, CISM, CompTIA SecurityX",
    bio: "20+ years in cybersecurity. Former CISO at a leading fintech. DoD 8570 specialist.",
    color: "bg-teal-dark",
  },
  {
    name: "Ananya Rao",
    certs: "SPC 6.0, SAFe SPCT, CSP-SM",
    bio: "16+ years in agile transformation. Implemented SAFe at 12+ enterprises across 3 continents.",
    color: "bg-primary",
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
        {trainers.map((t) => {
          const initials = t.name.split(" ").map(w => w[0]).join("");
          return (
            <div key={t.name} className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow group">
              <div className={`${t.color} w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-primary-foreground font-heading font-bold text-2xl`}>
                {initials}
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">{t.name}</h3>
              <p className="text-xs text-primary font-semibold mt-1 mb-3">{t.certs}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.bio}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default TrainersSection;
