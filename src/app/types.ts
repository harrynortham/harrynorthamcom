import { Document } from "@contentful/rich-text-types";
import { Asset } from "contentful";

export type BlogItem = {
  fields: {
    title?: string;
    metaDescription?: string;
    slug?: string;
    snippet?: string;
    date?: Date;
    content?: Document;
    featuredImage?: Asset; // Add this line
  };
};

export type BlogItems = ReadonlyArray<BlogItem>;

export type BlogQueryResult = {
  items: BlogItems;
};
