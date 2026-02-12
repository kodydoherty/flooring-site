"use client"
import Image from "next/image";
import {useEffect} from "react";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import galleryImg1 from "@/assets/img/project/1.jpg";
import galleryImg2 from "@/assets/img/project/2.jpg";
import galleryImg3 from "@/assets/img/project/3.jpg";
import galleryImg4 from "@/assets/img/project/4.jpg";
import galleryImg5 from "@/assets/img/project/5.jpg";
import galleryImg6 from "@/assets/img/project/2-1.jpg";
import galleryImg7 from "@/assets/img/project/2-2.jpg";
import galleryImg8 from "@/assets/img/project/2-3.jpg";

const galleryItems = [
  { src: galleryImg1, alt: "Sperske project – Reno living room LVP floating install" },
  { src: galleryImg2, alt: "Sperske project – Carson City office commercial carpet tiles" },
  { src: galleryImg3, alt: "Sperske project – Truckee home sheet vinyl with cove base in kitchen" },
  { src: galleryImg4, alt: "Sperske project – Sparks bedroom luxury vinyl plank with custom border" },
  { src: galleryImg5, alt: "Sperske project – Lake Tahoe cabin rubber flooring in mudroom" },
  { src: galleryImg6, alt: "Sperske project – Dayton commercial space glue-down LVP installation" },
  { src: galleryImg7, alt: "Sperske project – residential hardwood refinish" },
  { src: galleryImg8, alt: "Sperske project – commercial tile installation" },
];

export default function GallerySectionOne() {

    useEffect(() => {
        Fancybox.bind("[data-fancybox]");
        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <div id="gallery-1" className="gallery-section gray-bg section-padding">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">See Our Recent Work</h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-4">
                    {galleryItems.map((item, i) => (
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft animated" data-wow-delay={`${(i % 3) * 200 + 200}ms`}>
                            <a href={item.src.src} data-fancybox="gallery">
                                <Image src={item.src} alt={item.alt} className="h-auto"/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
