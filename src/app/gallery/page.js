import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Image Optimizations</h1>
      <Image
        src="https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fdashboard.png&w=1920&q=75"
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
