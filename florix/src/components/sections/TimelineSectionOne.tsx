import Image from "next/image";
import timeLimeImg1 from "@/assets/img/timeline/1.jpg";
import timeLimeImg2 from "@/assets/img/timeline/2.jpg";
import timeLimeImg3 from "@/assets/img/timeline/3.jpg";
import timeLimeImg4 from "@/assets/img/timeline/4.jpg";
import timeLimeImg5 from "@/assets/img/timeline/5.jpg";

export default function TimelineSectionOne() {
    return (
        <div className="timeline-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="timeline-wrapper">
                        <div className="timeline-item obverse">
                            <div className="timeline-line-wrap">
                                <span className="timeline-line"></span>
                            </div>
                            <div className="timeline-inner">
                                <div className="time-line-point-wrap">
                                    <div className="time-line-point"></div>
                                </div>
                                <div className="timeline-img-wrap">
                                    <Image src={timeLimeImg1} alt="" className="h-auto"/>
                                </div>
                                <div className="timeline-content-wrap">
                                    <span className="timeline-date">2014</span>
                                    <h5 className="timeline-title">Founding Year</h5>
                                    <p className="timeline-text">Inception: Sperske&apos;s Floors & More was founded as a family-owned
                                        flooring business with a vision to deliver quality installation and honest service
                                        for homeowners and businesses in the Reno–Tahoe area. Our goal was to combine
                                        skilled craftsmanship with straightforward pricing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item reverse">
                            <div className="timeline-line-wrap">
                                <span className="timeline-line"></span>
                            </div>
                            <div className="timeline-inner">
                                <div className="time-line-point-wrap">
                                    <div className="time-line-point"></div>
                                </div>
                                <div className="timeline-content-wrap order-2 order-md-1">
                                    <span className="timeline-date">2016</span>
                                    <h5 className="timeline-title">Growing in Reno–Tahoe</h5>
                                    <p className="timeline-text">Business Setup: Sperske&apos;s Floors & More established its base in
                                        Reno, NV, serving Sparks, Carson City, Lake Tahoe, and the greater area with a
                                        full range of flooring services: LVP, carpet, vinyl, rubber, and custom
                                        installations.</p>
                                </div>
                                <div className="timeline-img-wrap order-1 order-md-2">
                                    <Image src={timeLimeImg2} alt="" className="h-auto"/>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item obverse">
                            <div className="timeline-line-wrap">
                                <span className="timeline-line"></span>
                            </div>
                            <div className="timeline-inner">
                                <div className="time-line-point-wrap">
                                    <div className="time-line-point"></div>
                                </div>
                                <div className="timeline-img-wrap">
                                    <Image src={timeLimeImg3} alt="" className="h-auto"/>
                                </div>
                                <div className="timeline-content-wrap">
                                    <span className="timeline-date">2018</span>
                                    <h5 className="timeline-title">Growth and Community Recognition</h5>
                                    <p className="timeline-text">Market Expansion: As demand grew, Sperske&apos;s Floors & More
                                        expanded its services to include more commercial and residential projects across
                                        the region, building a reputation for reliability and quality installation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item reverse">
                            <div className="timeline-line-wrap">
                                <span className="timeline-line"></span>
                            </div>
                            <div className="timeline-inner">
                                <div className="time-line-point-wrap">
                                    <div className="time-line-point"></div>
                                </div>
                                <div className="timeline-content-wrap order-2 order-md-1">
                                    <span className="timeline-date">2020</span>
                                    <h5 className="timeline-title">Service Diversification</h5>
                                    <p className="timeline-text">New Services: Added in-home measure and design help,
                                        transparent labor pricing, and a focus on clean installs and walk-throughs,
                                        enhancing the overall customer experience from estimate to completion.</p>
                                </div>
                                <div className="timeline-img-wrap order-1 order-md-2">
                                    <Image src={timeLimeImg4} alt="" className="h-auto"/>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item obverse">
                            <div className="timeline-line-wrap">
                                <span className="timeline-line"></span>
                            </div>
                            <div className="timeline-inner">
                                <div className="time-line-point-wrap">
                                    <div className="time-line-point"></div>
                                </div>
                                <div className="timeline-img-wrap">
                                    <Image src={timeLimeImg5} alt="" className="h-auto"/>
                                </div>
                                <div className="timeline-content-wrap">
                                    <span className="timeline-date">2024</span>
                                    <h5 className="timeline-title">Today</h5>
                                    <p className="timeline-text">Today: Sperske&apos;s Floors & More continues to serve the
                                        Reno–Tahoe region with the same family-owned values: honest pricing, quality
                                        installation, and a satisfaction guarantee on every project.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}