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
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo.name} Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start mb-40">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center mb-40">
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

      {/* Contact */}
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

// ====================================
// getStaticProps with Promise.all
// ====================================
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
      revalidate: 10, // ISR: regenerate every 10 seconds
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);

    // fallback empty data if fetch fails
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
