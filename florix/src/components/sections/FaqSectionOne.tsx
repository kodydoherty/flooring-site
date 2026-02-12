export default function FaqSectionOne() {
    return (
        <div className="faq-section bg-cover section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8">
                        <div className="cp-custom-accordion">
                            <div className="accordions" id="accordionExample">
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-buttons" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            <span>01</span>What services does Sperske&apos;s Floors & More provide?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                         aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We install LVP (floating and glue-down), carpet, vinyl, rubber, and custom patterns for residential and commercial properties. We also handle baseboards (wood, rubber, millwork), vinyl cove base, and flooring repairs and refinishing. Labor rates are listed on our Pricing page.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                            <span>02</span>What is the timeline for a typical project?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            After you request a quote, we schedule a free in-home measure and design help visit. You then receive a written quote with a clear start window. Project length depends on square footage and scope—we&apos;ll give you a timeline when we provide your quote.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                            <span>03</span>How do I choose the right flooring for my project?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We offer a free in-home measure and design help visit. We&apos;ll check your subfloor, discuss patterns and layout, and help you decide between LVP, carpet, vinyl, rubber, or other options based on your space, budget, and style. No obligation, no pressure.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseFour">
                                            <span>04</span>Do you offer free estimates?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                         aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes. Use the calculator on our homepage for a ballpark labor price, or request a free in-home quote. We come out, measure, check your subfloor, and help with patterns and layout—no obligation. You&apos;ll receive a written quote with a clear start window.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                aria-expanded="false" aria-controls="collapseFour">
                                            <span>05</span>How much does a project cost?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse"
                                         aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Labor rates are listed on our Pricing page (e.g., LVP from $3.50/sq ft, carpet from $12/sq yd). Final quote depends on room layout, stairs, subfloor condition, and tear-out of old flooring. Use the calculator for a ballpark, then we&apos;ll confirm everything with a free in-home visit.
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