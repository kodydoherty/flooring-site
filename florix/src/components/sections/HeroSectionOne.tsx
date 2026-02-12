"use client";

import Link from "next/link";

export default function HeroSectionOne() {
    return (
        <div id="home-1" className="homepage-slides">
            <div className="single-slide-item d-flex align-items-center banner-bg-1">
                <div className="overlay-4"></div>
                <div className="hero-area-content">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12 col-md-10 wow fadeInUp animated"
                                 data-wow-delay=".2s">
                                <div className="section-title">
                                    <h6 className="text-white">Family-Owned Since 2014</h6>
                                    <h1 className="text-white">Beautiful, Durable Floors Installed Right The First Time In Reno–Tahoe</h1>
                                </div>
                                <p className="text-white">Family-owned flooring installer with 10+ years experience in LVP, carpet, rubber, vinyl, and custom patterns. Serving Reno, Sparks, Dayton, Carson City, Lake Tahoe & Truckee.</p>
                                <ul className="hero-bullets text-white mt-3 mb-4">
                                    <li>All major flooring types: LVP, carpet, rubber, sheet vinyl, baseboards & more</li>
                                    <li>Clean, on-time installs for homes and businesses</li>
                                    <li>Small family business, one point of contact start to finish</li>
                                </ul>
                                <div className="hero-cta-buttons d-flex flex-wrap gap-3 mt-40">
                                    <Link href="#price-calculator" id="cta-calculator" className="white-btn">Get Instant Price Estimate <i className="fa-light fa-arrow-right"></i></Link>
                                    <Link href="#contact" id="cta-quote" className="bordered-btn white-bordered">Request In-Home Quote <i className="fa-light fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
