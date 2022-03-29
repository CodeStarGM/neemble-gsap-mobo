import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Pool({ menuRef }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const lAnime = useAnimation();

  useEffect(() => {
    if (inView) {
      lAnime.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0,
        },
      });
    }
    if (!inView) {
      lAnime.start({
        x: "-30vh",
        opacity: 0,
      });
    }
  }, [inView]);
  return (
    <div ref={menuRef}>
      <div
        ref={ref}
        className="flex py-44 justify-center items-center w-screen bg-gradient-to-r from-[#3b57b1] to-[#1a095e]  "
      >
        <motion.div
          animate={lAnime}
          className=" flex justify-evenly flex-col items-center bg-glass-1 rounded-xl bg-[#3282b7] opacity-90 md:w-[450px] md:h-[550px] w-[350px] h-[450px]   lg:w-[600px] lg:h-[650px]"
        >
          <h1 className="py-4 lg:text-6xl md:text-5xl text-2xl text-white font-semibold">
            Neemble Pool
          </h1>
          <ul className="font-medium lg:text-3xl md:text-2xl text-lg text-white flex flex-col">
            <li className="py-5">
              • &nbsp; Received in Watch to Earn/
              <br />
              &nbsp; &nbsp; Stream to Earn Rewards
            </li>
            <li className="py-5">• &nbsp;Rewarded in trivias and quizes</li>
            <li className="py-5">• &nbsp; On Stream mini games</li>
            <li className="py-5">• &nbsp; Streamer Token Airdrops</li>
            <li className="py-5">• &nbsp; and much more...</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Pool;
