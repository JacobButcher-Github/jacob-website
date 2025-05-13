import React from "react";
import { FaReact, FaCaretUp, FaWind } from "react-icons/fa";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import { ProjectInfo } from "../../components/ProjectList";
import ProjectBanner from "../../components/project/ProjectBanner";
import ProjectPane from "../../components/project/ProjectPane";
import ProjectLinks from "../../components/project/ProjectLinks";

const projectItem: ProjectInfo = {
  title: "Website",
  id: "website",
  description: "Landing page for all other projects, info on self",
  imageLocations: [
    "/images/websiteImages/index.png",
    "/images/websiteImages/about.png",
    "/images/websiteImages/blog.png",
    "/images/websiteImages/projects.png",
  ],
  tagsList: [
    {
      icon: <FaCaretUp key="next" className="mr-1" />,
      title: "Next.JS",
      link: "https://nextjs.org/",
    },
    {
      icon: <FaReact key="react" className="mr-1" />,
      title: "React",
      link: "https://react.dev/",
    },
    {
      icon: <FaWind key="tailwind" className="mr-1" />,
      title: "Tailwind CSS",
      link: "https://tailwindcss.com/",
    },
  ],
  git: "https://github.com/JacobButcher-Github/jacob-website",
  route: "/projects/website",
  owner: "JacobButcher-Github",
  repo: "jacob-website",
  headers: {},
  bannerLocation: "/images/Websitebackground.png",
  features: ["feat1", "feat2", "feat3"],
  about: {},
};

const Website = () => {
  return (
    <>
      <Head>
        <title>Jacob Butcher - Project Website</title>
      </Head>
      <div className="bg-gradient-to-b from-bgMain to-bgSecondary font-motiva-sans h-screen overflow-auto">
        <NavBar />
        <div className="">
          <div className="flex flex-col items-center text-mainText font-motiva-sans p-3 gap-2">
            <div className="bg-bgMain w-5/6 rounded-xl flex items-center p-3">
              <h1 className="text-2xl font-bold ml-3">Project Website</h1>
            </div>
            <div className="bg-bgMain w-5/6 rounded-xl flex items-center p-3">
              <ProjectBanner item={projectItem} />
            </div>
            <div className="bg-bgMain w-5/6 rounded-xl flex items-center p-3">
              <ProjectPane item={projectItem} />
            </div>
            <div className="bg-bgMain w-5/6 rounded-xl flex items-center p-3">
              <ProjectLinks item={projectItem} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Website;
