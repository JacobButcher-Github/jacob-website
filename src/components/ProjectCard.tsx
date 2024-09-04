import React from "react";
import Link from "next/link";
import { ProjectItem } from "./ProjectList";
import PreviewPane from "./PreviewPane";

interface Props {
  projectItems: ProjectItem[];
}

const ProjectCard = (props: Props) => {
  const { projectItems } = props;

  return (
    <>
      <div>
        {projectItems.map((item) => (
          <Link
            key={item.route}
            href={item.route}
          >
            <div className="bg-bgMain hover:bg-bgHover flex flex-row items-start w-full">
              <PreviewPane item={item} />
              <div className="w-2/3 flex flex-col text-mainText">
                <div className="text-2xl">{item.title}</div>
                <div className="">{item.description}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
