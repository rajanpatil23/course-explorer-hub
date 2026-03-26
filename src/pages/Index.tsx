import HeroBanner from "@/components/courses/HeroBanner";
import CategoryTabs from "@/components/courses/CategoryTabs";
import Testimonials from "@/components/courses/Testimonials";
import WhyChoose from "@/components/courses/WhyChoose";
import CorporateCTA from "@/components/courses/CorporateCTA";
import FAQSection from "@/components/courses/FAQSection";
import BlogHighlights from "@/components/courses/BlogHighlights";
import MobileCTA from "@/components/courses/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen pb-14 md:pb-0">
      <HeroBanner />
      <CategoryTabs />
      <Testimonials />
      <CorporateCTA />
      <WhyChoose />
      <FAQSection />
      <BlogHighlights />
      <MobileCTA />
    </div>
  );
};

export default Index;
