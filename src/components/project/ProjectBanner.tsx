import { ProjectInfo } from "../../components/ProjectList";

interface Props {
  item: ProjectInfo;
}

const ProjectBanner = (props: Props) => {
  const { item } = props;
  return (
    <div className="">
      <button>{item.title}</button>
    </div>
  );
};

export default ProjectBanner;
