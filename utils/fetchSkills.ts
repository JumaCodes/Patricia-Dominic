import { MYSkills } from "@/typings"


export const fetchSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)

    const data = await res.json()
    const skills: MYSkills[] = data.skills;
    console.log('Fetching skills:', skills);
    return skills
}