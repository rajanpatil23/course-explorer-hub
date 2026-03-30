const timeline = [
  { year: "2018", title: "Foundation", desc: "Began with project management training, a focused curriculum, and a small expert trainer network." },
  { year: "2019–2020", title: "Digital Expansion", desc: "Shifted into live online learning and started reaching professionals beyond local classroom delivery." },
  { year: "2021–2022", title: "Portfolio Growth", desc: "Expanded into cloud, cybersecurity, agile, and IT certifications to serve broader career goals." },
  { year: "2023–Now", title: "Scale & Impact", desc: "Grew learner outcomes, strengthened enterprise training, and continued scaling high-quality certification programs." },
];

const Timeline = () => (
  <section className="py-12 md:py-24 bg-secondary rounded-t-[3rem] md:rounded-t-[8rem]">
    <div className="container max-w-5xl">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Our Journey</p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">Key Milestones</h2>
      </div>
      <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {/* Horizontal connecting line behind cards on lg */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 z-0">
          <div className="h-full w-full bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 rounded-full" />
        </div>
        {timeline.map((item, i) => (
          <div key={item.year} className="relative group z-10">
            {/* Dot marker */}
            <div className="hidden lg:block absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary bg-card z-20" />
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <span className="inline-block font-heading text-2xl md:text-3xl font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors mb-2">
                {item.year}
              </span>
              <h3 className="font-heading font-bold text-foreground text-xs md:text-base mb-1 md:mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-[10px] md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
