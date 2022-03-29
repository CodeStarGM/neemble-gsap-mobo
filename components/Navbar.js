import React, { useState } from "react";
import logo from "../assets/neemble-logo.png";
import Image from "next/image";
import play from "../assets/Play.png";

function Navbar({ navColor, navBtn, menu1, menu2, menu3, menu4, menu5 }) {
  const [menu, setMenu] = useState(false);

  const hamburger = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div
        className={`anim bg-glass-high fixed z-50 border-b-2 ${navColor} text-white navbar px-6 flex justify-between items-center w-screen h-20`}
      >
        <div>
          <ul className="hidden cursor-pointer lg:flex items-center space-x-9">
            <li className="w-14 h-auto">
              <Image src={logo} />
            </li>
            <li
              onClick={() => fullpage_api.silentMoveTo(1)}
              className={`anim text-xl ${menu1}`}
            >
              Neemble
            </li>
            <li
              onClick={() => fullpage_api.silentMoveTo(4)}
              className={`anim text-xl ${menu2}`}
            >
              Streamer Token
            </li>
            <li
              onClick={() => window.location.replace("/#tekenomics")}
              className={`anim text-xl ${menu3}`}
            >
              Tekenomics
            </li>
            <li
              onClick={() => window.location.replace("/#roadmap")}
              className={`anim text-xl ${menu4}`}
            >
              Road Map
            </li>
            <li
              onClick={() => window.location.replace("/#team")}
              className={`anim text-xl ${menu5}`}
            >
              Team
            </li>
            <li className="anim text-xl">Social</li>
          </ul>
        </div>
        <div className="hidden lg:flex justify-center items-center space-x-6">
          <a
            href="https://twitter.com/neemble"
            target="_blank"
            rel="noreferrer"
          >
            <button className="anim link-click text-base  border-2 border-[#36B9FF] h-8 px-4  rounded">
              Twitter
            </button>
          </a>
          <div
            className={`anim flex justify-center items-center space-x-2 border-[3px] ${navBtn} py-3 px-6 rounded`}
          >
            <Image width={25} height={25} src={play}></Image>
            <button className="anim">Neemble Demo</button>
          </div>
        </div>

        {/* mobile menu */}
        <div className="lg:hidden flex justify-between items-center  w-screen h-14">
          <div className="w-12 h-auto">
            <Image src={logo} />
          </div>
          <div>
            <svg
              onClick={hamburger}
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer link hover:text-gray-500 h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* mobile menu */}

      {menu ? (
        <div className="fixed z-50 rounded-xl link  bg-[#0d1733] w-[240px] h-[400px] right-6 top-16">
          <ul className="py-4 cursor-pointer text-white flex flex-col px-6">
            <li
              onClick={() => window.location.replace("/#home")}
              className="py-2 hover:border-b-2 hover:border-cyan-300"
            >
              Neemble
            </li>
            <li
              onClick={() => window.location.replace("/#streamer")}
              className="py-2 hover:border-b-2 hover:border-cyan-300"
            >
              Streamer Token
            </li>
            <li
              onClick={() => window.location.replace("/#tekenomics")}
              className="py-2 hover:border-b-2 hover:border-cyan-300"
            >
              Tekenomics
            </li>
            <li
              onClick={() => window.location.replace("/#roadmap")}
              className="py-2 hover:border-b-2 hover:border-cyan-300"
            >
              Road Map
            </li>
            <li
              onClick={() => window.location.replace("/#team")}
              className="py-2 hover:border-b-2 hover:border-cyan-300"
            >
              Team
            </li>
            <li className="py-2 hover:border-b-2 hover:border-cyan-300">
              Social
            </li>
            <li className="py-4">
              <a
                href="https://twitter.com/neemble"
                rel="noreferrer"
                target="_blank"
              >
                <button className=" text-sm  border-2 border-blue-500 py-1 px-2 rounded">
                  Twitter
                </button>
              </a>
            </li>
            <div>
              <button className="text-lg link border-2  border-[#00D8FA]  py-1 px-3 rounded">
                Neemble Demo
              </button>
            </div>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;

{
  /* <div onClick={() => window.location.replace("/#about")}> */
}
