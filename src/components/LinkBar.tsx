import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

export interface LinkBarItem {
  title: string;
  route?: string;
  icon?: React.ReactNode;
}

const linkBarItems: LinkBarItem[] = [
  {
    title: "GitHub",
    route: "https://github.com/JacobButcher-Github",
    icon: <FaGithub className="mr-2" />,
  },
  {
    title: "LinkedIn",
    route: "https://www.linkedin.com/in/jacob-butcher-491aa21a9/",
    icon: <FaLinkedinIn className="mr-2" />,
  },
  {
    title: "Email",
    route: "mailto:osarukun@live.com",
    icon: <FaEnvelope className="mr-2" />,
  },
];

const LinkBar = () => {
  return (
    <div className="flex gap-20 justify-center items-center">
      {linkBarItems.map((item, index) => (
        <a
          key={index}
          href={item.route}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-mainText bg-colorSecondary hover:text-black hover:bg-colorPrimary px-5 py-2 rounded-md">
          {item.icon}
          <span text-xl>{item.title}</span></a>
      ))}
    </div>
  );
};

export default LinkBar


