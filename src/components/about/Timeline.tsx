const timeline = [
  { year: "2018", title: "Founded", desc: "Started with PMI certifications and a small team of 3 trainers." },
  { year: "2020", title: "Went Digital", desc: "Launched fully online live training, reaching professionals in 15+ countries." },
  { year: "2022", title: "Expanded Portfolio", desc: "Added AWS, Azure, CompTIA, and SAFe certifications to our catalog." },
  { year: "2024", title: "10K+ Milestone", desc: "Crossed 10,000 trained professionals with a 98% first-attempt pass rate." },
  { year: "2025", title: "AI & Corporate Growth", desc: "Launched AI-powered learning paths and scaled corporate training to 50+ enterprise clients." },
];

const Timeline = () => (
  <section className="py-12 md:py-24 bg-secondary rounded-t-[3rem] md:rounded-t-[8rem]">
    <div className="container max-w-5xl">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Our Journey</p>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">Key Milestones</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {timeline.map((item, i) => (
          <div key={item.year} className="relative group">
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <span className="inline-block font-heading text-2xl md:text-3xl font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors mb-2">
                {item.year}
              </span>
              <h3 className="font-heading font-bold text-foreground text-xs md:text-base mb-1 md:mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-[10px] md:text-sm leading-relaxed">{item.desc}</p>
            </div>
            {i < timeline.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
