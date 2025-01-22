import Link from "next/link";

export default function Header() {
    return (
        <div className="header ">
            <div className="mx-auto max-w-7xl p-4 flex justify-between">

                <div className="logo font-extrabold text-lg">{'<Northam />'}</div>
                <div className="navigation">
                    <div className="navigation-desktop space-x-8 hidden md:flex">
                        <Link href="#">About</Link>
                        <Link href="#">Experience</Link>
                        <Link href="#">Projects</Link>
                        <Link href="#">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}