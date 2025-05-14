import { ProjectInfo } from "../ProjectList";

interface Props {
  item: ProjectInfo;
}

const ProjectDetails = (props: Props) => {
  const { item } = props;
  return (
    <div>
      <h1 className="text-dimText text-xl ml-2 font-semibold">
        About {item.title}
      </h1>
      <div className="mt-2 ml-4 space-y-4">
        {Object.entries(item.about).map(([key, value], index) => (
          <div key={index}>
            <li className="font-medium text-colorPrimary list-disc">{key}</li>
            <p className="text-sm text-mainText">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
