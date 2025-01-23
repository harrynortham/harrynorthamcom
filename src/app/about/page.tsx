import { poetsenone } from '@/components/ui/fonts';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Harry Northam, a passionate web developer based in Gibraltar, delivers cutting-edge digital solutions with expert coding skills, driving user engagement.",
};

export default function About() {
    return (
        <div className="mx-auto max-w-7xl px-4 text-center flex-1 flex flex-col justify-center">
            <div>
                <h1 className={`${poetsenone.className} text-4xl mb-4`}>About</h1>
            </div>
        </div>
    )
}