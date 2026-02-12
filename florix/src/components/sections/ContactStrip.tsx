export default function ContactStrip() {
    return (
        <section className="contact-strip gray-bg py-3">
            <div className="container">
                <div className="contact-strip-inner d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center gap-2 gap-md-0">
                    <a href="tel:+17759973848" className="contact-strip-link">Call or Text: +1 (775) 997-3848</a>
                    <span className="contact-strip-sep d-none d-md-inline">•</span>
                    <a href="mailto:info@sperskesfloors.com" className="contact-strip-link">Email: info@sperskesfloors.com</a>
                    <span className="contact-strip-sep d-none d-md-inline">•</span>
                    <span className="contact-strip-text">Sperske&apos;s Floors & More</span>
                    <span className="contact-strip-sep d-none d-md-inline">•</span>
                    <span className="contact-strip-text">17810 Thunder River Dr, Reno, NV 89508</span>
                    <span className="contact-strip-sep d-none d-md-inline">•</span>
                    <span className="contact-strip-text">NV Contractor License #: Available on request</span>
                </div>
            </div>
        </section>
    );
}
