'use client'
import React, { useState } from 'react';
import Link from "next/link";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IoMenu, IoMailOutline } from "react-icons/io5";
import { poetsenone } from '@/components/ui/fonts';


export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };
    return (

        <div className="navigation-mobile flex justify-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger aria-label="Open Mobile Navigation Menu">
                    <IoMenu className="h-7 w-7" />
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
                    <div className="flex flex-col space-y-4 mt-6">
                        <Link href="/about" onClick={handleLinkClick}>About</Link>
                        <Link href="/experience" onClick={handleLinkClick}>Experience</Link>
                        <Link href="/projects" onClick={handleLinkClick}>Projects</Link>
                        <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
                        <Link href="/contact" onClick={handleLinkClick}>
                            <Button size="lg" className="text-base">Contact <IoMailOutline /></Button>
                        </Link>
                    </div>
                    <div
                        className={`${poetsenone.className} font-extrabold text-xl flex justify-center mt-12`}
                    >{'<Northam />'}</div>
                </SheetContent>
            </Sheet>
        </div>

    )
}
