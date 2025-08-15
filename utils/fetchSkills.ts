import { MYSkills } from "@/typings";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

export const fetchSkills = async (): Promise<MYSkills[]> => {
  try {
    const query = groq`*[_type == "skill"]`;
    const skills: MYSkills[] = await sanityClient.fetch(query);
    console.log("Fetching skills:", skills);
    return skills;
  } catch (err) {
    console.error("Error fetching skills:", err);
    return [];
  }
};
