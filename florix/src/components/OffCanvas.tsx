import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/img/SPERSKES-NO-BACKROUND.png"
import offCanvasImg from "@/assets/img/off-canvas.jpg"

interface OffCanvasProps {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OffCanvas({ isActive, setIsActive }: OffCanvasProps) {
    return (
        <>
            <div className={`extra-info ${isActive ? 'active' : ''}`}>
                <div className="close-icon menu-close" onClick={() => setIsActive(false)}>
                    <button>
                        <i className="las la-times"></i>
                    </button>
                </div>
                <div className="logo-side">
                    <div className="logo">
                        <Link href="/">
                            <Image src={logoImg} alt="Sperske's Floors & More"/>
                        </Link>
                    </div>
                </div>
                <div className="side-info">
                    <div className="contact-list mb-40">
                        <p>Welcome to Sperske&apos;s Floors &amp; More — family-owned flooring installation serving Reno, Tahoe, and the greater area since 2014.</p>
                        <Image src={offCanvasImg} alt="" className="h-auto"/>

                        <div className="mt-30 mb-30">
                            <Link href="/contact" className="white-btn">Get In Touch</Link>
                        </div>
                    </div>
                    <div className="social-area-wrap">
                        <a href="#"><i className="lab la-facebook-f"></i></a>
                        <a href="#"><i className="lab la-instagram"></i></a>
                        <a href="#"><i className="lab la-linkedin-in"></i></a>
                        <a href="#"><i className="lab la-skype"></i></a>
                    </div>
                </div>
            </div>

            <div className={`offcanvas-overlay ${isActive ? 'active' : ''}`} onClick={() => setIsActive(false)}></div>
        </>
    )
}