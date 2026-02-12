import FooterBottom from "@/components/footer/FooterBottom";
import Link from "next/link";

export default function FooterOne() {
    return (
        <>
            <div id="contact" className="footer-section pt-80 footer-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5 col-md-6">
                            <div className="footer-content-wrap">
                                <div className="section-title">
                                    <h2 className="text-white visible-slowly-right">
                                        Transform Your Space</h2>
                                </div>
                                <hr/>
                                <p className="text-white wow fadeInUp animated" data-wow-delay="400ms">Ready for new floors? Get a free in-home quote from Sperske&apos;s Floors & More. We serve Reno, Sparks, Carson City, Lake Tahoe and the greater Tahoe-Reno area.</p>
                                <Link href="/contact" className="white-btn mt-20 wow fadeInDown animated"
                                   data-wow-delay="600ms">Get a Free Quote <i className="fa-light fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-1"></div>
                        <div className="col-xl-3 col-lg-3 col-md-5">
                            <div className="contact-info-wrap mt-40">
                                <div className="single-contact-info wow fadeInUp animated" data-wow-delay="200ms">
                                    <h6 className="text-white">Phone</h6>
                                    <p className="p-xl"><a href="tel:+17759973848" className="text-white text-decoration-none">+1 (775) 997-3848</a></p>
                                </div>
                                <div className="single-contact-info wow fadeInUp animated" data-wow-delay="400ms">
                                    <h6 className="text-white">E-mail</h6>
                                    <p><a href="mailto:info@sperskesfloors.com" className="text-white text-decoration-none">info@sperskesfloors.com</a></p>
                                </div>
                                <div className="single-contact-info wow fadeInUp animated" data-wow-delay="600ms">
                                    <h6 className="text-white">Address</h6>
                                    <p>17810 Thunder River Dr <br/>
                                        Reno, NV 89508</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <FooterBottom/>
        </>
    )
}