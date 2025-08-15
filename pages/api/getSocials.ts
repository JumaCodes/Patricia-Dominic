import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Social } from "@/typings";

const query = groq`*[_type == "social"]`;

type Data = {
  socials: Social[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const socials: Social[] = await sanityClient.fetch(query);
    res.status(200).json({ socials });
  } catch (error) {
    console.error("Error fetching socials:", error);
    res.status(500).json({ socials: [] });
  }
}
