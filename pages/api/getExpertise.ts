import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Expertises } from "@/typings";

const query = groq`*[_type == "expertise"]{
  _id,
  title,
  points
}`;

type Data = {
  expertise: Expertises[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const expertise: Expertises[] = await sanityClient.fetch(query);
    res.status(200).json({ expertise });
  } catch (error) {
    console.error("Error fetching expertise:", error);
    res.status(500).json({ expertise: [] });
  }
}
