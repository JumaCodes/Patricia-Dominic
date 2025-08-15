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
    <div
      className="h-screen w-screen bg-[rgb(36,36,36)] text-white 
             overflow-y-scroll overflow-x-hidden z-0
             scrollbar-thin scrollbar-track-gray-400/20 
             scrollbar-thumb-[#F7AB0A]/80 scroll-smooth"
    >
      <Head>
        <title>{pageInfo.name} Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="min-h-screen">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="min-h-screen mb-40 mt-20">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="min-h-screen mb-40 mt-20">
        <Experience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="min-h-screen mb-40 mt-20">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen mb-20 mt-20">
        <Projects projects={projects} />
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen mb-20">
        <Contact />
      </section>

      {/* Footer / Back to top */}
      <Link href="#hero">
        <footer className="fixed bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              src="https://pbs.twimg.com/media/GyEHoBdWoAAM_4c?format=jpg&name=900x900"
              alt="Back to top"
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
