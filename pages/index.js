import CTA from "@/components/ui/CTA";
import ExpertiseSlider from "@/components/ui/ExpertiseSlider/ExpertiseSlider";
// import ExpertiseSlider from "@/components/ui/ExpertiseSlider/ExpertiseSlider";
import FAQs from "@/components/ui/FAQs";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import Pricing from "@/components/ui/Pricing";
import Testimonial from "@/components/ui/Testimonial";
import VisualFeatures from "@/components/ui/VisualFeatures";

export default function Home() {
  return (
    <>
      <Hero />
      <ExpertiseSlider/>
      <VisualFeatures />
      <Features />
      <CTA />
      <Testimonial />
      <Pricing />
      <FAQs />
    </>
  );
}
