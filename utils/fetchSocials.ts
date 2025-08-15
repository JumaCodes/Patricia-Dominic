import { Social } from "@/typings";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

export const fetchSocials = async (): Promise<Social[]> => {
  try {
    const query = groq`*[_type == "social"]`;
    const socials: Social[] = await sanityClient.fetch(query);
    console.log("Fetching socials:", socials);
    return socials;
  } catch (err) {
    console.error("Error fetching socials:", err);
    return [];
  }
};
