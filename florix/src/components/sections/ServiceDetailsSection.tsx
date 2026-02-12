import Image from "next/image";
import serviceFeatImg from "@/assets/img/service/service-feat-img.jpg";
import serviceDetailsImg1 from "@/assets/img/service/service-details-img-1.jpg";
import serviceDetailsImg2 from "@/assets/img/service/service-details-img-2.jpg";
import serviceDetailsImg3 from "@/assets/img/service/service-details-img-3.jpg";

export default function ServiceDetailsSection() {
    return (
        <div className="service-details-area section-padding">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-xl-8 col-lg-8">
                        <div className="service-details-wrap">
                            <div className="feature-img">
                                <Image src={serviceFeatImg} alt="" className="h-auto"/>
                            </div>
                            <h3>Flooring Installation</h3>
                            <p>Sperske&apos;s Floors & More installs new flooring in homes and businesses across the Reno–Tahoe area. We handle LVP (floating and glue-down), carpet, vinyl, rubber, and custom patterns—with transparent labor pricing and a focus on clean, professional installation.</p>
                            <p>From free in-home measure and design help to a written quote with a clear start window, we install, clean up, and walk the job with you before we leave. Every project includes a final walkthrough and satisfaction guarantee.</p>
                            <div className="service-details-img">
                                <div className="row gy-5">
                                    <div className="col-md-6">
                                        <Image src={serviceDetailsImg1} alt="" className="h-auto"/>
                                    </div>
                                    <div className="col-md-6">
                                        <Image src={serviceDetailsImg2} alt="" className="h-auto"/>
                                    </div>
                                </div>
                            </div>
                            <p>We serve Reno, Sparks, Carson City, Lake Tahoe, Truckee, Dayton, and the greater Tahoe-Reno area. Labor rates are listed up front so there are no surprises—what you see in our estimate is what you pay.</p>
                            <h5>Flooring Refinishing & Repairs</h5>
                            <p>We also handle flooring repairs and refinishing when you need to extend the life of your existing floors. Our team will assess your subfloor, recommend the best approach, and complete the work with the same attention to detail and cleanup.</p>
                            <div className="service-details-img">
                                <Image src={serviceDetailsImg3} alt="" className="h-auto"/>
                            </div>
                            <p>Ready to get started? Use the calculator on our homepage for a ballpark labor price, or request a free in-home quote. We&apos;ll measure, check your subfloor, and help with patterns and layout—no obligation, no pressure.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="sidebar-wrap white-bg">
                            <div className="contact-form">
                                <h5>Get in Touch</h5>
                                <form action="#">
                                    <input type="text" placeholder="Name"/>
                                    <input type="email" placeholder="Email"/>
                                    <textarea name="message" id="message" cols={10} rows={10}
                                              placeholder="Message"></textarea>
                                    <input type="submit" value="Get In Touch"/>
                                </form>
                            </div>
                            <div className="contact-info">
                                <h5>Contact Info</h5>
                                <ul className="contact-list-item">

                                    <li><i className="las la-map-marker"></i>
                                        17810 Thunder River Dr <br/>
                                        Reno, NV 89508
                                    </li>
                                    <li><i className="las la-envelope"></i>
                                        <a href="mailto:info@sperskesfloors.com">info@sperskesfloors.com</a>
                                    </li>
                                    <li><i className="las la-phone"></i>
                                        <a href="tel:+17759973848">+1 (775) 997-3848</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}