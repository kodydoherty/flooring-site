"use client";

import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/img/SPERSKES-NO-BACKROUND.png";
import MainMenu from "@/components/header/MainMenu";
import MobileMenu from "@/components/header/MobileMenu";
import OffCanvas from "@/components/OffCanvas";
import {useRef, useState} from "react";
import SearchMenu from "@/components/header/SearchMenu";
import useStickyHeaders from "@/utils/useStickyHeaders";

export default function HeaderOne() {
    const [isActive, setIsActive] = useState(false);
    const headerRef = useRef(null);

    useStickyHeaders([headerRef]);

    return (
        <div id="header-1" className="header-area absolute-header">
            <div ref={headerRef} id="header-sticky">
                <div className="navigation">
                    <div className="container-fluid">
                        <div className="header-inner-box">

                            {/*-- Main Menu  --*/}
                            <MainMenu/>

                            {/*-- Logo --*/}
                            <div className="logo">
                                <Link className="navbar-brand" href="/">
                                    <Image src={logoImg} alt="Sperske's Floors & More" className="h-auto"/>
                                </Link>
                            </div>

                            <div className="header-right">

                                {/*-- Search Button  --*/}
                                <SearchMenu/>
                                <div className="contact-number d-none">
                                    <div className="icon"><i className="las la-phone-volume"></i></div>
                                    <div className="title"><h4>1 800 458 56 97</h4></div>
                                </div>
                                {/*-- Header Button --*/}
                                {/*-- <a href="quote.html" className="theme-btn d-none d-lg-inline-block">Request a Quote</a> --*/}
                                <div className="header-btn">
                                    <div className="menu-trigger" onClick={() => setIsActive(true)}>
                                        <span className="lines"></span>
                                        <span className="lines"></span>
                                        <span className="lines"></span>
                                    </div>
                                </div>

                            </div>

                            {/*-- Mobile Menu --*/}
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
            </div>

            <OffCanvas isActive={isActive} setIsActive={setIsActive}/>
        </div>
    )
}