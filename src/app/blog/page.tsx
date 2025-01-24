/* page.tsx */
import type { Metadata } from "next";
import { poetsenone } from '@/components/ui/fonts';

export const metadata: Metadata = {
    title: "Blog",
    description: "Dive into a web developer's raw, unfiltered chronicle of technical challenges, innovative solutions, and professional growth – transforming coding obstacles into opportunities.",
};

import Link from "next/link";
import { BlogQueryResult } from "@/app/types";
import { createClient } from "contentful";

//create contenful client
/* https://www.contentful.com/blog/build-blog-next-js-tailwind-css-contentful/ */

const client = createClient({
    space: process.env.SPACE_ID!,
    accessToken: process.env.ACCESS_TOKEN!,
});

const getBlogEntries = async (): Promise<BlogQueryResult> => {
    const entries = await client.getEntries({ content_type: "blogPost" });
    return entries;
};
/*Keep in mind that data fetching is not happening in the browser but in the Next.js local development server. As mentioned at the beginning of the article we are, in fact, taking full advantage of the Static Rendering capabilities of Next.js and pre-rendering this page at build time. Therefore, our console log is not going to be shown in the browser console but in the terminal console.*/

export default async function Home() {
    const blogEntries = await getBlogEntries();
    return (
        <div className="mx-auto max-w-7xl px-4 text-center flex-1 flex flex-col justify-center">
            <div>
                <h1 className={`${poetsenone.className} text-4xl  mb-4`}>Blog</h1>
                <p className='mb-4'>From debugging nightmares to deployment dreams, I share my journey navigating the ever-evolving landscape of web development.</p>
                {blogEntries.items.map((singlePost) => {
                    const { slug, title, date } = singlePost.fields;
                    return (
                        <div key={slug}>
                            <Link href={`/blog/${slug}`}>
                                <h2>{title}</h2>
                                <span>
                                    Posted on{" "}
                                    {date && new Date(date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            </Link>
                        </div>
                    );
                })}
            </div> </div>
    );
}