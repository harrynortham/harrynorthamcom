import { poetsenone } from '@/components/ui/fonts';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience",
    description: "Pioneering 12-year web odyssey: Transforming digital landscapes with innovative products that connect millions worldwide, revealing the technical expertise behind global-scale solutions.",
};

export default function Experience() {
    return (
        <div className="mx-auto max-w-7xl px-4 text-center flex-1 flex flex-col justify-center">
            <div className="intro-text py-8 max-w-2xl">
                <h1 className={`${poetsenone.className} text-4xl mb-4`}>Experience</h1>
                <p>With over 12 years of experience in the web industry, I&apos;ve worked on products that are used by millions globally. Below you&apos;ll find the key roles that have shaped my technical expertise.</p>
            </div>
        </div>
    )
}