import { createClient } from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { notFound } from 'next/navigation';
import { BlogItem } from "@/app/types";

const client = createClient({
    space: process.env.SPACE_ID!,
    accessToken: process.env.ACCESS_TOKEN!,
});

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
    params: { slug: string }
}

/*Get the title and meta description fields from contentful */

/*Add the pages to the nextjs sitemap */

/* we will use generateStaticParams in combination with dynamic routes to statically generate the pages at build time 
https://www.contentful.com/blog/build-blog-next-js-tailwind-css-contentful/#richtxt-generatestaticparams
*/

export default async function BlogPage({ params }: PageProps) {
    const { slug } = params;

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

    const { title, date, content } = article.fields;

    return (
        <div>
            <h1>{title}</h1>
            <p>
                Posted on{" "}
                {date && new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>
            {/* As we cannot access the elements in content with tailwind */
        /* Tailwind allows us target children of an element with special selector */}
            <div className="[&>p]:mb-8 [&>h2]:font-extrabold">
                {content ? documentToReactComponents(content) : "No content available"}
            </div>
        </div>
    );
}