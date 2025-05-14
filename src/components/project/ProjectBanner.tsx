import { ProjectInfo } from "../../components/ProjectList";
import ProjectPreviewPane from "./ProjectPreviewPane";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: ProjectInfo;
}

const ProjectBanner = (props: Props) => {
  const { item } = props;
  return (
    <div className="flex-row flex w-full">
      <div className="w-2/3">
        <ProjectPreviewPane item={item} />
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center">
        <div className="relative w-80 h-40">
          <Image
            fill={true}
            src={item.bannerLocation}
            alt={"banner"}
            className="object-cover rounded"
          />
        </div>
        <p className="font-motiva-sans text-mainText">{item.description}</p>
        {/* TODO: Github activity graph goes here when I figure out how to do that.  */}
        <div className="flex flex-row space-x-2 gap-2">
          <p className="font-motiva-sans text-dimText">Tags:</p>
          {item.tagsList.map((tag, index) => (
            <Link
              key={index}
              className="bg-bgHighlight p-1 flex items-center text-dimText hover:bg-bgSecondary rounded"
              href={tag.link}
              onClick={(e) => e.stopPropagation()}
            >
              {tag.icon}
              <span>{tag.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
