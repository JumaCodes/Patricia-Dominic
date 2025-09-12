import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Expertises } from "@/typings";

export const fetchExpertise = async (): Promise<Expertises[]> => {
  try {
    const query = groq`*[_type == "expertise"]{
      _id,
      title,
      points
    }`;
    const expertise: Expertises[] = await sanityClient.fetch(query);
    return expertise;
  } catch (err) {
    console.error("Error fetching expertise:", err);
    return [];
  }
};

