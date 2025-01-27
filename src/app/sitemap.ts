import type { MetadataRoute } from "next";
import { createClient } from "contentful";
import { BlogQueryResult } from "@/app/types";

const DOMAIN = "https://www.harrynortham.com";

//create connection to contentful
const client = createClient({
  space: process.env.SPACE_ID!,
  accessToken: process.env.ACCESS_TOKEN!,
});

// Fetch all blog posts from Contentful
export const getBlogEntries = async (): Promise<{
  entries: BlogQueryResult;
}> => {
  const entries = await client.getEntries({
    content_type: "blogPost",
    order: ["-fields.date"], // Sort by date, newest first
  });

  return {
    entries,
  };
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { entries: blogEntries } = await getBlogEntries();

  // Map blog posts to URL objects
  const blogPostUrls: MetadataRoute.Sitemap = blogEntries.items.map(
    (singlePost) => ({
      url: `${DOMAIN}/blog/${singlePost.fields.slug}`,
      lastModified: singlePost.fields.date,
      changeFrequency: "weekly",
      priority: 0.5,
    })
  );

  // Static URLs
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${DOMAIN}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${DOMAIN}/experience`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${DOMAIN}/projects`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${DOMAIN}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${DOMAIN}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  return [...staticUrls, ...blogPostUrls];
}
