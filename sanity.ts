import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

// 1️⃣ Config
export const config = {
  projectId: 'c8lqgnbi',
  dataset: 'production',
  apiVersion: '2025-01-01', // update to current date if you want
  useCdn: true,
};

// 2️⃣ Create client
export const sanityClient = createClient(config);

// 3️⃣ Create image URL builder
const builder = createImageUrlBuilder(sanityClient);

// 4️⃣ Safe helper
export const urlFor = (source: any) => {
  if (!source) return null;
  return builder.image(source);
};
