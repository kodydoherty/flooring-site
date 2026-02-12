import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({
    subsets: ["latin"],
    variable: "--font-jost",
    weight: ["400", "500", "600", "700"],
});

import '@/assets/css/line-awesome.min.css';
import '@/assets/css/fontAwesomePro.css';
import '@/assets/css/animate.css';
import '@/assets/css/flaticon.css';
import '@/assets/css/owl.carousel.css';
import '@/assets/css/backToTop.css';
import '@/assets/scss/style.scss';

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/BackToTop";
import WowProvider from "@/provider/WowProvider";
import BootstrapClient from "@/provider/BootstrapClient";
import PreLoader from "@/components/PreLoader";

export const metadata: Metadata = {
  title: "Sperske's Floors & More | Professional Flooring Installation Reno-Tahoe",
  description: "Family-owned flooring installer with 10+ years experience in LVP, carpet, rubber, vinyl, and custom patterns. Serving Reno, Sparks, Dayton, Carson City, Lake Tahoe & Truckee.",
  openGraph: {
    title: "Sperske's Floors & More | Professional Flooring Installation Reno-Tahoe",
    description: "Family-owned flooring installer with 10+ years experience in LVP, carpet, rubber, vinyl, and custom patterns. Serving Reno, Sparks, Dayton, Carson City, Lake Tahoe & Truckee.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sperske's Floors & More",
    description: "Family-owned flooring installer with 10+ years experience in LVP, carpet, rubber, vinyl, and custom patterns. Serving Reno, Sparks, Dayton, Carson City, Lake Tahoe & Truckee.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17810 Thunder River Dr",
      addressLocality: "Reno",
      addressRegion: "NV",
      postalCode: "89508",
    },
  };

  return (
    <html lang="en">
      <body className={`${jost.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {/*-- Pre-Loader --*/}
      <PreLoader/>

      {/* Initializes WOW.js globally */}
      <WowProvider/>

      <Header/>
        {children}
      <Footer/>

      {/*-- back to top start --*/}
      <BackToTop/>

      <BootstrapClient/>
      </body>
    </html>
  );
}
