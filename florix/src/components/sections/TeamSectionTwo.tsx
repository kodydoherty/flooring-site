import Image from "next/image";
import teamImg21 from "@/assets/img/team/2-1.jpg";
import teamImg22 from "@/assets/img/team/2-2.jpg";
import teamImg23 from "@/assets/img/team/2-3.jpg";
import Link from "next/link";

export default function TeamSectionTwo() {
    return (
        <div id="team-2" className="team-section section-padding team-bg2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-5 col-md-6">
                        <div className="team-intro-wrap">
                            <div className="section-title">
                                <h6 className="text-white">Our Team</h6>
                                <h2 className="text-white visible-slowly-right">Meet our skilled team of flooring
                                    experts</h2>
                            </div>
                            <p className="text-white">Meet our skilled team of flooring experts dedicated to delivering
                                exceptional craftsmanship and outstanding customer service for every project.</p>
                            <Link href="/team" className="bordered-btn white-btn mt-20">Work with Us<i
                                className="fa-light fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-6">
                        <div className="row team-content-wrap">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="single-team-wrap">
                                    <div className="team-img">
                                        <Image src={teamImg21} alt="" className="h-auto"/>
                                        <div className="team-info">
                                            <h6>Anna Taylor</h6>
                                            <p>Team Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="single-team-wrap">
                                    <div className="team-img">
                                        <Image src={teamImg22} alt="" className="h-auto"/>
                                        <div className="team-info">
                                            <h6>Anna Taylor</h6>
                                            <p>Team Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="single-team-wrap">
                                    <div className="team-img">
                                        <Image src={teamImg23} alt="" className="h-auto"/>
                                        <div className="team-info">
                                            <h6>Anna Taylor</h6>
                                            <p>Team Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}