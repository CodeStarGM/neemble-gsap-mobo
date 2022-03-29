import Head from "next/head";
import dynamic from "next/dynamic";
import {useInView} from "react-intersection-observer";
import {useEffect, useRef, useState} from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import {gsap} from "gsap";


const AnimatedBackground = dynamic(() => import("../components/AnimatedBackground"));
const AnimatedBackgroundMobile = dynamic(() => import("../components/AnimatedBackgroundMobile"));
const Navbar = dynamic(() => import("../components/Navbar"));
const Section1 = dynamic(() => import("../sections/Section1"));
const Section2 = dynamic(() => import("../sections/Section2"));
const Section3 = dynamic(() => import("../sections/Section3"));
const Section4 = dynamic(() => import("../sections/Section4"));
const Section5 = dynamic(() => import("../sections/Section5"));
const Section6 = dynamic(() => import("../sections/Section6"));
const Section7 = dynamic(() => import("../sections/Section7"));
const Platform = dynamic(() => import("../sections/Platform"));
const NMBL = dynamic(() => import("../sections/NMBL"));
const Streamer = dynamic(() => import("../sections/Streamer"));
const Pool = dynamic(() => import("../sections/Pool"));
const Roadmap = dynamic(() => import("../sections/Roadmap"));
const MeetTheTeam = dynamic(() => import("../sections/MeetTheTeam"));

