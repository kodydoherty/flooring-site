import Image from "next/image";
import processImg1 from "@/assets/img/process/1.png";
import processImg2 from "@/assets/img/process/2.png";
import processImg3 from "@/assets/img/process/3.png";
import processImg4 from "@/assets/img/process/4.png";
import Link from "next/link";

export default function ProcessSectionOne() {
    return (
        <div id="process-1" className="process-section section-padding pt-0 pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-7">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">How Getting New Floors With Us Works</h2>
                            <p className="pt-20 wow fadeInUp animated" data-wow-delay=".4s">Simple, transparent process from estimate to installation. No surprises, no hassles—just beautiful floors.</p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
                        <Link href="#contact" className="bordered-btn">Get Started Today <i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="row mt-30 process-bg-wrap align-items-center justify-content-center process-bg">
                <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="200ms">
                    <div className="single-process-item">
                        <div className="process-icon">
                            <Image src={processImg1} alt="Quick Online Estimate" className="h-auto"/>
                            <span className="step-count">1.</span>
                            <div className="process-line d-none d-md-inline-block"></div>
                        </div>
                        <div className="process-title">
                            <h5>Quick Online Estimate</h5>
                        </div>
                        <div className="process-content">
                            <p>Use the calculator above to get a ballpark labor price for your project. Takes less than 2 minutes.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="400ms">
                    <div className="single-process-item">
                        <div className="process-icon">
                            <Image src={processImg2} alt="Free In-Home Measure & Design Help" className="h-auto"/>
                            <span className="step-count">2.</span>
                            <div className="process-line d-none d-lg-inline-block"></div>
                        </div>
                        <div className="process-title">
                            <h5>Free In-Home Measure & Design Help</h5>
                        </div>
                        <div className="process-content">
                            <p>We come out, measure, check your subfloor, and help with patterns and layout. No obligation, no pressure.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="600ms">
                    <div className="single-process-item">
                        <div className="process-icon">
                            <Image src={processImg3} alt="Scheduled Start Date & Clean Install" className="h-auto"/>
                            <span className="step-count">3.</span>
                            <div className="process-line d-none d-md-inline-block"></div>
                        </div>
                        <div className="process-title">
                            <h5>Scheduled Start Date & Clean Install</h5>
                        </div>
                        <div className="process-content">
                            <p>You get a written quote with a clear start window. We install, clean up, and walk the job with you before we leave.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft animated" data-wow-delay="800ms">
                    <div className="single-process-item">
                        <div className="process-icon">
                            <Image src={processImg4} alt="Final Walkthrough & Satisfaction Guarantee" className="h-auto"/>
                            <span className="step-count">4.</span>
                        </div>
                        <div className="process-title">
                            <h5>Final Walkthrough & Satisfaction Guarantee</h5>
                        </div>
                        <div className="process-content">
                            <p>We review the completed work together and ensure you&apos;re 100% satisfied before we consider the job done.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
