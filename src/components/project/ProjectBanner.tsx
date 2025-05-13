import { ProjectInfo } from "../../components/ProjectList";
import ProjectPreviewPane from "./ProjectPreviewPane";

interface Props {
  item: ProjectInfo;
}

const ProjectBanner = (props: Props) => {
  const { item } = props;
  return (
    <div className="flex-row flex w-full">
      <div className="w-1/2">
        <ProjectPreviewPane item={item} />
      </div>
      <div className="flex-col">
        <button>{item.title}</button>
      </div>
    </div>
  );
};

export default ProjectBanner;
