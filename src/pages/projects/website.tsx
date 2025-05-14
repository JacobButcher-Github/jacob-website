import React from "react";
import { FaReact, FaCaretUp, FaWind } from "react-icons/fa";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import { ProjectInfo } from "../../components/ProjectList";
import Project from "../../components/Project";

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
  features: [
    "React",
    "TailwindCSS",
    "Next.js",
    "Server Heartbeat Tracker",
    "Blog",
  ],
  about: {
    "Server Heartbeat Tracker":
      "Using Next.js Api Routes, pings my personal server every 30 minutes to check if it's online.",
    "Personal Blog":
      "Blog that uses matter and remark to convert markdown posts into blog posts. Will never have another post, but it does exist.",
    "Easily added new projects":
      "Utilizing React components, easily add new projects to the list to show off.",
    "Link to other interesting projects":
      "A location that lists my projects and links to any interesting ones",
  },
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
          <Project item={projectItem} />
        </div>
      </div>
    </>
  );
};

export default Website;
