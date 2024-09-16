import React, { useState } from "react";
import Image from "next/image";
import { ProjectItem } from "./ProjectList";

interface Props {
  item: ProjectItem;
}

const PreviewPane = (props: Props) => {
  const { item } = props;
  const images = item.imageLocations;

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-row items-center space-y-2">
      <div className="w-2/3 h-64 flex justify-center items-center relative">
        <Image
          fill={true}
          src={mainImage}
          alt="MainImage"
          className="object-cover rounded"
        />
      </div>

      <div className="w-1/3 flex flex-col ml-2">
        {images.slice(1).map((image, index) => (
          <div key={index} className="relative w-30 h-20">
            <Image
              fill={true}
              src={image}
              alt={`Small ${index + 1}`}
              className="object-cover cursor-pointer rounded"
              onMouseEnter={() => setMainImage(image)}
              onMouseOut={() => setMainImage(images[0])}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewPane;
