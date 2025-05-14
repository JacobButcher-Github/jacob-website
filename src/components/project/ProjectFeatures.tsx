import { ProjectInfo } from "../ProjectList";

interface Props {
  item: ProjectInfo;
}

const ProjectFeatures = (props: Props) => {
  const { item } = props;
  return (
    <div className="">
      <h1 className="text-dimText text-xl ml-2">{item.title} Features</h1>
      <div className="">
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
