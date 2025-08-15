import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Experiences } from "@/typings";

const query = groq`*[_type == "experience"]{
  ...,
  technologies[]->
}`;

type Data = {
  experiences: Experiences[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const experiences: Experiences[] = await sanityClient.fetch(query);
    res.status(200).json({ experiences });
  } catch (error) {
    console.error("Error fetching experiences:", error);
    res.status(500).json({ experiences: [] });
  }
}
