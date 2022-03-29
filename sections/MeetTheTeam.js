import React from "react";
import dynamic from "next/dynamic";

const Team = dynamic(() => import("../components/Team"));
import { DATA } from "../components/TeamData";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

function MeetTheTeam({ menuRef }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const anime = useAnimation();
  const lAnime = useAnimation();

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
      lAnime.start({
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
        x: "-100vw",
      });
      lAnime.start({
        x: "-100vw",
      });
    }
  }, [inView]);
  return (
    <div>
      {/* Meet the Team */}
      <div
        ref={ref}
        className="flex flex-col py-16 justify-center items-center w-screen bg-[#0d1733] "
      >
        {/* tab */}
        <div className="flex justify-center items-center w-screen bg-royal">
          <h1 className="text-white font-semibold text-5xl">Meet The Team</h1>
        </div>
        {/* tab */}
        <div id="team" ref={menuRef}></div>
        <motion.div
          animate={anime}
          className="py-14 grid grid-cols-1 lg:grid-cols-4 gap-10"
        >
          {DATA.map((team) => (
            <Team
                key={team.name}
              tName={team.name}
              tTitle={team.title}
              tBio={team.bio}
              tImage={team.img}
            />
          ))}
        </motion.div>
      </div>
      {/* team */}
    </div>
  );
}

export default MeetTheTeam;
