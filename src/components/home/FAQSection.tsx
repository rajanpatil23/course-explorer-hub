import { faqs } from "@/data/courses";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => (
  <section className="py-16 md:py-24 bg-secondary rounded-b-[5rem] md:rounded-b-[8rem]">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left – Eyebrow, Title, Description */}
        <div className="lg:sticky lg:top-8">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">FAQ</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            Got questions? We've got answers. Find everything you need to know about our courses, certifications, and training programs.
          </p>
        </div>

        {/* Right – Accordion */}
        <div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground text-left py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </section>
);

export default FAQSection;
