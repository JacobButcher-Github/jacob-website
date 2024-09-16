import React from "react";
import Link from "next/link";
import { ProjectItem } from "./ProjectList";
import PreviewPane from "./PreviewPane";

interface Props {
  item: ProjectItem;
}

const ProjectCard = (props: Props) => {
  const { item } = props;

  return (
    <>
      <Link href={item.route}>
        <div className="bg-bgMain hover:bg-bgHover flex flex-row items-start w-full p-2 rounded space-x-5">
          <div className="w-5/12">
            <PreviewPane item={item} />
          </div>

          <div className="w-7/12 flex flex-col text-mainText">
            <div className="text-2xl">{item.title}</div>
            <div className="">{item.description}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
