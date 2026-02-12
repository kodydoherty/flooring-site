export default function ContactSectionOne() {
    return (
        <div className="contact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5">
                        <div className="contact-text">
                            <p>Have a question about our services or want to get started on your design project? We are
                                here to help! Fill out the contact form below and one of our team members will get back
                                to you within 24 hours. Alternatively, you can reach out to us via phone or email using
                                the contact information provided below. We can't wait to hear from you!</p>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6">
                        <div className="subimit-form-wrap">
                            <div className="section-title">
                                <h2 className="visible-slowly-right">Submit Form</h2>
                            </div>
                            <form action="#">
                                <input type="text" placeholder="Your Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="tel" placeholder="Phone Number"/>
                                <textarea name="message" cols={30} rows={10} placeholder="Message"></textarea>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="contact-info-wrap">
                    <div className="row mt-60">
                        <div className="col-xl-6">
                            <div className="google-map">
                                <iframe
                                    title="Sperske's Floors & More - 17810 Thunder River Dr, Reno, NV 89508"
                                    src="https://maps.google.com/maps?q=17810+Thunder+River+Dr,+Reno,+NV+89508&z=14&ie=UTF8&output=embed"
                                    width="600"
                                    height="600"
                                    className="border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                    aria-hidden="false"
                                />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-info">
                                <div className="section-title">
                                    <h2 className="visible-slowly-right">Contact Info</h2>
                                </div>
                                <div className="contact-info-inner">
                                    <div className="single-contact-info wow fadeInUp animated" data-wow-delay="200ms">
                                        <p>Email</p>
                                        <h4><a href="mailto:info@sperskesfloors.com">info@sperskesfloors.com</a></h4>
                                    </div>
                                    <div className="single-contact-info wow fadeInUp animated" data-wow-delay="400ms">
                                        <p>Phone</p>
                                        <h4><a href="tel:+17759973848">+1 (775) 997-3848</a></h4>
                                    </div>
                                    <div className="single-contact-info wow fadeInUp animated" data-wow-delay="600ms">
                                        <p>Address</p>
                                        <h4>17810 Thunder River Dr, Reno, NV 89508</h4>
                                    </div>
                                    <div className="social-area">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-skype"></i></a>
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