import React from "react";
import { FaReact, FaCaretUp, FaWind } from "react-icons/fa";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import { ProjectItem } from "../../components/ProjectList";

interface tags {
  icon: React.ReactNode;
  title: string;
  link: string;
}

interface ProjectInfo extends ProjectItem {
  owner: string;
  repo: string;
  headers: { [key: string]: string };
  bannerLocation: string;
  features: string[];
  about: { [key: string]: string };
}

const projectItems: ProjectInfo[] = [
  {
    title: "Website",
    description: "Landig page for all other projects",
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
    route: null,
    owner: "JacobButcher-Github",
    repo: "jacob-website",
    headers: {},
    bannerLocation: "../../../public/images/Websitebackground.png",
    features: ["feat1", "feat2", "feat3"],
    about: {},
  },
];
