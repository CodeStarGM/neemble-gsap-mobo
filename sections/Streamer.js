import React from "react";
import Chart from "chart.js/auto";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

function NMBL({ menuRef }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const anime = useAnimation();

  useEffect(() => {
    if (inView) {
      anime.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0,
        },
      });
    }
    if (!inView) {
      anime.start({
        x: "-20vw",
      });
    }
  }, [inView]);
  const blue = "#3bb3e2";
  const pink = "#ff7894";
  const green = "#00c499";
  const purple = "#8200c8";
  const data = {
    labels: [
      "Streamer Holders",
      "Neemble Pool",
      "Available on Swap",
      "Airdrops",
    ],
    datasets: [
      {
        data: ["38", "27", "18", " 17"],

        backgroundColor: [blue, pink, green, purple],
        borderColor: [blue, pink, green, purple],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div ref={menuRef}>
      <div
        id="tekenomics"
        ref={ref}
        className="bg-royal lg:pt-0 pt-20 md:pt-20 flex items-center lg:flex-row flex-col-reverse  justify-evenly lg:h-[90vh] h-[90vh] w-screen"
      >
        {/* data */}
        <motion.div
          animate={anime}
          className="lg:justify-center lg:items-end items-center  flex lg:pt-24 flex-col w-[100%] lg:w-[50%] h-full "
        >
          <div className="text-white lg:px-14 flex flex-col w-[70%] justify-between h-64">
            {/* line div */}
            <div className="w-full h-10 flex items-center justify-between ">
              <div className="flex items-center space-x-4">
                <div
                  style={{
                    boxShadow: `0 0 9px ${blue} `,
                    background: `${blue}`,
                  }}
                  className="h-4 w-4  rounded-full"
                ></div>
                <h1 className="lg:text-xl text-lg">Streamer Holders</h1>
              </div>
              <p className="lg:text-xl text-lg">38%</p>
            </div>
            {/* line div endd */}
            {/* line div */}
            <div className="w-full h-10 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div
                  style={{
                    boxShadow: `0 0 9px ${pink} `,
                    background: `${pink}`,
                  }}
                  className="h-4 w-4  rounded-full"
                ></div>
                <h1 className="lg:text-xl text-lg">Neemble Pool</h1>
              </div>
              <p className="lg:text-xl text-lg">27%</p>
            </div>
            {/* line div endd */}
            {/* line div */}
            <div className="w-full h-10 flex items-center justify-between ">
              <div className="flex items-center space-x-4">
                <div
                  style={{
                    boxShadow: `0 0 9px ${green} `,
                    background: `${green}`,
                  }}
                  className="h-4 w-4  rounded-full"
                ></div>
                <h1 className="lg:text-xl text-lg">Available on Swap</h1>
              </div>
              <p className="lg:text-xl text-lg">18%</p>
            </div>
            {/* line div endd */}
            {/* line div */}
            <div className="w-full h-10 flex items-center justify-between ">
              <div className="flex items-center space-x-4">
                <div
                  style={{
                    boxShadow: `0 0 9px ${purple} `,
                    background: `${purple}`,
                  }}
                  className="h-4 w-4  rounded-full"
                ></div>
                <h1 className="lg:text-xl text-lg">Airdrops</h1>
              </div>
              <p className="lg:text-xl text-lg">17%</p>
            </div>
            {/* line div endd */}
          </div>
        </motion.div>
        <div className=" lg:py-8 flex justify-center items-center lg:items-end w-[80%] lg:w-[50%] h-full ">
          <div className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] lg:w-[587px] lg:h-[587px]">
            <Doughnut data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NMBL;
