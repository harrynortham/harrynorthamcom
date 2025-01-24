'use client'

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from 'next/navigation';
import { poetsenone } from '@/components/ui/fonts';
import MobileMenu from "./MobileMenu";

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { href: "/about", label: "About" },
        { href: "/experience", label: "Experience" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" }
    ];

    return (
        <div className="header mb-6 sticky top-0 z-50  bg-white/75 backdrop-blur-md">
            <div className="mx-auto max-w-7xl p-4 flex justify-between">
                <div
                    className={`${poetsenone.className} logo font-extrabold text-xl flex justify-center`}
                >
                    <Link href="/">{'<Northam />'}</Link>
                </div>
                <div className="navigation flex justify-center">
                    <div className="navigation-desktop hidden md:flex md:justify-center">
                        <div className="space-x-2 translate-y-0.5">
                            {navItems.map((item) => (
                                <Link key={item.href} href={item.href}>
                                    <Button
                                        variant="ghost"
                                        className={pathname === item.href ? "text-base bg-neutral-100" : "text-base"}

                                    >
                                        {item.label}
                                    </Button>
                                </Link>
                            ))}
                        </div>

                    </div>

                    <MobileMenu />
                </div>
            </div>
        </div>
    )
}