import type { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import { Experiences, PageInfo, Project, MYSkills, Social } from "@/typings";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  experiences: Experiences[];
  socials: Social[];
  skills: MYSkills[];
};

const Home = ({pageInfo, projects, experiences, socials, skills}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Steve-John Olumese's Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
      </Head>

      {/* Header Section */}
      <Header socials={socials} />
      {/* Hero */}
      <section
        id="hero"
        // className="mt-20"
        className="snap-start mb-40"
      >
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section
        id="about"
        // className="mt-40"
        className="snap-center mb-40"
      >
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center mb-40">
        <Experience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start mb-40">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start mb-40">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              src="https://pbs.twimg.com/media/GyEHoBdWoAAM_4c?format=jpg&name=900x900"
              alt=""
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer transition duration-300"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const pageInfo: PageInfo = await fetchPageInfo();
    const skills: MYSkills[] = await fetchSkills();
    const experiences: Experiences[] = await fetchExperiences();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
      props: {
        socials,
        projects,
        experiences,
        pageInfo,
        skills
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);

    return {
      props: {
        socials: [],
        projects: [],
        experiences: [],
        pageInfo: {} as PageInfo,
        skills: []
      },
      revalidate: 10,
    };
  }
};
