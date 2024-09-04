import React from "react";
import Link from 'next/link';
import ProjectCard from "./ProjectCard";
import { FaReact, FaCaretUp, FaWind } from 'react-icons/fa';

export interface ProjectItem {
  title: string,
  description: string,
  imageLocations: string[],
  tagsString: string[],
  tags: React.ReactNode[];
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
    ],
    tagsString: [
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
    tags: [
      <FaReact key="react" className="mr-2" />,
      <FaCaretUp key="next" className="mr-2" />,
      <FaWind key="tailwind" className="mr-2" />,
    ],
    git: "https://github.com/JacobButcher-Github/jacob-website",
    route: "/website"
  }
];

const ProjectList = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
    </div>
  )
}

export default ProjectList
