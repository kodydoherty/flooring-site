import Image from "next/image";
import processImg21 from "@/assets/img/process/2-1.png";
import processImg22 from "@/assets/img/process/2-2.png";
import processImg23 from "@/assets/img/process/2-3.png";
import Link from "next/link";

export default function ProcessSectionTwo() {
    return (
        <div id="process-2" className="process-section section-padding">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-xl-5 col-lg-4 col-md-4">
                        <div className="section-title">
                            <h6>Our Process</h6>
                            <h2 className="visible-slowly-right">From consultation to perfection, every time</h2>
                            <p className="pt-20">Our seamless flooring process ensures quality from consultation to
                                installation, guaranteeing satisfaction every step of the way.</p>
                        </div>
                        <Link href="/contact" className="bordered-btn">Get In Touch <i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1"></div>
                    <div className="col-xl-6 col-lg-7 col-md-7">
                        <div className="single-process-wrap wow fadeInUp animated" data-wow-delay="200ms">
                            <div className="process-icon">
                                <Image src={processImg21} alt="" className="h-auto"/>
                                <span className="step-count">1.</span>
                            </div>
                            <div className="process-content">
                                <div className="process-title">
                                    <h5>Consultation</h5>
                                </div>
                                <div className="process-text">
                                    <p>The architecture company meets with the client to discuss their needs, budget,
                                        and timeline.</p>
                                </div>
                            </div>
                        </div>
                        <div className="single-process-wrap wow fadeInUp animated" data-wow-delay="400ms">
                            <div className="process-icon">
                                <Image src={processImg22} alt="" className="h-auto"/>
                                <span className="step-count">2.</span>
                            </div>
                            <div className="process-content">
                                <div className="process-title">
                                    <h5>Material Selection</h5>
                                </div>
                                <div className="process-text">
                                    <p>The architecture company meets with the client to discuss their needs, budget,
                                        and timeline.</p>
                                </div>
                            </div>
                        </div>
                        <div className="single-process-wrap mb-0 wow fadeInUp animated" data-wow-delay="600ms">
                            <div className="process-icon">
                                <span className="step-count">3.</span>
                                <Image src={processImg23} alt="" className="h-auto"/>
                            </div>
                            <div className="process-content">
                                <div className="process-title">
                                    <h5>Preparation</h5>
                                </div>
                                <div className="process-text">
                                    <p>The architecture company meets with the client to discuss their needs, budget,
                                        and timeline.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}