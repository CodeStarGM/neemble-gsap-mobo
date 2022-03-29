import React from "react";
import Image from "next/image";

function Team({ tImage, tName, tTitle, tBio }) {
  return (
    <div className="team rounded-xl md:h-44 md:w-96 h-44 w-80 flex justify-center items-center ">
      <div className="w-2/5">
        <Image width={120} height={120} src={tImage} placeholder="blur" />
      </div>
      <div className="w-3/5 ">
        <h1 className="text-white text-2xl">{tName}</h1>
        <h2 className="text-white text-lg">{tTitle}</h2>
        <p className="text-white text-sm">{tBio}</p>
      </div>
    </div>
  );
}

export default Team;
