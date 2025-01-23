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
import { IoMenu } from "react-icons/io5";
import { poetsenone } from '@/components/ui/fonts';


export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };
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
                        <Link className="active:bg-neutral-100 py-2 px-4" href="/about" onClick={handleLinkClick}>About</Link>
                        <Link className="active:bg-neutral-100 py-2 px-4" href="/experience" onClick={handleLinkClick}>Experience</Link>
                        <Link className="active:bg-neutral-100 py-2 px-4" href="/projects" onClick={handleLinkClick}>Projects</Link>
                        <Link className="active:bg-neutral-100 py-2 px-4" href="/blog" onClick={handleLinkClick}>Blog</Link>
                    </div>
                    <div className="mt-12"><Link href="/contact" onClick={handleLinkClick}>
                        <Button size="lg" className="text-base w-full">Contact</Button>
                    </Link></div>
                    <div
                        className={`${poetsenone.className} font-extrabold text-xl flex justify-center mt-12`}
                    >{'<Northam />'}</div>
                </SheetContent>
            </Sheet>
        </div>

    )
}
