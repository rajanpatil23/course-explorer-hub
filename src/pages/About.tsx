import AboutHero from "@/components/about/AboutHero";
import StatsStrip from "@/components/home/StatsStrip";
import OurStory from "@/components/about/OurStory";
import Timeline from "@/components/about/Timeline";
import WhatSetsUsApart from "@/components/about/WhatSetsUsApart";
import PartnersStrip from "@/components/home/PartnersStrip";
import TrainersSection from "@/components/home/TrainersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CorporateCTA from "@/components/home/CorporateCTA";

const About = () => (
  <>
    <AboutHero />
    <StatsStrip />
    <OurStory />
    <Timeline />
    <WhatSetsUsApart />
    
    <TrainersSection />
    <TestimonialsSection />
    <CorporateCTA />
    <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
  </>
);

export default About;
