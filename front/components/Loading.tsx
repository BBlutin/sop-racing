import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-2/3 h-2/3">
        <Image
          src="/assets/loading.svg"
          className="object-contain"
          fill
          alt=""
        />
      </div>
    </div>
  );
};

export default Loading;
