import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import WhyEduEdge from "@/components/home/WhyEduEdge";
import CourseCategories from "@/components/home/CourseCategories";
import PopularCourses from "@/components/home/PopularCourses";
import LearningJourney from "@/components/home/LearningJourney";
import PartnersStrip from "@/components/home/PartnersStrip";
import TrainersSection from "@/components/home/TrainersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CorporateCTA from "@/components/home/CorporateCTA";
import BlogHighlights from "@/components/home/BlogHighlights";
import FAQSection from "@/components/home/FAQSection";
import MobileCTA from "@/components/courses/MobileCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen pb-14 md:pb-0">
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <PopularCourses />
      <WhyEduEdge />
      <CourseCategories />
      <LearningJourney />
      <PartnersStrip />
      <TrainersSection />
      <TestimonialsSection />
      <CorporateCTA />
      <FAQSection />
      <BlogHighlights />
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
