"use client";

import { usePathname } from "next/navigation";
import FooterOne from "@/components/footer/FooterOne";
import FooterFour from "@/components/footer/FooterFour";

export default function Footer() {
    const pathname = usePathname();

    if (pathname === "/contact") {
        return <FooterFour />;
    }
    return <FooterOne />;
}