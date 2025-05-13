import { ProjectInfo } from "../../components/ProjectList";
import ProjectPreviewPane from "./ProjectPreviewPane";

interface Props {
  item: ProjectInfo;
}

const ProjectBanner = (props: Props) => {
  const { item } = props;
  return (
    <div className="w-1/2 flex-row">
      <ProjectPreviewPane item={item} />
      <div className="flex-col">
        <button>{item.title}</button>
      </div>
    </div>
  );
};

export default ProjectBanner;
