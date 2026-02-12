import HeroSectionOne from "@/components/sections/HeroSectionOne";
import ContactStrip from "@/components/sections/ContactStrip";
import AboutSectionOne from "@/components/sections/AboutSectionOne";
import PricingSectionOne from "@/components/sections/PricingSectionOne";
import GallerySectionOne from "@/components/sections/GallerySectionOne";
import ProcessSectionOne from "@/components/sections/ProcessSectionOne";

export default function Home() {
  return (
    <>
        {/*-- Hero Area --*/}
        <HeroSectionOne/>

        {/*-- Contact Strip --*/}
        <ContactStrip />

        {/*-- About Section --*/}
        <AboutSectionOne />

        {/*-- Pricing Section --*/}
        <PricingSectionOne />

        {/*-- Gallery Section --*/}
        <GallerySectionOne/>

        {/*-- Process Section --*/}
        <ProcessSectionOne/>
    </>
  );
}
