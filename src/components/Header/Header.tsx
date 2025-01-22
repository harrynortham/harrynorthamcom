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


export default function Header() {
    return (
        <div className="header ">
            <div className="mx-auto max-w-7xl p-4 flex justify-between">

                <div className="logo font-extrabold text-lg flex justify-center">{'<Northam />'}</div>
                <div className="navigation">
                    <div className="navigation-desktop space-x-8 hidden md:flex">
                        <Link href="#">About</Link>
                        <Link href="#">Experience</Link>
                        <Link href="#">Projects</Link>
                        <Link href="#">Contact</Link>
                    </div>
                    <div className="navigation-mobile flex justify-center md:hidden">
                        <Sheet>
                            <SheetTrigger><IoMenu className="h-7 w-7" /></SheetTrigger>
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
                                    <Link href="#">About</Link>
                                    <Link href="#">Experience</Link>
                                    <Link href="#">Projects</Link>
                                    <Link href="#">Contact</Link>
                                </div>
                            </SheetContent>
                        </Sheet>

                    </div>
                </div>
            </div>
        </div>
    )
}