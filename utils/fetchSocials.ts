import { Social } from "@/typings";

export const fetchSocials = async () => {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (typeof window === "undefined"
      ? "http://localhost:3000" // server-side fallback
      : "");

  const res = await fetch(`${baseUrl}/api/getSocials`);

  if (!res.ok) {
    throw new Error(`Failed to fetch socials: ${res.statusText}`);
  }

  const data = await res.json();
  const socials: Social[] = data.socials;

  console.log("Fetching socials:", socials);
  return socials;
};
