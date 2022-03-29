import React from "react";
import Chart from "chart.js/auto";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import ChartData from "../components/ChartData";

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

  const data = {
    labels: [
      "Stream-2-earn, watch-2-earn rewards pool",
      "Team",
      "Exchange",
      "Marketing",
      "Airdrops",
      "Burn",
      "Advisors",
      "Locked for 10 years",
    ],
    datasets: [
      {
        data: ["11", "10", " 6", " 5", " 3", " 3", " 2", "60"],

        backgroundColor: [
          "#a17900",
          "#03b94f",
          "#523dff",
          "#ff0000",
          "#55ffe8",
          "#bf55b2",
          "#fddc00",
          "#6f00c5",
        ],
        borderColor: [
          "#a17900",
          "#03b94f",
          "#523dff",
          "#ff0000",
          "#55ffe8",
          "#bf55b2",
          "#fddc00",
          "#6f00c5",
        ],
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
        className="bg-royal lg:pt-0 pt-0 md:pt-20 flex items-center lg:flex-row flex-col justify-evenly lg:h-[100vh] h-[130vh] w-screen"
      >
        <div className="lg:py-8 flex justify-center items-center lg:items-end w-[80%] lg:w-[50%] h-full ">
          <div className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] lg:w-[647px] lg:h-[647px]">
            <Doughnut data={data} options={options} />
          </div>
        </div>

        {/* data */}
        <motion.div
          animate={anime}
          className=" lg:justify-center flex pt-14 flex-col w-[80%] lg:w-[50%] h-full "
        >
          <div className="justify-center flex space-x-10 items-center">
            <div className="rounded-xl flex flex-col justify-evenly items-center text-white h-[80px] md:h-[132px] border-2 nav-blue border-[#00D8FA] w-[150px] md:w-[293px] ">
              <p className="text-xs md:text-lg">Token Name</p>
              <h1 className="text-lg md:text-4xl">NEEMBLE</h1>
            </div>
            <div className="rounded-xl flex flex-col justify-evenly items-center text-white h-[80px] md:h-[132px] border-2 nav-blue border-[#00D8FA]  w-[150px] md:w-[293px] ">
              <p className="text-xs md:text-lg">Token supply</p>
              <h1 className="text-lg md:text-4xl">800,000,000</h1>
            </div>
          </div>
          {/* data div */}
          <div className="text-center py-14">
            <ChartData
              color="#a17900"
              name="Stream-2-earn, watch-"
              ename="2-earn rewards pool"
              percent="11%"
              number="88.000.000"
            />
            <ChartData
              color="#03b94f"
              name="Team"
              percent="10%"
              number="80.000.000"
            />
            <ChartData
              color="#523dff"
              name="Exchange"
              percent="6%"
              number="48.000.000"
            />
            <ChartData
              color="#ff0000"
              name="Marketing"
              percent="5%"
              number="40.000.000"
            />
            <ChartData
              color="#55ffe8"
              name="Airdrops"
              percent="3%"
              number="24.000.000"
            />
            <ChartData
              color="#bf55b2"
              name="Burn"
              percent="3%"
              number="24.000.000"
            />
            <ChartData
              color="#fddc00"
              name="Advisors"
              percent="2%"
              number="16.000.000"
            />
            <ChartData
              color="#6f00c5"
              name="Locked for 10 years"
              percent="60%"
              number="480.000.000"
            />
          </div>

          {/* data div */}
        </motion.div>
      </div>
    </div>
  );
}

export default NMBL;
