import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "next-sanity";
import { sanityClient } from "@/sanity";
import { MYSkills} from "@/typings";
    

const query = groq`*[_type == "skill"]`;

type Data = {
    skills: MYSkills[],
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const skills: MYSkills[] = await sanityClient.fetch(query);
    res.status(200).json({ skills });
}
