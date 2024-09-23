import React from "react";
import Link from "next/link";
import { ProjectItem } from "./ProjectList";
import PreviewPane from "./PreviewPane";
import { FaGithub } from 'react-icons/fa';

interface Props {
  item: ProjectItem;
}

const ProjectCard = (props: Props) => {
  const { item } = props;

  return (
    <div
      className="bg-bgMain hover:bg-bgHover flex flex-row items-start w-full p-2 rounded space-x-5"
    >
      <div className="w-5/12">
        <PreviewPane item={item} />
      </div>

      <div className="w-7/12 flex flex-col space-y-1 text-mainText">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="text-dimText">{item.description}</div>
        <div className="flex flex-row space-x-2">
          {item.tagsList.map((tag, index) => (
            <Link
              key={index}
              className="bg-bgHighlight p-1 flex items-center text-dimText hover:bg-bgTertiary rounded"
              href={tag.link}
              onClick={(e) => e.stopPropagation()}
            >
              {tag.icon}
              <span>{tag.title}</span>
            </Link>
          ))}
        </div>
        <div className="p-14" />
        <div className="self-end flex flex-row space-x-2">
          <Link className="flex items-center p-1 bg-accentGreen hover:bg-hoverAccentGreen rounded" href={item.git}>
            <FaGithub className="mr-2" /><span>Github Page</span>
          </Link>
          <Link className="flex items-center p-1 hover:bg-bgTertiary bg-bgHighlight rounded" href="/website">
            Visit Website Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
