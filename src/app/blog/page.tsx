import type { Metadata } from "next";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link";
import { BlogQueryResult } from "@/app/types";
import { createClient } from "contentful";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export const metadata: Metadata = {
    title: "Blog",
    description: "Dive into a web developer's raw, unfiltered chronicle of technical challenges, innovative solutions, and professional growth – transforming coding obstacles into opportunities.",
};

/*NEED TO UPDATE SITEMAP XML TO CONTAIN BLOG POSTS */

//create contenful client
/* https://www.contentful.com/blog/build-blog-next-js-tailwind-css-contentful/ */

const client = createClient({
    space: process.env.SPACE_ID!,
    accessToken: process.env.ACCESS_TOKEN!,
});

const POSTS_PER_PAGE = 6;

const getBlogEntries = async (page: number = 1): Promise<{
    entries: BlogQueryResult,
    totalPages: number
}> => {
    const skip = (page - 1) * POSTS_PER_PAGE;

    const entries = await client.getEntries({
        content_type: "blogPost",
        order: ['-fields.date'], // Sort by date, newest first
        limit: POSTS_PER_PAGE,
        skip: skip
    });

    const totalEntries = await client.getEntries({
        content_type: "blogPost"
    });

    const totalPages = Math.ceil(totalEntries.total / POSTS_PER_PAGE);

    return {
        entries,
        totalPages
    };
};

/*Keep in mind that data fetching is not happening in the browser but in the Next.js local development server. As mentioned at the beginning of the article we are, in fact, taking full advantage of the Static Rendering capabilities of Next.js and pre-rendering this page at build time. Therefore, our console log is not going to be shown in the browser console but in the terminal console.*/


// change to await page params
export default async function Blog({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const params = await searchParams;
    const page = Number(params?.page) || 1;
    const { entries: blogEntries, totalPages } = await getBlogEntries(page);

    // console.log(blogEntries.items);

    return (
        <div className="container mx-auto max-w-7xl px-4 flex-1 flex flex-col justify-center">
            <h1 className="font-poetsen text-4xl mb-4 text-center">Blog</h1>
            <p className='mb-12 text-center'>From debugging nightmares to deployment dreams, I share my journey navigating the ever-evolving landscape of web development.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                {blogEntries.items.map((singlePost) => {
                    const { slug, title, snippet, date, featuredImage } = singlePost.fields;
                    return (

                        <Link key={slug} href={`/blog/${slug}`} className="flex flex-col">
                            <Card className="flex-grow">
                                {featuredImage?.fields?.file && (
                                    <Image
                                        src={`https:${featuredImage.fields.file.url}`}
                                        alt={featuredImage.fields.title as string || title || 'Blog post image'}
                                        width={400}
                                        height={267}
                                        className="w-full h-56 object-cover rounded-t-md"
                                    />
                                )}
                                <CardHeader>
                                    <CardTitle><h2 className="font-poetsen text-xl">{title}</h2></CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    {<p>{snippet}</p>}
                                </CardContent>
                                <CardFooter>
                                    <Avatar className="w-8 h-8 mr-4">
                                        <AvatarImage src="/avatar.webp" alt="Harry Northam" />
                                        <AvatarFallback>HN</AvatarFallback>
                                    </Avatar>
                                    <p className="text-sm text-muted-foreground">
                                        Posted on{" "}
                                        {date && new Date(date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </CardFooter>
                            </Card>
                        </Link>

                    );
                })}
            </div>

            <div className="flex justify-center space-x-4 mt-10 mb-4">
                {page > 1 && (
                    <Link href={`/blog?page=${page - 1}`}>
                        <Button size="lg" className="text-base">Previous</Button>
                    </Link>
                )}
                {page < totalPages && (
                    <Link href={`/blog?page=${page + 1}`}>
                        <Button size="lg" className="text-base">Next</Button>
                    </Link>
                )}
            </div>
        </div>
    );
}
