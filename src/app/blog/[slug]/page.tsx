import { createClient } from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { notFound } from 'next/navigation';
import { BlogItem } from "@/app/types";
import { poetsenone } from '@/components/ui/fonts';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";
import type { Metadata } from "next";

const client = createClient({
    space: process.env.SPACE_ID!,
    accessToken: process.env.ACCESS_TOKEN!,
});

/* ADD TWITTER INFOGRAPH TO BLOG POSTS FOR SEO */

/* NEED TO SETUP A WEBHOOK IN CONTENTFUL AND VERCEL TO DEPLOY ON UPDATE https://www.contentful.com/blog/build-blog-next-js-tailwind-css-contentful/#richtxt-setting-up-a-webhook */

export async function generateStaticParams() {
    const queryOptions = {
        content_type: "blogPost",
        select: "fields.slug",
    };
    const articles = await client.getEntries(queryOptions)
    return articles.items.map((article) => ({
        slug: article.fields.slug,
    }));
}

type PageProps = {
    params: Promise<{ slug: string }> //do not edit this line
}

/*Get the title and meta description fields from contentful */


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const slug = (await params).slug //do not edit this line

    const fetchBlogPost = async (slug: string): Promise<BlogItem | null> => {
        const queryOptions = {
            content_type: "blogPost",
            "fields.slug[match]": slug,
        };
        const queryResult = await client.getEntries(queryOptions);
        return queryResult.items.length > 0 ? queryResult.items[0] : null;
    };

    const article = await fetchBlogPost(slug);

    if (!article) {
        return {
            title: 'Blog Post Not Found',
            description: 'The requested blog post could not be found.'
        };
    }

    const { title, metaDescription, featuredImage } = article.fields;

    return {
        title: title || 'Blog Post',
        description: metaDescription || 'A blog post from our website',
        openGraph: featuredImage?.fields?.file ? {
            images: [`https:${featuredImage.fields.file.url}`]
        } : undefined
    };
}


/*Add the pages to the nextjs sitemap */

/* we will use generateStaticParams in combination with dynamic routes to statically generate the pages at build time 
https://www.contentful.com/blog/build-blog-next-js-tailwind-css-contentful/#richtxt-generatestaticparams
*/

export default async function BlogPage({ params }: PageProps) {
    const slug = (await params).slug //do not edit this line

    const fetchBlogPost = async (slug: string): Promise<BlogItem | null> => {
        const queryOptions = {
            content_type: "blogPost",
            "fields.slug[match]": slug,
        };
        const queryResult = await client.getEntries(queryOptions);
        return queryResult.items.length > 0 ? queryResult.items[0] : null;
    };

    const article = await fetchBlogPost(slug);

    // If no article is found, call notFound()
    if (!article) {
        notFound();
    }

    const { title, date, content, featuredImage } = article.fields;



    return (
        <div className="container mx-auto max-w-3xl px-4 flex-1 flex flex-col justify-center">
            <h1 className={`${poetsenone.className} text-4xl text-center mb-4`}>{title}</h1>
            <div className="blog-info flex justify-center mb-6">
                <Avatar className="w-8 h-8 mr-4">
                    <AvatarImage src="/avatar.webp" alt="Harry Northam" />
                    <AvatarFallback>HN</AvatarFallback>
                </Avatar>
                <div className="blog-date flex flex-col justify-center">
                    <span>
                        Posted on {date && new Date(date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                </div>
            </div>

            <div className="blog-image">
                {featuredImage?.fields?.file && (
                    <Image
                        src={`https:${featuredImage.fields.file.url}`}
                        alt={featuredImage.fields.title as string || title || 'Blog post image'}
                        width={600}
                        height={400}
                        className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-md mb-8"
                    />
                )}
            </div>
            {/* As we cannot access the elements in content with tailwind */
                /* Tailwind allows us target children of an element with special selector */
            }
            <div className="[&>p]:mb-8 [&>h2]:font-extrabold">
                {content ? documentToReactComponents(content) : "No content available"}
            </div>
        </div >
    );
}