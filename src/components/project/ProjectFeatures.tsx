import { ProjectInfo } from "../ProjectList";

interface Props {
  item: ProjectInfo;
}

const ProjectFeatures = (props: Props) => {
  const { item } = props;
  return (
    <div className="">
      <button>{item.title}</button>
    </div>
  );
};

export default ProjectFeatures;
