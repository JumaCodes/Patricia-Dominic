import type { GetStaticProps } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PageInfo, Project, Experiences, MYSkills, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  experiences: Experiences[];
  socials: Social[];
  skills: MYSkills[];
};

const Home = ({ pageInfo, projects, experiences, socials, skills }: Props) => {
  const [showButton, setShowButton] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setShowButton(container.scrollTop > 100); // show after 100px inside container
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="h-screen w-screen bg-[rgb(36,36,36)] text-white 
             overflow-y-scroll overflow-x-hidden z-0
             scrollbar-thin scrollbar-track-gray-400/20 
             scrollbar-thumb-[#F7AB0A]/80 scroll-smooth"
    >
      <Head>
        <title>{pageInfo.name} Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="min-h-screen">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="min-h-screen mb-40 mt-20">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="min-h-screen mb-40 mt-20">
        <Experience experiences={experiences} />
      </section>

      <section id="skills" className="min-h-screen mb-40 mt-20">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="min-h-screen mt-20">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="min-h-screen mb-20">
        <Contact />

        {/* Mobile Back to Top Button */}
        <div className="flex items-center justify-center mt-6 md:hidden">
          <Link href="#hero">
            <img
              src="https://pbs.twimg.com/media/GyEHoBdWoAAM_4c?format=jpg&name=900x900"
              alt="Back to top"
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer transition duration-300"
            />
          </Link>
        </div>
      </section>

      {/* Desktop Floating Back to Top */}
      {showButton && (
        <Link href="#hero">
          <footer className="hidden md:flex fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer">
            <img
              src="https://pbs.twimg.com/media/GyEHoBdWoAAM_4c?format=jpg&name=900x900"
              alt="Back to top"
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer transition duration-300"
            />
          </footer>
        </Link>
      )}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const [pageInfo, projects, experiences, skills, socials] =
      await Promise.all([
        fetchPageInfo(),
        fetchProjects(),
        fetchExperiences(),
        fetchSkills(),
        fetchSocials(),
      ]);

    return {
      props: { pageInfo, projects, experiences, skills, socials },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);

    return {
      props: {
        pageInfo: {} as PageInfo,
        projects: [],
        experiences: [],
        skills: [],
        socials: [],
      },
      revalidate: 10,
    };
  }
};
