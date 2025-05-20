import { ProjectInfo } from "../ProjectList";

interface Props {
  item: ProjectInfo;
}

const ProjectFeatures = (props: Props) => {
  const { item } = props;
  return (
    <div className="">
      <h1 className="text-dimText text-xl ml-4">{item.title} Features</h1>
      <div className="ml-4">
        {item.features.map((value, index) => (
          <li key={index} className="text-colorPrimary">
            {value}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ProjectFeatures;
