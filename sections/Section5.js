import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
import teams from "../assets/team1.png";
import Image from "next/image";
function Section5({ menuRef }) {
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
      <div
        id="home"
        ref={ref}
        className="flex lg:pt-0 flex-col-reverse lg:flex-row lg:space-x-8  lg:justify-around  justify-evenly items-center   w-screen lg:h-screen h-[130vh]"
      >
        {/* main red box */}
        {/* image box */}

        {/* {//50%% width} */}

        {/* image box */}
        {/* glass yellow box */}
        {/* {//45%% width} */}
        <motion.div
          animate={effect1}
          className="lg:px-14 px-4 flex bg-glass-purple bg-black bg-opacity-60 text-white flex-col  justify-evenly items-start  lg:w-2/4 w-[90%]	lg:h-[681px] h-[551px]"
        >
          <h1 className="lg:w-full  lg:text-[45px] md:text-3xl text-2xl ">
            Introducing Team Streams
          </h1>
          <h2 className="lg:text-[25px] md:text-xl text-base -mt-8 ">
            This has never been done. Even though most streamed games are
            team-games and teams can have multiple streamers.
            <br />
            <br />
            Team Streams let you access a connected stream between 2 or more
            streamers
            <br />
            <br />
            Your favorite streamers could team stream on 1 live-feed, and our
            streaming platform letting you immerse into the team-play
            <br />
            <br />
            Your favorite esports teams can stream their practice games with
            voice or webcameras on giving you a full emmersion into their
            team-play
          </h2>
        </motion.div>

        {/* image box */}
        <motion.div animate={effect2} className="lg:w-2/5 w-[85%] ">
          <Image src={teams} />
        </motion.div>
      </div>
    </div>
  );
}

export default Section5;
