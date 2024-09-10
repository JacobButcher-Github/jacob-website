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
    <div className="flex flex-col items-center space-y-2">
      <div className="w-full h-64 flex justify-center items-center">
        <Image
          fill={true}
          src={mainImage}
          alt="MainImage"
          className="w-2/3 h-full object-cover"
        />
      </div>

      <div className="flex flex-col slace-y-2">
        {images.slice(1).map((image, index) => (
          <Image
            fill={true}
            key={index}
            src={image}
            alt={`Small ${index + 1}`}
            className="w-16 h-16 object-cover cursor-pointer"
            onMouseEnter={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default PreviewPane;
