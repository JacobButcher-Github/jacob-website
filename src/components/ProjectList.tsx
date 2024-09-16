import React from "react";
import Link from 'next/link';
import ProjectCard from "./ProjectCard";
import { FaReact, FaCaretUp, FaWind } from 'react-icons/fa';

interface tags {
  icon: React.ReactNode;
  title: string,
  link: string
}

export interface ProjectItem {
  title: string,
  description: string,
  imageLocations: string[],
  tagsList: tags[];
  git: string,
  route: string
}

const projectItems: ProjectItem[] = [
  {
    title: "Website",
    description: "Landing page for all other projects",
    imageLocations: [
      "/images/websiteImages/index.png",
      "/images/websiteImages/about.png",
      "/images/websiteImages/blog.png",
      "/images/websiteImages/projects.png"
    ],
    tagsList: [
      {
        icon: <FaCaretUp key="next" className="mr-1" />,
        title: "Next.JS",
        link: "https://nextjs.org/"
      },
      {
        icon: <FaReact key="react" className="mr-1" />,
        title: "React",
        link: "https://react.dev/"
      },
      {
        icon: <FaWind key="tailwind" className="mr-1" />,
        title: "Tailwind CSS",
        link: "https://tailwindcss.com/"
      }
    ],
    git: "https://github.com/JacobButcher-Github/jacob-website",
    route: "/website"
  }
];

const ProjectList = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      {projectItems.map((item) => (
        <div key={item.route} className="w-full">
          <ProjectCard item={item} />
        </div>
      ))}
    </div>
  )
}

export default ProjectList
