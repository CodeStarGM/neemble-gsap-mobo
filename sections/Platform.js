import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Platform({ menuRef }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const anime = useAnimation();
  const lAnime = useAnimation();

  useEffect(() => {
    if (inView) {
      anime.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0,
        },
      });
      lAnime.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0,
        },
      });
    }
    if (!inView) {
      anime.start({
        y: "15vw",
        opacity: 0,
      });
      lAnime.start({
        x: "-100vw",
      });
    }
  }, [inView]);
  return (
    <div ref={menuRef}>
      <div
        id="streamer"
        ref={ref}
        className="lg:pb-40 pb-20 w-screen bg-royal flex flex-col items-center justify-center"
      >
        <div className="flex lg:flex-row flex-col lg:space-x-40">
          <motion.div
            animate={anime}
            className="w-[200px] md:w-[300px] lg:w-[400px]  h-[auto] hover:border-2 hover:rounded-md cursor-pointer"
          >
            <Image src={p1} placeholder="blur" />
          </motion.div>
          <motion.div
            animate={anime}
            className=" w-[200px] md:w-[300px] lg:w-[400px] h-[auto] hover:border-2 hover:rounded-md cursor-pointer"
          >
            <Image src={p2} placeholder="blur" />
          </motion.div>
        </div>
        <div className="mt-4 md:mt-14">
          <motion.div
            animate={lAnime}
            className="w-[350px] md:w-[700px] lg:w-[965px] h-[auto]  hover:border-2 hover:rounded-md cursor-pointer"
          >
            <Image src={p3} placeholder="blur" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Platform;
