import React, { useState } from "react";
import Image from "next/image";
import { ProjectInfo } from "../ProjectList";

interface Props {
  item: ProjectInfo;
}

const ProjectPreviewPane = (props: Props) => {
  const { item } = props;
  const images = item.imageLocations;

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-5/6 h-96">
        <Image
          fill={true}
          src={mainImage}
          alt="MainImage"
          className="object-cover rounded"
        />
      </div>

      <div className="flex flex-row justify-center gap-3">
        {images.map((image, index) => (
          <div key={index} className="relative w-32 h-20">
            <Image
              fill={true}
              src={image}
              alt={`Small ${index + 1}`}
              className="object-cover cursor-pointer rounded"
              onClick={() => setMainImage(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPreviewPane;
