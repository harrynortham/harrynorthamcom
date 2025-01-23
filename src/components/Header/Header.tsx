'use client'

import Link from "next/link";
import { Button } from "../ui/button";

import { IoMailOutline } from "react-icons/io5";
import { poetsenone } from '@/components/ui/fonts';

import MobileMenu from "./MobileMenu";

export default function Header() {


    return (
        <div className="header">
            <div className="mx-auto max-w-7xl p-4 flex justify-between">
                <div
                    className={`${poetsenone.className} logo font-extrabold text-xl flex justify-center`}
                >
                    <Link href="/">{'<Northam />'}</Link>
                </div>
                <div className="navigation flex justify-center">
                    <div className="navigation-desktop hidden md:flex md:justify-center">
                        <div className="space-x-2 translate-y-0.5">
                            <Link href="/about"><Button variant="ghost" className="text-base">About</Button></Link>
                            <Link href="/experience"><Button variant="ghost" className="text-base">Experience</Button></Link>
                            <Link href="/projects"><Button variant="ghost" className="text-base">Projects</Button></Link>
                            <Link href="/blog"><Button variant="ghost" className="text-base">Blog</Button></Link>
                        </div>
                        <Link className="ml-6" href="/contact">
                            <Button className="text-base">Contact <IoMailOutline /></Button>
                        </Link>
                    </div>


                    <MobileMenu />


                </div>
            </div>
        </div>
    )
}