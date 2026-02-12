import Breadcrumb from "@/components/Breadcrumb";
import AboutSectionFour from "@/components/sections/AboutSectionFour";
import TimelineSectionOne from "@/components/sections/TimelineSectionOne";
import AboutMoreSection from "@/components/sections/AboutMoreSection";
import CounterSectionOne from "@/components/sections/CounterSectionOne";
import GallerySectionTwo from "@/components/sections/GallerySectionTwo";

export default function AboutPage() {
    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="About Us" bgClass="about"/>

            {/*-- About Section  --*/}
            <AboutSectionFour/>

            {/*-- Timeline Section --*/}
            <TimelineSectionOne/>

            {/*-- About More  --*/}
            <AboutMoreSection/>

            {/*-- Counter Section --*/}
            <CounterSectionOne/>

            {/*-- Gallery Section --*/}
            <GallerySectionTwo/>
        </>
    )
}