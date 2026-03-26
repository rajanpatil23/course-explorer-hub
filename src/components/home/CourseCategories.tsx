import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import catPmi from "@/assets/categories/cat-pmi.jpg";
import catComptia from "@/assets/categories/cat-comptia.jpg";
import catAzure from "@/assets/categories/cat-azure.jpg";
import catAws from "@/assets/categories/cat-aws.jpg";
import catSafe from "@/assets/categories/cat-safe.jpg";

const categoryCards = [
  {
    title: "PMI Certifications",
    count: "6+ Courses",
    courses: "PMP, CAPM, PMI-ACP, PMI-RMP, PMI-PBA, PgMP",
    image: catPmi,
    slug: "project-management",
  },
  {
    title: "CompTIA Certifications",
    count: "8+ Courses",
    courses: "Security+, Network+, A+, CySA+, PenTest+, Cloud+",
    image: catComptia,
    slug: "cybersecurity",
  },
  {
    title: "Microsoft Azure",
    count: "8+ Courses",
    courses: "AZ-900, AZ-104, AZ-305, AZ-500, AI-900, DP-900",
    image: catAzure,
    slug: "azure",
  },
  {
    title: "AWS Certifications",
    count: "6+ Courses",
    courses: "Cloud Practitioner, Solutions Architect, DevOps",
    image: catAws,
    slug: "aws",
  },
  {
    title: "SAFe® Agile",
    count: "6+ Courses",
    courses: "Leading SAFe, SSM, POPM, SPC, RTE, LPM",
    image: catSafe,
    slug: "safe-agile",
  },
];

const CourseCategories = () => (
  <section id="courses-section" className="py-16 md:py-24 bg-background">
    <div className="container">
      <p className="text-center text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Explore Courses</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Popular Course Categories
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
        Browse certifications across the most in-demand domains in technology and management.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryCards.map((cat) => (
          <Link
            key={cat.slug}
            to={`/courses?category=${cat.slug}`}
            className="group relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/30"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={960}
                height={640}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero/80 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {cat.count}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.courses}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CourseCategories;
