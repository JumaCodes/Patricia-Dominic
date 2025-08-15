import {  Experiences } from "@/typings"


export const fetchExperiences = async () => {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (typeof window === "undefined" ? "http://localhost:3000" : "");

  const res = await fetch(`${baseUrl}/api/getExperiences`);
  const data = await res.json();
  const experiences: Experiences[] = data.experiences;
  console.log("Fetching experiences:", experiences);
  return experiences;
};
