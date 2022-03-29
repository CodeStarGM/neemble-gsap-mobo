import React from "react";
import Image from "next/image";
import cardImage from "../assets/cards.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
function Section4({ menuRef }) {
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
      {/* 4 cards  */}
      {/* another */}
      <div
        id="streamer"
        ref={ref}
        className="anim flex flex-col lg:flex-row lg:space-x-8 lg:justify-around  justify-evenly items-center   w-screen lg:h-screen h-[140vh]"
      >
        {/* main red box */}
        {/* image box */}

        {/* {//50%% width} */}
        <motion.div animate={effect1} className="lg:w-2/5 w-full ">
          <Image src={cardImage} />
        </motion.div>

        {/* image box */}
        {/* glass yellow box */}
        {/* {//45%% width} */}
        <motion.div
          animate={effect2}
          className="px-10 lg:px-14 flex rounded-lg bg-glass text-white flex-col  justify-evenly items-start  lg:w-2/4 w-[90%]	 h-[614px]"
        >
          <h1 className="anim  lg:w-full w-[300px] lg:text-[40px] md:text-3xl text-2xl ">
            Introducing NFT Subscription Passes
          </h1>
          <h2 className="anim  lg:text-[20px] md:text-xl text-sm w-64 lg:w-full">
            NFT-Passes will let holders be elligible for: small and big streamer
            token airdrops, NMBL token airdrops, NFT pass staking, streamer
            token staking, white-list spots to private streamer token sales,
            access to the streamer’s alpha chat and more...
            <br />
            <br />
            Passes have 25 levels, and Mana is required to upgrade your
            NFT-passes, mana is used to activate your rewards
            <br />
            <br />
            In stead of the charity and ads based monetization model we aim to
            turn every streamer into a free-to-watch, netflix-like subscription.
          </h2>

          <button className="anim lg:w-[30vw] w-[75vw] rounded py-2 px-4 lg:text-lg md:text-sm text-xs border-2 border-white">
            Litepaper link: NFT Pass Subscription Model
          </button>
        </motion.div>

        {/* glass box */}
      </div>
    </div>
  );
}

export default Section4;
