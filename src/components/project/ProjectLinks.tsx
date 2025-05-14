import { ProjectInfo } from "../../components/ProjectList";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface Props {
  item: ProjectInfo;
}

const ProjectLinks = (props: Props) => {
  const { item } = props;
  return (
    <div className="flex flex-row w-full justify-between font-motiva-sans">
      <div className="flex flex-col">
        <h1 className="text-1xl font-bold ml-3">{item.title}</h1>
        <p className="ml-3 text-colorPrimary"> Now with more sadness! </p>
      </div>
      <Link
        href={item.git}
        className="flex items-center text-black bg-accentGreen px-5 py-2 rounded-md hover:bg-hoverAccentGreen font-medium"
      >
        <FaGithub className="mr-2" /> Repository
      </Link>
    </div>
  );
};

export default ProjectLinks;
