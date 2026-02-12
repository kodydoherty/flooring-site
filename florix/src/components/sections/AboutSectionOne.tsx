import Image from "next/image";
import aboutImg1 from "@/assets/img/about/1.jpg";
import Link from "next/link";

export default function AboutSectionOne() {
    return (
        <div id="about-1" className="about-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-7">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">Why Homeowners & Businesses Trust Us With Their Floors</h2>
                            <p className="pt-20 wow fadeInUp animated" data-wow-delay=".4s">Over a decade of professional flooring installation serving the Reno-Tahoe region. We&apos;re not just installers—we&apos;re craftsmen who care about your space.</p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-5 text-md-end">
                        <Link href="#gallery-1" className="bordered-btn">View Our Work <i
                            className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="row gx-0">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-img-wrap wow img-custom-anim-left" data-wow-delay=".3s">
                            <Image src={aboutImg1} alt="Sperske's Floors & More - flooring installation" className="h-auto"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="cp-custom-accordion">
                            <div className="accordions" id="accordionAbout">
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="aboutOne">
                                        <button className="accordion-buttons" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            All-Flooring Specialist
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                         aria-labelledby="aboutOne" data-bs-parent="#accordionAbout">
                                        <div className="accordion-body">
                                            Over a decade installing LVP (floating & glue down), carpet, rubber, sheet vinyl, cove base, and millwork baseboards with custom patterns. We handle every flooring type with expertise.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="aboutTwo">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                            Patterns That Elevate the Space
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="aboutTwo" data-bs-parent="#accordionAbout">
                                        <div className="accordion-body">
                                            Borders, insets, and layouts that make your floors look designed, not just installed. We bring creative solutions to every project, transforming ordinary spaces into extraordinary ones.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="aboutThree">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                            Respect for Your Home or Business
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                         aria-labelledby="aboutThree" data-bs-parent="#accordionAbout">
                                        <div className="accordion-body">
                                            We show up when we say we will, protect your space during installation, and clean up thoroughly before we leave. Your property is treated with the same care as our own.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="aboutFour">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseFour">
                                            Straightforward Pricing
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                         aria-labelledby="aboutFour" data-bs-parent="#accordionAbout">
                                        <div className="accordion-body">
                                            Labor rates listed up front so there are no surprises later. What you see in our estimate is what you pay—transparent, honest, and fair.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
