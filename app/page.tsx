import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import IntroSection from "@/components/lifestyle/IntroSection";
import FeatureGrid from "@/components/features/FeatureGrid";
import ScreenshotShowcase from "@/components/screenshots/ScreenshotShowcase";
import LifestyleSection from "@/components/lifestyle/LifestyleSection";
import AudienceSection from "@/components/audience/AudienceSection";
import FinalCTA from "@/components/download/FinalCTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <FeatureGrid />
        <ScreenshotShowcase />
        <LifestyleSection />
        <AudienceSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
