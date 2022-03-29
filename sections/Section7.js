import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
import clips from "../assets/clips.png";

function Section7({ menuRef }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const effect1 = useAnimation();
  const effect2 = useAnimation();

  useEffect(() => {
    if (inView) {
      effect1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0,
        },
      });
      effect2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0,
        },
      });
    }
    if (!inView) {
      effect1.start({
        x: "-100vw",
      });
      effect2.start({
        x: "-50vw",
      });
    }
  }, [inView]);
  return (
    <div ref={menuRef}>
      {/* promo 2 */}
      <div
        id="home"
        ref={ref}
        className=" flex lg:pt-0 pt-14  flex-col-reverse lg:flex-row lg:space-x-8 lg:justify-around  justify-evenly items-center   w-screen lg:h-[70vh] h-[100vh]"
      >
        {/* main red box */}
        {/* image box */}

        {/* {//50%% width} */}

        {/* image box */}
        {/* glass yellow box */}
        {/* {//45%% width} */}
        <motion.div
          animate={effect1}
          className="lg:px-14 px-4 flex bg-glass-purple bg-black bg-opacity-60 text-white flex-col  justify-around items-start  lg:w-2/4 w-[90%]	lg:h-[500px] h-[350px]"
        >
          <h1 className="flex w-full justify-center items-center lg:text-[44px] md:text-3xl text-2xl text-center ">
            <span>Neemble Clips</span>
          </h1>
          <h2 className="md:px-14 text-center lg:text-justify lg:text-[25px] md:text-xl text-sm">
            0-120 second Horrizontal Tik-Tok Like Clips .
            <br />
            <br />
            Swipe up to see next clip, discover moments of new up and coming
            streamers
            <br />
            <br />
            Streamer meme moments, amazing highlighted plays.
            <br />
            <br />
            Short, interesting, and nimble
          </h2>

          <div className="flex w-full justify-evenly "></div>
        </motion.div>

        {/* image box */}
        <motion.div animate={effect2} className="lg:w-2/5 w-[85%] ">
          <Image src={clips} />
        </motion.div>
      </div>
    </div>
  );
}

export default Section7;
