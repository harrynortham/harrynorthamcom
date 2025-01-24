import { poetsenone } from '@/components/ui/fonts';
import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Blog",
    description: "Dive into a web developer's raw, unfiltered chronicle of technical challenges, innovative solutions, and professional growth – transforming coding obstacles into opportunities.",
};

export default function Blog() {
    return (
        <div className="mx-auto max-w-7xl px-4 text-center flex-1 flex flex-col justify-center">
            <div>
                <h1 className={`${poetsenone.className} text-4xl  mb-4`}>Blog</h1>
                <p className='mb-4'>From debugging nightmares to deployment dreams, I share my journey navigating the ever-evolving landscape of web development.</p>
                <h2>Install <Link className="text-blue-600" target="_blank" href="https://www.sanity.io/manage/personal/project/4r51hjlm/getting-started">Sanity CMS</Link> </h2>
            </div>
        </div>
    )
}