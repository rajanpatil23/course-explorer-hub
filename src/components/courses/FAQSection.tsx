import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/courses";

const FAQSection = () => (
  <section className="py-16 md:py-20 bg-secondary">
    <div className="container max-w-3xl">
      <p className="text-center text-sm font-semibold text-primary uppercase tracking-widest mb-2">FAQ</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        Got Questions? We've Got Answers.
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-sm">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 text-sm md:text-base">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
