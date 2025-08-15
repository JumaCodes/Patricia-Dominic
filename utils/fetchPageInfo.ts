import { PageInfo } from "@/typings";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

export const fetchPageInfo = async (): Promise<PageInfo> => {
  try {
    const query = groq`*[_type == "pageInfo"][0]`;
    const pageInfo: PageInfo = await sanityClient.fetch(query);
    console.log("Fetching page info:", pageInfo);
    return pageInfo;
  } catch (err) {
    console.error("Error fetching page info:", err);
    return {} as PageInfo;
  }
};
