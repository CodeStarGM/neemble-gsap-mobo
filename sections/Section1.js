import React, {useRef} from "react";
import Image from "next/image";
import play from "../assets/Play.png";
import web1 from "../assets/mac1.png";

function Section1({ menuRef }) {
  return (
    <div
      ref={menuRef}
      id="home"
      className="flex lg:pt-0 pt-28 flex-col-reverse lg:flex-row lg:space-x-8 lg:justify-evenly justify-between items-center   w-screen lg:h-screen h-[100vh]"
    >
      <div className="anim flex rounded-md bg-glass text-white flex-col  justify-evenly items-center  lg:w-[45%] w-[90%]	 h-[450px]"
      >
        <h1 className="anim lg:text-[45px] md:text-3xl text-xl text-center lg:w-full w-44">
          New Era of Game Streaming is here
        </h1>
        <h2 className="anim lg:text-[30px] md:text-xl text-sm text-center md:w-[550px] w-56">
          The Ultimate Blockchain Watch to Earn & Stream to Earn Platform
        </h2>
        <div className="anim flex lg:flex-row flex-col lg:space-x-14  justify-center items-center">
          <div className=" md:border-2 border rounded border-[#00D8FA] flex justify-evenly md:w-62 items-center">
            <Image src={play}></Image>
            <button className=" py-2 lg:px-5 px-4 md:text-2xl text-sm  ">
              Explainer Video
            </button>
          </div>
          <div className="anim lg:py-0 py-4">
            <button className="rounded py-2 md:px-12 px-[45px] md:text-2xl text-sm md:border-2 border border-white">
              Lightpaper
            </button>
          </div>
        </div>
      </div>

      {/* glass box */}

      {/* image box */}

      {/* {//50%% width} */}
      <div className="anim startTrigger lg:w-[40%] w-4/5 lg:py-0 py-14  h-[540px] "
      >
        <Image src={web1} />
      </div>

      {/* image box */}
    </div>
  );
}

export default Section1;
