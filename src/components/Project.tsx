import React from "react";
import { ProjectInfo } from "../components/ProjectList";
import ProjectBanner from "../components/project/ProjectBanner";
import ProjectDetails from "../components/project/ProjectDetails";
import ProjectLinks from "../components/project/ProjectLinks";
import ProjectFeatures from "../components/project/ProjectFeatures";

interface Props {
  item: ProjectInfo;
}

const Project = (props: Props) => {
  const { item } = props;

  return (
    <div className="flex flex-col items-center text-mainText font-motiva-sans p-3 gap-2">
      <div className="bg-bgMain w-5/6 rounded-xl flex items-center p-3">
        <h1 className="text-2xl font-bold ml-3">{item.title}</h1>
      </div>
      <div className="bg-bgMain w-5/6 rounded-xl flex items-center p-3">
        <ProjectBanner item={item} />
      </div>
      <div className="flex flex-row w-5/6 gap-2">
        <div className="flex flex-col w-3/4 gap-2">
          <div className="bg-bgMain rounded-xl flex items-center p-3">
            <ProjectLinks item={item} />
          </div>
          <div className="bg-bgMain rounded-xl flex items-center p-3">
            <ProjectDetails item={item} />
          </div>
        </div>
        <div className="w-1/4 bg-bgMain rounded-xl flex p-3 justify-center">
          <ProjectFeatures item={item} />
        </div>
      </div>
    </div>
  );
};

export default Project;
