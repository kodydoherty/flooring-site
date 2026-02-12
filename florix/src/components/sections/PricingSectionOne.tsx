import Link from "next/link";

const pricingRows = [
  { service: "LVP Floating Install", rate: "from $3.50 / sq ft" },
  { service: "LVP Glue-Down Install", rate: "from $3.00 / sq ft" },
  { service: "Residential Carpet Install", rate: "from $12.00 / sq yd" },
  { service: "Commercial Carpet Install", rate: "from $1.00 / sq ft" },
  { service: "Carpet Tile Install", rate: "from $10.00 / sq ft" },
  { service: "Rubber Sheet Install", rate: "from $11.00 / sq ft" },
  { service: "Rubber Tile Install", rate: "from $11.00 / sq ft" },
  { service: "Sheet Vinyl Install", rate: "from $10.00 / sq ft" },
  { service: "Vinyl Cove (Cove Base)", rate: "from $9.00 / linear ft" },
  { service: "Wood Baseboards (Provide & Install)", rate: "from $3.50 / lf" },
  { service: "Rubber Base (Provide & Install)", rate: "from $4.00 / lf" },
  { service: "Millwork Baseboards (Install Only)", rate: "from $6.00 / lf" },
];

export default function PricingSectionOne() {
    return (
        <div id="pricing-1" className="pricing-section section-padding pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">Flooring Services & Straightforward Labor Rates</h2>
                            <p className="pt-20 wow fadeInUp animated" data-wow-delay=".4s">Transparent pricing for all our flooring services. Final quote depends on room layout, stairs, subfloor condition, and tear-out of old flooring.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="pricing-table-wrap">
                            <table className="pricing-table">
                                <thead>
                                    <tr>
                                        <th>Service</th>
                                        <th>Labor Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pricingRows.map((row, i) => (
                                        <tr key={i}>
                                            <td>{row.service}</td>
                                            <td>{row.rate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="pricing-disclaimer mt-4">
                            <p>Final quote depends on room layout, stairs, subfloor condition, and tear-out of old flooring. Use the calculator below for a ballpark price range, then we&apos;ll confirm everything with a free in-home visit.</p>
                        </div>
                    </div>
                </div>
                <div id="price-calculator" className="row mt-5">
                    <div className="col-12">
                        <div className="price-calculator-placeholder">
                            <h3>Get Your Instant Price Estimate</h3>
                            <p>Interactive pricing calculator coming soon</p>
                            <Link href="#contact" className="white-btn mt-3">Request In-Home Quote <i className="fa-light fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
