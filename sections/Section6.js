import React from "react";
import Image from "next/image";
import twin from "../assets/twins.png";
import apple from "../assets/appStore.png";
import google from "../assets/googlePlay.png";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Section6({ menuRef }) {
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
      {/* promo 1  */}

      <div
        id="home"
        ref={ref}
        className=" flex lg:pt-0 pt-14 flex-col lg:flex-row lg:space-x-8 lg:justify-around  justify-evenly items-center   w-screen lg:h-screen h-[100vh]"
      >
        {/* main red box */}
        {/* image box */}

        {/* {//50%% width} */}
        <motion.div animate={effect1} className="lg:w-2/5 w-[85%] ">
          <Image src={twin} />
        </motion.div>

        {/* image box */}
        {/* glass yellow box */}
        {/* {//45%% width} */}
        <motion.div
          animate={effect2}
          className="lg:px-14 px-4 flex bg-glass-purple bg-black bg-opacity-60 text-white flex-col  justify-evenly items-start  lg:w-2/4 w-[90%] h-[400px] lg:h-[600px]"
        >
          <h1 className="lg:text-[44px] md:text-3xl text-xl ">
            IOS and Android Mobile Apps
          </h1>
          <h2 className="lg:text-[25px] md:text-xl  text-sm ">
            Neemble is a PC and Mobile first platform
            <br />
            <br />
            We want mobile users to have access to all neemble platform has to
            offer.
            <br />
            <br />
            Mobile streaming platform will be released with Neemble Beta release
          </h2>

          <div className=" flex w-full justify-evenly ">
            <div className="lg:w-[238px] w-36">
              <Image src={google} />
            </div>
            <div className="lg:w-[238px] w-32">
              <Image src={apple} />
            </div>
          </div>
        </motion.div>

        {/* glass box */}
      </div>
    </div>
  );
}

export default Section6;
