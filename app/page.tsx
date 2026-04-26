import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import BrandPremise from "@/components/sections/BrandPremise";
import Capabilities from "@/components/sections/Capabilities";
import Differentiators from "@/components/sections/Differentiators";
import Sectors from "@/components/sections/Sectors";
import Method from "@/components/sections/Method";
import Leadership from "@/components/sections/Leadership";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <BrandPremise />
        <Capabilities />
        <Differentiators />
        <Sectors />
        <Method />
        <Leadership />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
