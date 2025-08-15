import { Experiences } from "@/typings";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

export const fetchExperiences = async (): Promise<Experiences[]> => {
  try {
    const query = groq`*[_type == "experience"]{..., technologies[]->}`;
    const experiences: Experiences[] = await sanityClient.fetch(query);
    console.log("Fetching experiences:", experiences);
    return experiences;
  } catch (err) {
    console.error("Error fetching experiences:", err);
    return [];
  }
};
