'use client'
import React, { useState } from 'react';
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IoMenu } from "react-icons/io5";
import { poetsenone } from '@/components/ui/fonts';
import { usePathname } from 'next/navigation';


export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const pathname = usePathname();

    const navItems = [
        { href: "/about", label: "About" },
        { href: "/experience", label: "Experience" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" }
    ];

    return (

        <div className="navigation-mobile flex justify-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="focus-visible:outline-none active:bg-slate-100 rounded-md">
                    <IoMenu className="h-7 w-7" />
                    <span className="sr-only">Menu</span>
                </SheetTrigger>
                <SheetContent>
                    <div className="sr-only">
                        <SheetHeader>
                            <SheetTitle>Navigation</SheetTitle>
                            <SheetDescription>
                                Mobile Navigation Menu
                            </SheetDescription>
                        </SheetHeader>
                    </div>
                    <div className="flex flex-col space-y-1 mt-6">

                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className={pathname === item.href ? " bg-neutral-100 active:bg-neutral-100 py-2 px-4" : "active:bg-neutral-100 py-2 px-4"} onClick={handleLinkClick}>{item.label}</Link>
                        ))}

                    </div>

                    <div
                        className={`${poetsenone.className} font-extrabold text-xl flex justify-center mt-12`}
                    >{'<Northam />'}</div>
                </SheetContent>
            </Sheet>
        </div>

    )
}
