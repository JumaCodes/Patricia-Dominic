import { Project } from "@/typings";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const query = groq`*[_type == "project"]{..., technologies[]->}`;
    const projects: Project[] = await sanityClient.fetch(query);
    console.log("Fetching projects:", projects);
    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return [];
  }
};
