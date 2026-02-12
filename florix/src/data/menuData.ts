export interface SubMenuItem {
    title: string;
    path: string;
}

export interface MenuItem {
    title: string;
    path?: string;
    subMenu?: SubMenuItem[];
    isExternal?: boolean;
}

export const menuData: MenuItem[] = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Projects", path: "/projects" },
    { title: "Pricing", path: "/price" },
    { title: "FAQs", path: "/faq" },
    { title: "Contact", path: "/contact" },
];
