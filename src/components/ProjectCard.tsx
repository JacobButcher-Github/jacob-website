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
        <div className="bg-bgMain hover:bg-bgHover flex flex-row items-start w-full">
          <PreviewPane item={item} />
          <div className="w-2/3 flex flex-col text-mainText">
            <div className="text-2xl">{item.title}</div>
            <div className="">{item.description}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
