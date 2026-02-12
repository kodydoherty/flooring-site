import Link from "next/link";
import Image from "next/image";
import serviceImg21 from "@/assets/img/service/2-1.png";
import serviceImg22 from "@/assets/img/service/2-2.png";
import serviceImg23 from "@/assets/img/service/2-3.png";
import serviceImg24 from "@/assets/img/service/2-4.png";

export default function ServiceSectionTwo() {
    return (
        <div id="service-2" className="service-section section-padding pb-90">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-5 col-md-6">
                        <div className="section-title">
                            <h6>Our Services</h6>
                            <h2 className="visible-slowly-right">Flooring Installation for Homes and Businesses</h2>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-1"></div>
                    <div className="col-xl-4 col-lg-4 col-md-5">
                        <p className="pt-40">We provide professional flooring installation, repair, refinishing,
                            maintenance, and custom design services for homes and businesses.</p>
                        <Link href="/services" className="details-link">View All Services <i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="row mt-60">
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="200ms">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <Image src={serviceImg21} alt="" className="h-auto"/>
                            </div>
                            <div className="service-title">
                                <h5>Flooring <br/> Installation</h5>
                            </div>
                            <Link href="/services" className="details-link">
                                <i className="fa-light fa-arrow-right"></i>
                            </Link>
                            <div className="border-right d-none d-md-inline-block"></div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="400ms">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <Image src={serviceImg22} alt="" className="h-auto"/>
                            </div>
                            <div className="service-title">
                                <h5>Tile <br/> Installation</h5>
                            </div>
                            <Link href="/services" className="details-link">
                                <i className="fa-light fa-arrow-right"></i>
                            </Link>
                            <div className="border-right d-none d-lg-inline-block"></div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="600ms">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <Image src={serviceImg23} alt="" className="h-auto"/>
                            </div>
                            <div className="service-title">
                                <h5>Floor <br/> Repair</h5>
                            </div>
                            <Link href="/services" className="details-link">
                                <i className="fa-light fa-arrow-right"></i>
                            </Link>
                            <div className="border-right d-none d-md-inline-block"></div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="800ms">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <Image src={serviceImg24} alt="" className="h-auto"/>
                            </div>
                            <div className="service-title">
                                <h5>Floor <br/> Refinishing</h5>
                            </div>
                            <Link href="/services" className="details-link">
                                <i className="fa-light fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}