export default function Home() {
    //Use State
    const [nav, setNav] = useState();
    const [btn, setBtn] = useState();
    const [neemble, setNeemble] = useState();
    const [streamer, setStreamer] = useState();
    const [tekenomics, setTekenomics] = useState();
    const [roadmap, setRoadmap] = useState();
    const [team, setTeam] = useState();
    //Use In View
    const [homeRef, homeView] = useInView();
    const [section4Ref, section4View] = useInView();
    const [section7Ref, section7View] = useInView();
    const [platformRef, platformView] = useInView();
    const [nmblRef, nmblView] = useInView();
    const [poolRef, poolView] = useInView();
    const [roadmapRef, roadmapView] = useInView();
    const [teamRef, TeamView] = useInView();

    const [animBgScreen, setAnimBgScreen] = useState("")
    const [isMobile, setIsMobile] = useState(false)
    const [width, setWidth] = useState(0);
    const [timeline, setTimeline] = useState(gsap.timeline({paused: false}))
    const [timeline2, setTimeline2] = useState(gsap.timeline({paused: false,}))



    const afterLoad = (origin) => {

    }

    const onLeave = (origin, destination, direction) => {
        let destinationAnim = gsap.utils.toArray(destination.item.getElementsByClassName("anim"))
        if (destinationAnim.length) {
            timeline.fromTo(destinationAnim, {opacity: 0, x: -50}, {
                delay: 1,
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.3
            }) //анимация при появлении
        }
        let originAnim = gsap.utils.toArray(origin.item.getElementsByClassName("anim"))
        if (originAnim.length) {
            timeline2.to(originAnim, {opacity: 0, x: -50, duration: 0.1, ease: "power4.inOut", stagger: 0.1})//анимация при исчезновении
        }

        for (let i = 0; i < 9; i++) {
            if (direction === "down" && destination.index === i + 1) setAnimBgScreen("down" + (i + 1))
            if (direction === "up" && destination.index === i) setAnimBgScreen("up" + (i + 1))
        }

        // console.log("index direction",direction)
        // console.log("index destination",destination.index)
    }


 const handleResize = () => setWidth(window.innerWidth);
 useEffect(() => {
     window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
     console.log(width)
}, [handleResize]);

useEffect(()=>{

        console.log("resp start")
        if (window.innerWidth < 1024) {
            fullpage_api.setResponsive(true);
            console.log("   setIsMobile(true)")
            setIsMobile(true)
        } else {
            fullpage_api.setResponsive(false);
            setIsMobile(false)
            console.log("  setIsMobile(false)")
        }

},[width])


    useEffect(() => {


        if (TeamView) {
            setNav("border-b-[#00D8FA] nav-blue");
            setBtn("border-[#00D8FA]");
            setTekenomics("");
            setStreamer("");
            setRoadmap("");
            setTeam("link border-2 border-[#00D8FA] rounded-[7px] px-3 py-1");
            setNeemble("");
        }
        if (roadmapView) {
            setNav("border-b-[#905FA8] nav-purple");
            setBtn("border-[#905FA8]");
            setTekenomics("");
            setStreamer("");
            setRoadmap(
                " border-2 border-[#905FA8] nav-purple rounded-[7px] px-3 py-1"
            );
            setTeam("");
            setNeemble("");
        }
        if (nmblView) {
            setTekenomics("link border-2 border-[#00D8FA] rounded-[7px] px-3 py-1");
            setStreamer("");
            setRoadmap("");
            setTeam("");
            setNeemble("");
        }
        if (platformView) {
            setNav("border-b-[#905FA8] nav-purple");
            setBtn("border-[#905FA8]");
        }

        if (section7View) {
            setNav("border-b-[#00D8FA] nav-blue");
            setBtn("border-[#00D8FA]");
        }
        if (poolView) {
            setNav("border-b-[#00D8FA] nav-blue");
            setBtn("border-[#00D8FA]");
        }
        if (homeView) {
            setNav("border-b-[#00D8FA] nav-blue");
            setBtn("border-[#00D8FA]");
            setNeemble("link border-2 border-[#00D8FA] rounded-[7px] px-3 py-1");
            setStreamer("");
            setTekenomics("");
            setRoadmap("");
            setTeam("");
        }
        if (section4View) {
            setStreamer(
                " border-2 border-[#905FA8] nav-purple rounded-[7px] px-3 py-1"
            );
            setNav("border-b-[#905FA8] nav-purple");
            setBtn("border-[#905FA8]");
            setNeemble("");
            setTekenomics("");
            setRoadmap("");
            setTeam("");
        }
    }, [
        TeamView,
        roadmapView,
        nmblView,
        platformView,
        section7View,
        poolView,
        homeView,
        section4View,
    ]);

    return (
        <>
            <Head>
                <title>Neemble</title>
                <meta
                    name="description"
                    content="Neemble The Ultimate blockchain watch to earn & stream to earn platform"
                />
            </Head>
            <Navbar
                navColor={nav}
                navBtn={btn}
                menu1={neemble}
                menu2={streamer}
                menu3={tekenomics}
                menu4={roadmap}
                menu5={team}
            />
            {isMobile
                ? <AnimatedBackgroundMobile />
                : <AnimatedBackground animBgScreen={animBgScreen}/>
            }
            <ReactFullpage
                //navigation
                onLeave={onLeave}
                afterLoad={afterLoad}
                scrollingSpeed={1000}
                responsiveWidth={1024}
                //afterResponsive={afterResponsive}
                licenseKey={"A4CA5DAC-AE684D56-BF68A5C5-C7FB0D76"}
                render={() =>
                    (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <Section1 menuRef={homeRef}/>
                            </div>
                            <div className="section">
                                <Section2/>
                            </div>
                            <div className="section">
                                <Section3/>
                            </div>
                            <div className="section">
                                <Section4 menuRef={section4Ref}/>
                            </div>
                            <div className="section">
                                <Section5/>
                            </div>
                            <div className="section">
                                <Section6/>
                            </div>
                            <div className="section">
                                <Section6/>
                            </div>
                            <div className="section">
                                <Section7 menuRef={section7Ref}/>
                            </div>
                            <div className="section">
                                <div className="flex justify-center items-center w-screen py-14 bg-royal">
                                    <h1 className="text-white font-semibold text-3xl lg:text-5xl">
                                        Neemble Platform
                                    </h1>
                                </div>
                            </div>
                            <div className="section">
                                <Platform menuRef={platformRef}/>
                            </div>
                            <div className="section">
                                <div className="flex justify-center items-center w-screen bg-royal">
                                    <h1 className="text-white font-semibold text-3xl lg:text-5xl">
                                        NMBL Tokenomics
                                    </h1>
                                </div>
                            </div>
                            <div className="section">
                                <NMBL menuRef={nmblRef}/>
                            </div>
                            <div className="section">
                                <div className="lg:pt-44 flex justify-center items-center w-screen bg-royal">
                                    <h1 className="text-white font-semibold text-2xl md:text-3xl lg:text-5xl">
                                        Streamer Token Tokenomics
                                    </h1>
                                </div>
                            </div>
                            <div className="section">
                                <Streamer/>
                            </div>
                            <div className="section">
                                <Pool menuRef={poolRef}/>
                            </div>
                            <div className="section">
                                <Roadmap menuRef={roadmapRef}/>
                            </div>
                            <div className="section">
                                <MeetTheTeam menuRef={teamRef}/>
                            </div>
                        </ReactFullpage.Wrapper>
                    )
                }
            />
        </>
    );
}
