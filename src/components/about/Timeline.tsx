const timeline = [
  { year: "2018", title: "Foundation", desc: "Began with project management training, a focused curriculum, and a small expert trainer network.", color: "bg-primary" },
  { year: "2019–20", title: "Digital Expansion", desc: "Shifted into live online learning and started reaching professionals beyond local classroom delivery.", color: "bg-accent" },
  { year: "2021–22", title: "Portfolio Growth", desc: "Expanded into cloud, cybersecurity, agile, and IT certifications to serve broader career goals.", color: "bg-primary" },
  { year: "2023–Now", title: "Scale & Impact", desc: "Grew learner outcomes, strengthened enterprise training, and continued scaling high-quality programs.", color: "bg-accent" },
];

const Timeline = () => (
  <section className="py-14 md:py-24 bg-secondary rounded-t-[3rem] md:rounded-t-[8rem]">
    <div className="container max-w-5xl">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Our Journey</p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">Key Milestones</h2>
        <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
          From a small training initiative to a globally recognized certification platform.
        </p>
      </div>
      <div className="relative">
        {/* Horizontal connecting line behind cards on lg */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 z-0">
          <div className="h-full w-full bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 rounded-full" />
        </div>
        {/* Vertical connecting line on mobile */}
        <div className="lg:hidden absolute top-0 bottom-0 left-[18px] w-[2px] bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10 z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-6">
          {timeline.map((item) => (
            <div key={item.year} className="relative group z-10 flex gap-4 lg:block">
              {/* Mobile dot */}
              <div className="lg:hidden shrink-0 mt-1">
                <div className={`w-[10px] h-[10px] rounded-full ${item.color} ring-4 ring-secondary`} />
              </div>
              <div className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-6 flex-1 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <span className={`inline-block text-[10px] md:text-xs font-bold text-primary-foreground ${item.color} px-2.5 py-1 rounded-md mb-3`}>
                  {item.year}
                </span>
                <h3 className="font-heading font-bold text-foreground text-sm md:text-base mb-1.5 md:mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
